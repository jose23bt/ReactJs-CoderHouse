import React, { useState, useContext } from "react";
import CheckoutForm from "./CheckoutForm";
import { collection, getDocs, query, where, documentId, addDoc, Timestamp, writeBatch } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../components/ThemeContext";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [objOrder, setObjOrder] = useState(null);
    const { darkMode } = useContext(ThemeContext);
    const cartContext = useContext(CartContext);
    const { cart, clearCart } = cartContext;

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const newOrder = {
                buyer: {
                    name,
                    phone,
                    email
                },
                items: cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price,
                    subtotal: item.quantity * item.price
                })),
                total: cart.reduce((acc, item) => acc + item.quantity * item.price, 0),
                date: Timestamp.fromDate(new Date())
            };
            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cart.map(prod => prod.id);

            const productsRef = collection(db, "products");

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)));

            const { docs } = productsAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = await addDoc(collection(db, "orders"), newOrder);
                setOrderId(orderRef.id);
                clearCart();
                setObjOrder(newOrder); 
            } else {
                console.error("Hay productos que están fuera de stock");
            }

        } catch (error) {
            console.log("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`checkout-container${darkMode ? " dark-mode" : ""}`}>
            <h1>Checkout</h1>
            {loading ? (
                <h2>Se está generando la orden...</h2>
            ) : orderId ? (
                <div className={`card text-center ${darkMode ? " bg-dark text-white" : ""}`}>
                    <div className={`card-header${darkMode ? " bg-secondary text-white" : ""}`}>
                        <h2>Gracias por su compra</h2>
                        <h2>El ID de su orden es: {orderId}</h2>
                    </div>
                    <div className={`card-body${darkMode ? " bg-dark text-white" : ""}`}>
                        <h3 className={`card-title${darkMode ? " text-white" : ""}`}>Factura</h3>
                        <ul className={`list-group list-group-flush text-left${darkMode ? " bg-dark text-white" : ""}`}>
                            {objOrder &&
                                objOrder.items.map((item) => (
                                    <li key={item.id} className={`list-group-item${darkMode ? " bg-dark text-white" : ""}`}>
                                        <div className="row">
                                            <div className="col-6">
                                                <p><strong>Producto:</strong> {item.name}</p>
                                                <p><strong>Cantidad:</strong> {item.quantity}</p>
                                            </div>
                                            <div className="col-6 text-right">
                                                <p><strong>Precio unitario:</strong> ${item.price}</p>
                                                <p><strong>Subtotal:</strong> ${item.subtotal}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                        <p className={`card-text${darkMode ? " text-white" : ""}`}>Total: ${objOrder && objOrder.total}</p>
                        <Link to="/" className={`btn btn-primary mt-3${darkMode ? " btn-light" : ""}`}>Volver al inicio</Link>
                    </div>
                </div>
            ) : (
                <CheckoutForm onConfirm={createOrder} />
            )}
        </div>

    );
};

export default Checkout;

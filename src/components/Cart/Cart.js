import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import "../../index.scss"


const Cart = () => {
    const { cart, clearCart, totalQuantity, increaseItemQuantity, decreaseItemQuantity } = useContext(CartContext);
    const total = parseFloat(cart.reduce((acc, product) => acc + product.price * product.quantity, 0));
    const { darkMode } = useContext(ThemeContext);
    const cartContainerClasses = darkMode ? "bg-dark text-white" : "";

    if (totalQuantity === 0) {
        return (
            <div className={`empty-cart-message ${cartContainerClasses} d-flex align-items-center justify-content-center custom-vh text-center`}>
                <div className="mx-auto">
                    <h1>No hay items en el carrito</h1>
                    <Link to="/" className="btn btn-primary mt-3">Volver a Productos</Link>
                </div>
            </div>
        );
    }

    return (
        <div className={`cart-container p-5 ${darkMode ? "bg-dark text-white" : ""}`}>
            <h2 className={`mb-4 text-center${darkMode ? "text-white" : ""}`}>Carrito de Compras</h2>
            <div className="text-center m-3">
                <Link to="/" className={`btn btn-primary`}>Seguir Comprando</Link>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-center">
                <div className={`d-flex flex-column m-3 ${cartContainerClasses}`}>
                    {cart.map(p => (
                        <CartItem
                            key={p.id}
                            {...p}
                            increaseItemQuantity={increaseItemQuantity}
                            decreaseItemQuantity={decreaseItemQuantity}
                        />
                    ))}
                </div>
                <div className={`card m-3 ${darkMode ? "bg-dark text-white" : ""}`} style={{ maxWidth: "800px", height: "auto" }}>
                    <div className="card-body">
                        <h4 className={`card-title text-center mb-4 ${darkMode ? "text-white" : ""}`}>Resumen del Carrito</h4>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <p className={`mb-0 ${darkMode ? "text-white" : ""}`}>Total:</p>
                            <h4 className={`mb-0 ${darkMode ? "text-white" : ""}`}>$ {total.toFixed(2)}</h4>
                        </div>
                        <div className="mb-3">
                            <p className={`mb-0 ${darkMode ? "text-white" : ""}`}>Cantidad de Artículos:</p>
                            <p className={`mb-0 ${darkMode ? "text-white" : ""}`}>{totalQuantity}</p>
                        </div>
                        <div className="mt-3">
                            <button onClick={() => clearCart()} className={`btn btn-danger btn-block`}>Limpiar carrito</button>
                        </div>
                        <div className="mt-3">
                            <Link to='/checkout' className={`btn btn-primary btn-block`}>Terminar Compra</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;

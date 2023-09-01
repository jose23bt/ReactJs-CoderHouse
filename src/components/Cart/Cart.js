import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import "../../index.scss"

const Cart = () => {
    const { cart, clearCart, totalQuantity, increaseItemQuantity, decreaseItemQuantity } = useContext(CartContext);
    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const { darkMode } = useContext(ThemeContext);
    const cartContainerClasses = darkMode ? "bg-dark text-white" : "";
    const cartSummaryClasses = `cart-summary mt-3 ${darkMode ? "bg-dark text-white p-3" : ""}`;
    
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
            <h2 className={`text-center mb-5 ${darkMode ? "text-white" : ""}`}>Carrito de Compras</h2>
            <div className={`d-flex flex-column ${cartContainerClasses}`}>
                {cart.map(p => (
                    <CartItem
                        key={p.id}
                        {...p}
                        increaseItemQuantity={increaseItemQuantity}
                        decreaseItemQuantity={decreaseItemQuantity}
                    />
                ))}
            </div>
            <div className={cartSummaryClasses}>
                <h4 className="mb-3">Total: $ {total.toFixed(2)}</h4>
                <button onClick={() => clearCart()} className={`btn btn-danger mr-3`}>Limpiar carrito</button>
                <Link to='/checkout' className={`Option ${darkMode ? "text-white ml-3" : "ml-3"}`}>Checkout</Link>
            </div>
        </div>
    );
}

export default Cart;
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import '../../index.scss'

const Cart = () => {
  const { cart, clearCart, totalQuantity } = useContext(CartContext);
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const { darkMode } = useContext(ThemeContext);

  const cartContainerClasses = darkMode ? "bg-dark text-white" : "";
  const cartItemsContainerClasses = darkMode ? "bg-dark text-white" : "";
  const cartSummaryClasses = darkMode ? "bg-dark text-white p-3" : "";
  const clearCartButtonClasses = darkMode ? "btn btn-light" : "btn btn-danger";
  const checkoutLinkClasses = darkMode ? "Option text-white ml-3" : "Option ml-3";

  if (totalQuantity === 0) {
    return (
      <div className={`empty-cart-message ${cartContainerClasses} d-flex align-items-center justify-content-center custom-vh`}>
        <div className="text-center">
          <h1>No hay items en el carrito</h1>
          <Link to="/" className="btn btn-primary mt-3">Volver a Productos</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`cart-container p-5 ${cartContainerClasses}`}>
      <h2 className="text-center mb-5">Carrito de Compras</h2>
      <div className={`d-flex justify-content-center align-items-star flex-column ${cartItemsContainerClasses}`}>
        {cart.map(p => <CartItem key={p.id} {...p} />)}
      </div>
      <div className={`cart-summary mt-3 ${cartSummaryClasses}`}>
        <h4>Total: $ {total.toFixed(2)}</h4>
        <button onClick={() => clearCart()} className={clearCartButtonClasses}>Limpiar carrito</button>
        <Link to='/checkout' className={checkoutLinkClasses}>Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;

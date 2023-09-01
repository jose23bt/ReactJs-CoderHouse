import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../ThemeContext";
import "../../index.scss";

const CartItem = ({ id, name, img, price, quantity }) => {
  const { removeItem, increaseItemQuantity, decreaseItemQuantity } = useContext(CartContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <article className={`card mb-3 cart-item ${darkMode ? "bg-dark text-white" : ""}`}>
      <div className="row g-0">
        <div className="col-md-4 col-sm-12">
          <div className="image-container">
            <img src={img} alt={name} className="img-fluid cart-item-img"/>
          </div>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="card-text">${price}</p>
            <div className="d-flex align-items-center">
              <button
                className={`btn ${darkMode ? "btn-light" : "btn-secondary"} mr-2`}
                onClick={() => decreaseItemQuantity(id)}
              >
                -
              </button>
              <p className="card-text">Cantidad: {quantity}</p>
              <button
                className={`btn ${darkMode ? "btn-light" : "btn-secondary"} ml-2`}
                onClick={() => increaseItemQuantity(id)}
              >
                +
              </button>
            </div>
            <button
              className={`btn ${darkMode ? "btn-light" : "btn-danger"} mt-2`}
              onClick={() => removeItem(id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartItem;

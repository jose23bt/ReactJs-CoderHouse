import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../ThemeContext";
import "../../index.scss";

const CartItem = ({ id, name, img, price, quantity }) => {
  const { removeItem } = useContext(CartContext);
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
            <p className="card-text">Cantidad: {quantity}</p>
            <button
              className={`btn ${darkMode ? "btn-light" : "btn-danger"}`}
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

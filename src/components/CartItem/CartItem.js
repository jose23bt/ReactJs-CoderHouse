import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../ThemeContext";
import "../../index.scss";

const CartItem = ({ id, name, img, price, quantity }) => {
  const { removeItem, increaseItemQuantity, decreaseItemQuantity } = useContext(CartContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <article className={`card mb-3 cart-item ${darkMode ? "bg-dark text-white" : ""}`} style={{ maxWidth: "900px" }}>
      <div className="d-flex justify-content-end">
        <button
          className={`btn ${darkMode ? "btn-danger" : "btn-light"} align-self-start`}
          onClick={() => removeItem(id)}
        >
          <i className={`material-icons ${darkMode ? "text-white" : ""}`}>delete</i> 
        </button>
      </div>
      <div className="row g-0">
        <div className="col-md-4 col-sm-12">
          <div className="image-container">
            <img src={img} alt={name} className="img-fluid cart-item-img" />
          </div>
        </div>
        <div className="col-md-8 col-sm-12 p-3">
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h2 className={`card-title text-center ${darkMode ? "text-white" : ""}`}>{name}</h2>
              <h2 className={`card-text text-center mb-3 ${darkMode ? "text-white" : ""}`}>${price}</h2>
            </div>
            <div className={`card d-flex justify-content-between align-items-center p-3 ${darkMode ? "bg-dark" : ""}`}>
              <p className={`mb-2 ${darkMode ? "text-white" : ""}`}>Unidades</p>
              <div className={`btn-group ${darkMode ? "text-white" : ""}`}>
                <div
                  className={`btn ${darkMode ? "btn-secondary" : "btn-light"}`}
                  onClick={() => decreaseItemQuantity(id)}
                >
                  -
                </div>
                <p className={`card-text mx-2 text-center ${darkMode ? "text-white" : ""}`}>{quantity}</p>
                <div
                  className={`btn ${darkMode ? "btn-secondary" : "btn-light"}`}
                  onClick={() => increaseItemQuantity(id)}
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>

  );
};

export default CartItem;

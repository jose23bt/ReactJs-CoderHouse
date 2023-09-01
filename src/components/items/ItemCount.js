import React, { useState, useContext } from "react";
import { ThemeContext } from '../ThemeContext';

const ItemCount = ({ stock, initial, onAdd }) => {
    const { darkMode } = useContext(ThemeContext);
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleAddToCart = () => {
        if (quantity > 0) {
            onAdd(quantity); // Pasar la cantidad seleccionada al componente padre
            setQuantity(initial);
        }
    }

    return (
        <div style={{ width: "300px", height: "100px", marginBottom: '50px' }}>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button className={`btn ${darkMode ? "btn-light" : "btn-dark"}`} onClick={decrement}>-</button>
                    <h4 style={{ margin: '0 20px', color: darkMode ? "white" : "black" }}>{quantity}</h4>
                    <button className={`btn ${darkMode ? "btn-light" : "btn-dark"}`} onClick={increment}>+</button>
                </div>
                <div className="text-center mt-3">
                    <button className={`btn ${darkMode ? "btn-light" : "btn-dark"}`} onClick={handleAddToCart} disabled={stock === 0}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;


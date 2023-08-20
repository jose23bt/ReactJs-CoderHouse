import React, { useState, useContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../ThemeContext'; // Importa el contexto del tema

const ItemCount = ({ stock, initial, onAdd }) => {
    const { darkMode } = useContext(ThemeContext); // Obtén el valor de darkMode del contexto
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
            onAdd(quantity);
            setQuantity(initial);

            // Configura las opciones para el aviso
            const toastOptions = {
                position: "bottom-center", // Posición en la parte inferior centrada
                autoClose: 1000, // Duración de 1 segundo
                hideProgressBar: true, // Oculta la barra de progreso
                closeOnClick: false, // No cerrar al hacer clic
                pauseOnHover: false, // No pausar al pasar el cursor
                style: { 
                    background: darkMode ? "black" : "white", // Color de fondo en darkMode o lightMode
                    color: darkMode ? "white" : "black" // Color del texto en darkMode o lightMode
                }
            };

            toast.success(`Se agregaron ${quantity} productos al carrito`, toastOptions);
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

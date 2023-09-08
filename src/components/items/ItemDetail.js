import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoArrowLeft, GoX } from 'react-icons/go';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const { darkMode } = useContext(ThemeContext);
    const { addItem } = useContext(CartContext);
    const [quantityAdded, setQuantityAdded] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const showToast = (message, type = 'info', duration = 3000, position = 'bottom-center') => {
        toast(message, {
            type,
            autoClose: duration,
            position,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        setTotalPrice(quantity * price);
    };

    const handleFinishPurchase = () => {
        if (quantityAdded > 0) {
            const item = { id, img, name, price };
            addItem(item, quantityAdded);
            showToast(`Compra finalizada. Se agregaron ${quantityAdded} productos al carrito. Precio total: $${totalPrice}`, 'success', 1000);
        } else {
            showToast('No se ha agregado ningún producto al carrito.', 'error', 1000);
        }
    };

    return (
        <article className={`CardItem card ${darkMode ? "bg-dark text-white" : ""}`} style={{ width: "300px", height: "auto" }}>
            <header>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link to={`/category/${category}`} style={{ textDecoration: 'none' }}>
                        <button
                            className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
                            style={{ backgroundColor: 'transparent', border: 'none' }}
                        >
                            <GoArrowLeft style={{ color: darkMode ? 'white' : 'black' }} />
                        </button>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <button
                            className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
                            style={{ backgroundColor: 'transparent', border: 'none' }}
                        >
                            <GoX style={{ color: darkMode ? 'white' : 'black' }} />
                        </button>
                    </Link>
                </div>
                <h2 className="text-center ItemHeader card-title m-3">{name}</h2>
            </header>
            <picture className="card-img-top">
                <img
                    src={img}
                    alt={name}
                    className="ItemImg card-img-top"
                    style={{ objectFit: "contain", height: "auto" }}
                />
            </picture>
            <section className="card-body">
                <p className="Info card-text">Categoría: {category}</p>
                <p className="Info card-text">Descripción: {description}</p>
                <p className="Info card-text">Precio: ${price}</p>
                <p className="Info card-text">Stock disponible: {stock}</p>
                {quantityAdded > 0 && (
                    <div>
                        <p className="Info card-text">Cantidad seleccionada: {quantityAdded}</p>
                        <p className="Info card-text">Precio total: ${totalPrice}</p>
                    </div>
                )}
            </section>
            <footer className="text-center mt-4 mb-5">
                {quantityAdded > 0 ? (
                    <Link to='/cart'>  
                    <button onClick={handleFinishPurchase} className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}>Agregar al Carrito</button>
                    </Link>                    
                ) : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />}
            </footer>
        </article>
    );
};

export default ItemDetail;

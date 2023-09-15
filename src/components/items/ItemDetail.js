import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoX } from 'react-icons/go';

const ItemDetail = ({ id, name, img, description, price, stock }) => {
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
        <div className={`CardItem card ${darkMode ? "bg-dark text-white" : ""}`} style={{ maxWidth: "1000px", marginBottom: "50px", marginTop: "50px"}}>
        <div className="card-header">
            <div className="d-flex justify-content-end">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div
                        className={`btn ${darkMode ? "btn-light" : "btn-dark"} btn-link`}
                    >
                        <GoX style={{ color: darkMode ? 'white' : 'black' }} />
                    </div>
                </Link>
            </div>
        </div>
        <div className="card-body d-md-flex align-items-center">
            <div className="text-center">
                <h2 className="ItemHeader card-title">{name}</h2>
                <img
                    src={img}
                    alt={name}
                    className="ItemImg img-fluid"
                    style={{ objectFit: "contain", maxWidth: "100%" }}
                />
            </div>
            <div className="flex-grow-1 ml-md-4 mt-3 mt-md-0" style={{ width: "240px", margin: "20px" }}>
                <p className="Info card-text">Descripción: {description}</p>
                <p className="Info card-text">Precio: ${price}</p>
                <p className="Info card-text">Stock disponible: {stock}</p>
                {quantityAdded > 0 && (
                    <div>
                        <p className="Info card-text">Cantidad seleccionada: {quantityAdded}</p>
                        <p className="Info card-text">Precio total: ${totalPrice}</p>
                    </div>
                )}
            </div>
            <div className="text-center mt-3 mt-md-0">
                {quantityAdded > 0 ? (
                    <Link to='/cart' style={{ textDecoration: 'none' }}>
                        <div onClick={handleFinishPurchase} className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}>Agregar al Carrito</div>
                    </Link>
                ) : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />}
            </div>
        </div>
    </div>
    );
};

export default ItemDetail;

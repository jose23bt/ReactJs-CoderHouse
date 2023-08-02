import React, { useContext, useState } from 'react'; // Asegúrate de incluir 'useContext' aquí
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from './ThemeContext';
const Cart = ({ imageUrl, title, price, description, stock }) => {
    const { darkMode } = useContext(ThemeContext);
    const [quantity, setQuantity] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleRemove = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (quantity > 0) {
            showToast(`Agregado al carrito: ${quantity} ${title}`);
        } else {
            showToast('Selecciona al menos un producto para agregar al carrito.');
        }
    };

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const cardHeight = showDetails ? 'auto' : '400px';

    const showToast = (message) => {
        toast.info(message, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 1000, // Duración en milisegundos, 3000ms = 3 segundos
        });
    };

    return (
        <div className={`container d-flex flex-row flex-wrap p-2 mb-3 ${darkMode ? 'text-light' : 'text-dark'}`}>
            <div className={`card ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} style={{ width: '250px', height: cardHeight }}>
                <img
                    src={imageUrl}
                    className="card-img-top"
                    alt={title}
                    style={{ maxHeight: '200px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Precio: ${price}</p>
                    <div className="quantity-controls">
                        <button className="btn btn-secondary" onClick={handleRemove}>-</button>
                        <span className="mx-2">{quantity}</span>
                        <button className="btn btn-secondary" onClick={handleAdd}>+</button>
                    </div>
                    <button
                        className="btn btn-primary mt-2"
                        onClick={handleAddToCart}
                    >
                        Agregar al carrito
                    </button>
                    <button
                        className="btn btn-link mt-2"
                        onClick={handleToggleDetails}
                    >
                        {showDetails ? 'Ocultar detalles' : 'Mostrar detalles'}
                    </button>
                    {showDetails && (
                        <div className="card mt-3">
                            <div className="card-body">
                                <p className="card-text">Descripción: {description}</p>
                                <p className="card-text">Stock disponible: {stock}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Cart;

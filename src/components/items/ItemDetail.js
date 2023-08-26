import React from "react";
import ItemCount from "./ItemCount";
import { ThemeContext } from "../ThemeContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const { darkMode } = useContext(ThemeContext); 

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        
        addItem(item, quantity)
    }


    return (
        <article className={`CardItem card ${darkMode ? "bg-dark text-white" : ""}`} style={{ width: "300px", height: "auto" }}>
            <header>
                <h2 className="ItemHeader card-title">{name}</h2>
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
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to='cart' className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}>Terminar Compra</Link>
                    ) : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                }
            </footer>
        </article>
    );
};

export default ItemDetail;
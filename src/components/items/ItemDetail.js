import React from "react";
import ItemCount from "./ItemCount";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const { darkMode } = useContext(ThemeContext); 
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada")} />
            </footer>
        </article>
    );
};

export default ItemDetail;

import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext, } from "../ThemeContext";
import { useContext } from "react";



const Item = ({ id, name, img, price, stock }) => {
    const { darkMode } = useContext(ThemeContext);
    


    return (
        <article className={`CardItem card ${darkMode ? "bg-dark text-white" : ""}`} style={{ width: "300px", height: "420px" }}>
            <picture className="card-img-top">
                <img src={img} alt={name} className="ItemImg card-img-top" style={{ height: "100%", maxHeight: "200px"}} />
            </picture>
            <div className="card-body">
                <h2 className="ItemHeader card-title">
                    {name}
                </h2>
                <p className="Info card-text">
                    Precio: ${price}
                </p>
                <p className="Info card-text">
                    Stock disponible: {stock}
                </p>
                <footer className="ItemFooter">
                    <Link to={`/item/${id}`} className="Option">Ver Detalles</Link>
                </footer>
                <div id={`${name}-details`} className="collapse">
                    <div className="card-body">
                        Detalles adicionales para {name}.
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Item;
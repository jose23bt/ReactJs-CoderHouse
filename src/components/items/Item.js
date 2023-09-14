import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext, } from "../ThemeContext";
import { useContext } from "react";



const Item = ({ id, name, img, price, }) => {
    const { darkMode } = useContext(ThemeContext);
    


    return (
        <article className={`CardItem card ${darkMode ? "bg-dark text-white" : ""}`} style={{ width: "250px", height: "auto" }}>
            <picture className="card-img-top">
                <img src={img} alt={name} className="ItemImg card-img-top" style={{ height: "100%", maxHeight: "100%"}} />
            </picture>
            <div className="card-body">
                <h2 className="ItemHeader card-title">
                    {name}
                </h2>
                <p className="Info card-text">
                    Precio: ${price}
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
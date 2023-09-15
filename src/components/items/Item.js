import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext, } from "../ThemeContext";
import { useContext } from "react";



const Item = ({ id, name, img, price, }) => {
    const { darkMode } = useContext(ThemeContext);



    return (
        <Link to={`/item/${id}`} className="Option" style={{ textDecoration: 'none' }}>
            <article className={`CardItem card ${darkMode ? "bg-dark text-white" : ""}`} style={{ width: "270px", height: "390px" }}>
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                    <picture className="card-img-top">
                        <img src={img} alt={name} className="ItemImg card-img-top" style={{ height: "auto" }} />
                    </picture>
                </div>
                <div className="card-body text-center">
                    <h4 className="ItemHeader card-title" style={{ fontSize: "1.3rem" }}>
                        {name}
                    </h4>
                    <p className="Info card-text" style={{ fontSize: "1.5rem" }}>
                        Precio: ${price}
                    </p>
                    <footer className="ItemFooter"></footer>
                    <div id={`${name}-details`} className="collapse">
                        <div className="card-body">Detalles adicionales para {name}.</div>
                    </div>
                </div>
            </article>
        </Link>

    );
}

export default Item;
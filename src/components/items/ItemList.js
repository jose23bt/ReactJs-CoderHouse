import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center">
            {products.map(prod => (
                <div key={prod.id} className="mx-5 mb-5">
                    <Item img={prod.img} {...prod} />
                </div>
            ))}
        </div>
    );
}

export default ItemList;
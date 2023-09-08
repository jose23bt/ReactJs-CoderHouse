import React, { useState, useEffect, useContext } from 'react';
import ItemDetail from './ItemDetail';
import { ThemeContext } from '../ThemeContext';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const { darkMode } = useContext(ThemeContext);
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {                
                const productRef = doc(db, 'products', itemId);                
                const productDoc = await getDoc(productRef);

                if (productDoc.exists()) {
                    setProduct({ id: productDoc.id, ...productDoc.data() });
                } else {
                    console.log("No existe el producto con el ID especificado.");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct();
    }, [itemId]);

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: '50px', marginBottom: '50px'}}>
            {product ? <ItemDetail {...product} /> : <p>Cargando...</p>}
        </div>
    );
};

export default ItemDetailContainer;

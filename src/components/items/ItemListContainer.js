import React, { useEffect, useState, useContext } from 'react';
import ItemList from './ItemList';
import { ThemeContext } from '../ThemeContext';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const { darkMode } = useContext(ThemeContext);
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Obtener una referencia a la colección "products" en Firestore
                const productsCollection = collection(db, 'products');

                // Construir la consulta de Firestore en función de la categoría
                let firestoreQuery;
                if (categoryId) {
                    firestoreQuery = query(productsCollection, where('category', '==', categoryId));
                    setGreeting(`Productos en la categoría: ${categoryId}`);
                } else {
                    firestoreQuery = productsCollection;
                    setGreeting('Bienvenidos');
                }

                // Obtener los documentos que coinciden con la consulta
                const querySnapshot = await getDocs(firestoreQuery);

                // Mapear los documentos en un array de productos
                const productData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProducts(productData);
            } catch (error) {
                console.error(error);
                // Manejo de errores
            }
        };

        fetchProducts();
    }, [categoryId]);

    return (
        <div className={darkMode ? "bg-dark text-white" : ""}>
            <h1 className="text-center item-list-container">{greeting}</h1>
            <div className="item-list-container">
                <ItemList products={products} />
            </div>
        </div>
    );
};

export default ItemListContainer;

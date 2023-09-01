import React, { useEffect, useState, useContext } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from './ItemList';
import { ThemeContext } from '../ThemeContext';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const { darkMode } = useContext(ThemeContext);
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;
        const fetchProducts = async () => {
            try {
                const response = await asyncFunc(categoryId);
                setProducts(response);
                // Establecer el saludo (greeting) aquí basado en la categoría o lo que necesites.
                if (categoryId) {
                    setGreeting(`${categoryId}`);
                } else {
                    setGreeting('Bienvenidos');
                }
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

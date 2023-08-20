import React, { useEffect, useState, useContext } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from './ItemList';
import { ThemeContext } from '../ThemeContext';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    
    const { darkMode } = useContext(ThemeContext);
    
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <h1 className="text-center item-list-container">{greeting}</h1>
            <div className="item-list-container">
                <ItemList products={products} />
            </div>
        </div>
    );
}

export default ItemListContainer;

import React, { useState, useEffect } from 'react';
import video from "../../assets/img/mercado.mp4";
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import ItemDetail from './ItemDetail'; // Importa el componente ItemDetail

const Greeting = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = collection(db, 'products');
                const querySnapshot = await getDocs(productsCollection);
                const productData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    const filterProducts = (term) => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(term.toLowerCase())
        );
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        setSuggestions(filterProducts(value));
    };

    const handleSearch = (productId) => {
        // Encuentra el producto por su ID
        const product = products.find((p) => p.id === productId);
        setSelectedProduct(product);
    };

    return (
        <div className="greeting-container">
            <video autoPlay muted loop className="background-video">
                <source src={video} type="video/mp4" />
                Tu navegador no admite la reproducción de video.
            </video>
            <div className="content">
                <div className="overlay">
                    <h1>Compra lo que quieras</h1>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Buscar productos"
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                        <button onClick={() => handleSearch(selectedProduct.id)}>Buscar</button>
                    </div>
                    <ul className="autocomplete-list">
                        {suggestions.map((product) => (
                            <li
                                key={product.id}
                                onClick={() => setSelectedProduct(product)} // Al hacer clic en la sugerencia, selecciona el producto
                            >
                                {product.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Renderiza el ItemDetail del producto seleccionado */}
            {selectedProduct && <ItemDetail product={selectedProduct} />}
        </div>
    );
};

export default Greeting;

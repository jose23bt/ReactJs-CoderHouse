import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = collection(db, 'products');

                // Convierte el término de búsqueda a minúsculas
                const searchTermLowerCase = searchTerm.toLowerCase();

                // Realiza una consulta para obtener todos los productos
                const querySnapshot = await getDocs(productsCollection);

                // Filtra los productos cuyos nombres contienen el término de búsqueda en minúsculas
                const productData = querySnapshot.docs
                    .map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }))
                    .filter((product) =>
                        product.name.toLowerCase().includes(searchTermLowerCase)
                    );

                setSuggestions(productData);
                setShowSuggestions(true);
            } catch (error) {
                console.error(error);
            }
        };

        if (searchTerm.trim() !== '') {
            fetchProducts();
        } else {
            // Si no hay término de búsqueda, oculta las sugerencias
            setShowSuggestions(false);
            setSuggestions([]);
        }
    }, [searchTerm]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    const handleSelectSuggestion = (product) => {
        setSearchTerm(product.name);
        setShowSuggestions(false);
        navigate(`/item/${product.id}`);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                className="form-control"
                placeholder="Buscar productos"
                value={searchTerm}
                onChange={handleInputChange}
            />
            {showSuggestions && suggestions.length > 0 && (
                <div className="autocomplete-dropdown">
                    {suggestions.slice(0, 3).map((product) => (
                        <div
                            key={product.id}
                            className="suggestion-item"
                            onClick={() => handleSelectSuggestion(product)}
                        >
                            <span className="suggestion-text">{product.name}</span>
                        </div>
                    ))}
                </div>
            )}
            <div className="input-group-append">
                <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => navigate(`/item/${searchTerm}`)}
                >
                    Buscar
                </button>
            </div>
        </div>
    );
};

export default SearchBar;

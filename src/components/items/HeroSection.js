import React, { useEffect } from 'react';
import video from "../../assets/img/mercado.mp4";
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import SearchBar from './SearchBar';

const HeroSection = () => {
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = collection(db, 'products');
                await getDocs(productsCollection); // Puedes eliminar la declaración y asignación de querySnapshot si no la utilizas
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="greeting-container">
            <video autoPlay muted loop className="background-video">
                <source src={video} type="video/mp4" />
                Tu navegador no admite la reproducción de video.
            </video>
            <div className="content">
                <div className="overlay">
                    <h1>Compra lo que quieras</h1>
                    <SearchBar />
                </div>
            </div>
            {/* Renderiza el ItemDetail del producto seleccionado */}
        </div>
    );
};

export default HeroSection;

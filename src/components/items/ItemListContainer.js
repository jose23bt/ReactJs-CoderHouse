import React, { useEffect, useState, useContext } from 'react';
import ItemList from './ItemList';
import { ThemeContext } from '../ThemeContext';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ContentLoader from 'react-content-loader';

const ItemListContainer = () => {
    const { darkMode } = useContext(ThemeContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = collection(db, 'products');
                let firestoreQuery;
                if (categoryId) {
                    firestoreQuery = query(productsCollection, where('category', '==', categoryId));
                    setGreeting(`${categoryId}`);
                } else {
                    firestoreQuery = productsCollection;
                    setGreeting('Bienvenidos');
                }

                const querySnapshot = await getDocs(firestoreQuery);

                const productData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProducts(productData);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, [categoryId]);

    const SkeletonProduct = () => (
        <div className={`CardItem card ${darkMode ? "bg-dark text-white" : ""}`} style={{ width: "250px", height: "auto", marginRight: "50px" }}>
            <ContentLoader
                speed={2}
                width={250}
                height={300}
                viewBox="0 0 250 300"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
                <rect x="0" y="20" rx="3" ry="3" width="250" height="160" />
                <rect x="0" y="190" rx="3" ry="3" width="250" height="10" />
                <rect x="0" y="210" rx="3" ry="3" width="250" height="10" />
                <rect x="0" y="230" rx="3" ry="3" width="250" height="10" />
                <rect x="0" y="250" rx="3" ry="3" width="250" height="10" />
            </ContentLoader>
        </div>
    );

    const groupProductsByCategory = () => {
        const groupedProducts = {};

        products.forEach((product) => {
            const { category } = product;
            if (!groupedProducts[category]) {
                groupedProducts[category] = [];
            }
            groupedProducts[category].push(product);
        });

        return groupedProducts;
    };

    const groupedProducts = groupProductsByCategory();

    const renderTitle = () => {
        if (!categoryId) {
            return <h1 className="text-center item-list-container">{greeting}</h1>;
        }
        return null;
    };

    return (
        <div className={darkMode ? "bg-dark text-white" : ""}>
            {renderTitle()}
            {loading ? (
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <SkeletonProduct key={index} />
                    ))}
                </div>
            ) : (
                <div className="item-list-container">
                    {Object.keys(groupedProducts).map((category) => (
                        <div key={category}>
                            <h2 className='text-center'>{category}</h2>
                            <ItemList products={groupedProducts[category]} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;

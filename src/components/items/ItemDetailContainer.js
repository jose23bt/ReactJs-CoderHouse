import { useState, useEffect, useContext } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from './ItemDetail';
import { ThemeContext } from '../ThemeContext';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const { darkMode } = useContext(ThemeContext);

    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ItemDetail {...product} />
        </div>
    )

}

export default ItemDetailContainer
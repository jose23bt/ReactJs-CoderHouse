
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  
  return (
      <Link to='/cart' className="d-flex align-items-center" style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
        <i className="material-icons">shopping_cart</i>
        <span className="badge bg-secondary">{totalQuantity}</span> 
      </Link>    
  );
}

export default CartWidget;
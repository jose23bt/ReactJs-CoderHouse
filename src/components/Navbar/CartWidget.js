import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
 

  const cartStyle = {
    display: totalQuantity > 0 ? 'block' : 'none',    
  };

  return (
    <Link to='/cart' style={cartStyle}>
      <div className="d-flex align-items-center">
        <i className="material-icons">shopping_cart</i>
        <span className="badge bg-secondary">{totalQuantity}</span>
      </div>
    </Link>
  );
};

export default CartWidget;

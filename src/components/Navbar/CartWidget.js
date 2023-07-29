import React from 'react';
import { Nav } from 'react-bootstrap';

function CartWidget () {
  return (

    <>
    <Nav>
      <Nav.Link href="#carrito" className="d-flex align-items-center">
        <i className="material-icons">shopping_cart</i>
        <span className="badge bg-secondary">1</span> 
      </Nav.Link>
    </Nav>
    </>
  );
};

export default CartWidget;
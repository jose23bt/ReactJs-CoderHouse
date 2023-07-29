import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/img/logo.png'
import CartWidget from './CartWidget';


function NavBar() {
    return (
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#">        
            <img
              src={logo}
              alt=""
              width="50"
              height="30"
              className="d-inline-block align-top"
            />
            LomasMarket
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#equipo">Equipo</Nav.Link>
              <Nav.Link href="#tienda">Tienda</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
            <CartWidget />
    
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;
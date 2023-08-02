import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import logoBlack from '../../assets/img/logoNegro.png';
import CartWidget from './CartWidget';
import { ThemeContext } from '../ThemeContext';

function NavBar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Determinar qué logo se debe mostrar según el tema actual
  const logoSrc = darkMode ? logo : logoBlack;
  const icon = darkMode ? 'wb_sunny' : 'nightlight';
  const buttonVariant = darkMode ? 'outline-light' : 'outline-dark';

  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="md">
      <Container>
        <Navbar.Brand href="#">
          <img src={logoSrc} alt="" width="50" height="30" className="d-inline-block align-top" />
          LomasMarket
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#equipo">Equipo</Nav.Link>
            <Nav.Link href="#tienda">Tienda</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <Button variant={buttonVariant} onClick={toggleTheme}>
          <i className="material-icons">{icon}</i>
          </Button>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
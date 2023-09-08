import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import logoBlack from '../../assets/img/logoNegro.png';
import CartWidget from './CartWidget';
import { ThemeContext } from '../ThemeContext';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  
  const logoSrc = darkMode ? logo : logoBlack;
  const icon = darkMode ? 'wb_sunny' : 'nightlight';
  const buttonVariant = darkMode ? 'outline-light' : 'outline-dark';

  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="md">
      <Container>
        <Navbar.Brand href="#">
          <Link to="/" className="navbar-brand">
            <img src={logoSrc} alt="" width="50" height="30" className="d-inline-block align-top" />
            LomasMarket
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <NavLink to={'/category/bebidas'} activeClassName="active-link" className="nav-link custom-link">bebidas</NavLink>
            <NavLink to={'/category/dulces'} activeClassName="active-link" className="nav-link custom-link">dulces</NavLink>
            <NavLink to={'/category/snacks'} activeClassName="active-link" className="nav-link custom-link">snacks</NavLink>
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
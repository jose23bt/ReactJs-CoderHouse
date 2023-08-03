import React, { useContext } from 'react';
import { ThemeContext } from './components/ThemeContext'; // Asumimos que tienes un contexto para el dark mode
import logo from './assets/img/logo.png'; // Asumimos que tienes una imagen del logo en modo claro
import logoBlack from './assets/img/logoNegro.png'; // Asumimos que tienes una imagen del logo en modo oscuro

const Footer = () => {
    const { darkMode } = useContext(ThemeContext);
  
    // Determinar qué logo se debe mostrar según el tema actual
    const logoSrc = darkMode ? logo : logoBlack;
  
    return (
      <footer className={`bg-${darkMode ? 'dark' : 'light'} text-${darkMode ? 'white' : 'black'} py-4`}>
          
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Contacto</h5>
              <ul className="list-unstyled">
                <li>Dirección: Av. Principal #123</li>
                <li>Número de teléfono: 555-123-456</li>
                <li>Correo electrónico: info@example.com</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Equipo</h5>
              <ul className="list-unstyled">              
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Opciones</h5>
              <ul className="list-unstyled">
                <li><a href="#contacto">Contacto</a></li>
                <li><a href="#equipo">Equipo</a></li>
                <li><a href="#ayuda">Ayuda</a></li>
                <li><a href="#preguntas-frecuentes">Preguntas Frecuentes</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid py-3">
          <span className="material-icons">location_on</span> Dirección: Av. Principal #123 |{' '}
          <span className="material-icons">phone</span> Teléfono: 555-123-456 |{' '}
          <span className="material-icons">email</span> Correo: info@example.com
        </div>      
        <div className="text-center">
          <img src={logoSrc} alt="Logo" width="50" height="30" />
        </div>
      </footer>
    );
  };
  
  export default Footer;

import React, { useState, useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";



const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const { darkMode } = useContext(ThemeContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name,
            phone,
            email,
        };


        onConfirm(userData);
    };

    return (
        <form onSubmit={handleSubmit} className={`container ${darkMode ? "dark-mode" : ""}`}>
          <div className={`form-group ${darkMode ? "dark-mode" : ""}`}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              className={`form-control ${darkMode ? "dark-mode" : ""}`}
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={`form-group ${darkMode ? "dark-mode" : ""}`}>
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              className={`form-control ${darkMode ? "dark-mode" : ""}`}
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className={`form-group ${darkMode ? "dark-mode" : ""}`}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              className={`form-control ${darkMode ? "dark-mode" : ""}`}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={`btn ${darkMode ? "btn-dark" : "btn-primary"}`}>Confirmar Orden</button>
        </form>
      );
};

export default CheckoutForm;
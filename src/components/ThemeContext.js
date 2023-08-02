// ThemeContext.js
import React, { createContext, useState } from 'react';

// Creamos el contexto
const ThemeContext = createContext();

// Creamos un componente que proveerá el contexto a sus descendientes
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
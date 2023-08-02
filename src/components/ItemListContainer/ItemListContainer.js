import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';


function ItemListContainer({ greeting }) {
    const { darkMode } = useContext(ThemeContext);
  
    return (
      <div className={`item-list-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <h1 className="text-center">{greeting}</h1>
      </div>
    );
  }
  
  export default ItemListContainer;
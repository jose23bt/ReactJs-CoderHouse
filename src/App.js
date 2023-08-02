import React from "react"
import { ThemeProvider } from './components/ThemeContext';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Main from "./Main";

function App(){
    return(
        <>
        <ThemeProvider>
        <NavBar />
        <ItemListContainer greeting={'Componentes II'} />
        <Main />
        </ThemeProvider>
        </>         
    )
}

export default App
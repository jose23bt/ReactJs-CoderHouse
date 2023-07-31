import React from "react"
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Main from "./components/Main";

function App(){
    return(
        <>
        <NavBar />
        <ItemListContainer greeting={'Componentes II'} />
        <Main />
        </> 
        
    )
}

export default App
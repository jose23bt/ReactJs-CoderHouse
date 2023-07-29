import React from "react"
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App(){
    return(
        <>
        <NavBar />
        <ItemListContainer greeting={'Primera Pre-Entrega'} />
        </> 
        
    )
}

export default App
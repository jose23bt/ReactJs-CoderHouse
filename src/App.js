import React from "react";
import { ThemeProvider } from './components/ThemeContext';
import NavBar from './components/Navbar/NavBar';
import Footer from "./Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemListContainer from './components/items/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/items/ItemDetailContainer";

function App(){
    return(       
        <div className="App">
        <BrowserRouter>
        <ThemeProvider>
        <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Productos'}/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} /> {ItemDetailContainer}
                <Route path='*' element={<ItemListContainer greeting={'Productos'}/>} />
            </Routes>          
        <ToastContainer />   
        <Footer />       
        </ThemeProvider> 
        </BrowserRouter>
        </div> 
    )
}

export default App;

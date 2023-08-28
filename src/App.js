import React from "react";
import { ThemeProvider } from './components/ThemeContext';
import NavBar from './components/Navbar/NavBar';
import Footer from "./Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemListContainer from './components/items/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";

function App(){
    return(       
        <div className="App">
        <BrowserRouter>
        <ThemeProvider>
        <CartProvider>
        <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Productos'}/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} /> {ItemDetailContainer}
                <Route path='/Cart' element={<Cart />}/>
                <Route path='*'  />
            </Routes>          
        <ToastContainer />   
        <Footer />
        </CartProvider>       
        </ThemeProvider> 
        </BrowserRouter>
        </div> 
    )
}

export default App;

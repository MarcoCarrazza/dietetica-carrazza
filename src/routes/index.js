import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import NavBar from '../components/NavBar/NavBar';

function Rutas() {
  return ( 
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
   );
}

export default Rutas;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

function Rutas() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/item-detail' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
   );
}

export default Rutas;

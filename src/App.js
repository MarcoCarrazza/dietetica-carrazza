import React from 'react';
import './App.css';
import Rutas from './routes';
import CartProvider from './context/CartProvider';

function App() {
  return (
    <CartProvider>
      <Rutas />
    </CartProvider>
  );
}

export default App;

import React, { useState, useEffect, createContext } from 'react';

export const CartContext = createContext()

function CartProvider({ children }) {
  const cartStoraged = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  const [cartItems, setCartItems] = useState(cartStoraged);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems]);
  
  const addItem = (item) => {
    const search = cartItems.findIndex(prod => prod.id === item.id)
    if(search > -1){
      cartItems[search].qty += item.qty
      setCartItems([...cartItems]) //Es necesario "re-setear" cartItems para disparar el useEffect de arriba y así actualizar el context en todos los children
    } else {
      setCartItems([...cartItems, item])
    }
  }

  const removeItem = (id) => {
    const index = cartItems.findIndex(prod => prod.id === id)
    setCartItems(cartItems.filter(prod => prod.id != id))
  }

  const clear = () => setCartItems([])

  return ( 
    <CartContext.Provider
    value={{
      cartItems,
      addItem,
      removeItem,
      clear
    }}>
      { children }
    </CartContext.Provider>
   );
}

export default CartProvider;
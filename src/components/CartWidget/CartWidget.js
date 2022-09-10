import React, { useContext } from 'react';
import { Button, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import "bootstrap-icons/font/bootstrap-icons.css";

function CartWidget() {
  const { cartItems } = useContext(CartContext)

  return (
    <>{cartItems.length
      ? <Button variant='outline-dark'>
        <NavLink to={'/cart'} style={{ color: 'white', textDecoration: 'none' }}>
          <Badge bg="dark">{cartItems.reduce((total, prod) => total + prod.qty, 0)}</Badge>
          <i className="bi bi-cart3" style={{ padding: '5px 12px' }}></i>
        </NavLink>
      </Button>
      : ''
    }</>
  )
}

export default CartWidget;
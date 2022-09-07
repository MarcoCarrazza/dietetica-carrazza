import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

function CartWidget() {
  return ( 
  <Button>
    <i className="bi bi-cart3" style={{border: '1px solid white', borderRadius: 5, padding: '5px 12px'}}>
      <NavLink to={'/cart'} style={{color: 'white', textDecoration: 'none'}}>Ir al carrito</NavLink>
    </i>
  </Button> );
}

export default CartWidget;
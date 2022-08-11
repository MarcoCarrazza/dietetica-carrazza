import React from 'react';
import { Button } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

function CartWidget() {
  return ( 
  <Button>
    <i className="bi bi-cart3" style={{border: '1px solid white', borderRadius: 5, padding: '5px 12px'}}>  Carrito</i>
  </Button> );
}

export default CartWidget;
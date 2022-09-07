import React, { useState, useContext } from 'react';
import { Button, Row, Col, Stack } from 'react-bootstrap';
import Counter from './Counter';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemDetail({ item }) {
  const { addItem } = useContext(CartContext)
  const [qty, setQty] = useState(item.stock > 0 ? 1 : 0);

  const updateQty = (value) => {
    console.log('apretaste');
    if(qty===0 && value < 0) return
    if(qty===item.stock && value > 0) return
    setQty(qty + value)
  }

  const notify = () => toast('Producto agregado al carrito!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: {background: 'green', color: 'white'}
});

  return ( 
    <>
      <Row>
        <Col>
          <img src={item.pictureUrl} style={{width: '100%'}} alt={`product-${item.title}`} />
        </Col>
        <Col style={{marginTop: 80}}>
          <Stack gap={3}>
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
            <h2>Precio: {item.price}</h2>
            <h4>{item.stock > 0 ? <>Stock: {item.stock}</> : <>Sin stock</>}</h4>
            <Counter qty={qty} updateQty={updateQty} />
            <Button variant='primary' style={{width: 220}} onClick={() => {addItem({...item, qty: qty}); notify()}} disabled={qty===0 && true}>
              Agregar al carrito
            </Button>
            <Button variant='secondary' style={{width: 220}}>
              <NavLink to={'/cart'} style={{color: 'white', textDecoration: 'none'}}>Ir al carrito</NavLink>
            </Button>
          </Stack>
        </Col>
      </Row>
      <ToastContainer />
    </>
   );
}

export default ItemDetail;
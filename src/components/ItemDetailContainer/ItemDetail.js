import React, { useState, useContext } from 'react';
import { Button, Row, Col, Stack } from 'react-bootstrap';
import Counter from './Counter';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemDetail({ item }) {
  // const { addItem } = useContext(CartContext)

  const [show, setShow] = useState(false);
  
  const onAdd = (qty) => {
    //Acá en teoría debería agregar una acción para agregar al carrito el objeto {...item, qty: qty}, pero ésto escapa al alcance de este desafío, ya que dicha acción se reemplaza por una función addToCart() que venga de un context
    setShow(!show)
  }

//   const notify = () => toast('Producto agregado al carrito!', {
//     position: "top-right",
//     autoClose: 2000,
//     hideProgressBar: true,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     style: {background: 'green', color: 'white'}
// });

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
            <h4>{item.stock > 0 ? <>Stock disponible: {item.stock}</> : <>Sin stock</>}</h4>
            {show
              ? <Button variant='success'>
                  <NavLink to={'/cart'} style={{color: 'white', textDecoration: 'none'}}>Ir al carrito</NavLink>
                </Button>
              : <Counter onAdd={onAdd} stock={item.stock} />}
          </Stack>
        </Col>
      </Row>
      {/* <ToastContainer /> */}
    </>
   );
}

export default ItemDetail;
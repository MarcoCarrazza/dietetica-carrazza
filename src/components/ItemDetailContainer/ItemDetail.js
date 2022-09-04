import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col, Stack } from 'react-bootstrap';
import Counter from './Counter';
import { NavLink } from 'react-router-dom';

function ItemDetail({ item }) {
  const [qty, setQty] = useState(item.stock > 0 ? 1 : 0);

  const updateQty = (value) => {
    console.log('apretaste');
    if(qty===0 && value < 0) return
    if(qty===item.stock && value > 0) return
    setQty(qty + value)
  }

  return ( 
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
          <Button variant='primary' style={{width: 220}} disabled={qty===0 && true}>
            <NavLink to={'/cart'} style={{color: 'white', textDecoration: 'none'}}>Terminar compra</NavLink>
          </Button>
        </Stack>
      </Col>
    </Row>
   );
}

export default ItemDetail;
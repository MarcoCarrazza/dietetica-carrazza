import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

function ItemDetail({ item }) {
  return ( 
    <Row>
      <Col>
        <img src={item.pictureUrl} alt={`product-${item.name}`} />
      </Col>
      <Col>
        <h2>{item.name}</h2>
        <h3>{item.description}</h3>
        <h2>{item.price}</h2>
        <h4>{item.stock > 0 ? <>Stock: {item.stock}</> : <>Sin stock</>}</h4>
        <Button variant='primary'>Agregar al carrito</Button>
      </Col>
    </Row>
   );
}

export default ItemDetail;
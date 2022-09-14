import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function FormCheckout({ cartItems, totalItems }) {
  const [order, setOrder] = useState({
    buyer: {
      name: '',
      lastname: '',
      phone: '',
      email: ''
    },
    items: cartItems,
    total: totalItems
  });
  
  const handleChange = (e) => {
    setOrder({...order, buyer: {... order.buyer, [e.target.id]: e.target.value}})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(order);
  }

  return ( 
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Juan" onChange={handleChange} value={order.buyer.name} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Perez" onChange={handleChange} value={order.buyer.lastname} required />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="ej: juan@mail.com" onChange={handleChange} value={order.buyer.email} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="number" placeholder="ej: 341 543 8976" onChange={handleChange} value={order.buyer.phone} required />
        </Form.Group>
        
        <Button variant="success" type="submit">
          Finalizar compra
        </Button>
        <Button variant="outline-primary" type="buttom">
          Volver a la tienda
        </Button>
    </Form>
    </Container>
   );
}

export default FormCheckout;
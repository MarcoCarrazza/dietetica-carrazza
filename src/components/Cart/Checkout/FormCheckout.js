import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import db from  '../../../servicies';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'

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

  const setInFarebase = async newOrder => {
    try {
      const col = collection(db, 'sales')
      const uploadOrder = await addDoc(col, newOrder)
      Swal.fire(
        'Compra realizada con éxito!',
        `Se ha registrado tu compra bajo el siguiente código de compra: ${uploadOrder.id}`,
        'success'
      )
      console.log("Compra: " + uploadOrder.id);
    } catch (error) {
      console.log(error);
    }
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
            
            <Button onClick={() => setInFarebase(order)} variant="success" type="submit">
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
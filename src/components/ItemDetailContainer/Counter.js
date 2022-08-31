import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function Counter({ qty, updateQty }) {
  
  return (
  <Container className='d-flex'>
    <Button variant='outline-primary' onClick={() => updateQty(-1)}>-</Button>
    <Form.Control type='number' value={qty} style={{width: 60, margin: '0 10px'}} readOnly />
    <Button variant='outline-primary' onClick={() => updateQty(1)}>+</Button>
  </Container>
  );
}

export default Counter;
import React, { useState } from 'react';
import { Form, Button, Container, Stack } from 'react-bootstrap';

function Counter({ onAdd, stock }) {
  const [qty, setQty] = useState(1)

  const updateQty = (value) => {
    if(value === -1 && qty <= 1) return
    if(value === 1 && qty >= stock) return
    setQty(qty + value)
  }

  return (
  <Container>
    <Stack gap={3}>
      <div className='d-flex'>
        <Button variant='outline-primary' onClick={() => updateQty(-1)}>-</Button>
        <Form.Control type='number' value={qty} style={{width: 60, margin: '0 10px'}} readOnly />
        <Button variant='outline-primary' onClick={() => updateQty(1)}>+</Button>
      </div>
      <div>
      <Button variant='primary' style={{width: 220}} onClick={() => onAdd(qty)} disabled={stock===0 && true}>
        Agregar al carrito
      </Button>
      </div>
    </Stack>
  </Container>
  );
}

export default Counter;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({ item }) {
  return ( 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.pictureUrl} style={{height: 250}} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Precio: $ {item.price}
        </Card.Text>
        <Button variant="primary">Ver detalle del producto</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{item.stock > 0 ? <>Stock: {item.stock}</> : <>Sin stock</>}</Card.Footer>
    </Card>
   );
}

export default Item;
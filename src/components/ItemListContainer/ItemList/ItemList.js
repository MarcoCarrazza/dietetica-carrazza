import React from 'react';
import Item from './Item/Item';
import { Col, Row } from 'react-bootstrap';

function ItemList({ items }) {
  return ( 
    <Row xs={1} md={3} className="g-4">
      {items.map(product => {
        return (
          <Col>
            <Item item={product} />
          </Col>
        )
      })}
    </Row>
   );
}

export default ItemList;
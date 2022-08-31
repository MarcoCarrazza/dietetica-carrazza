import React from 'react';
import Item from './Item/Item';
import { Col, Container, Row } from 'react-bootstrap';

function ItemList({ items, category }) {
  const categoryTitle = (id) => {
    switch(id){
      case 'cacaos':
        return 'Cacaos'
        break
      case 'cereales':
        return 'Cereales'
        break
      case 'barritas':
        return 'Barritas'
        break
      case 'frutos-secos':
        return 'Frutos secos'
        break
      case 'granolas':
        return 'Granolas'
        break
      case 'harinas':
        return 'Harinas'
        break
      case 'manies':
        return 'Maníes'
        break
      case 'mermeladas':
        return 'Mermeladas'
        break
      case 'mixes':
        return 'Mixes'
        break
      default:
        return ''
    }
  }
  
  return ( 
    <Container>
      <h2 className='text-center'>{categoryTitle(category)}</h2>
      <Row xs={1} md={3} className="g-4">
        {!items.length
          ? <h3 className='text-center' style={{width: '100%'}}>- No existen productos para esta categoría -</h3>
          : items.map(product => {
          return (
            <Col>
              <Item item={product} />
            </Col>
          )
        })}
      </Row>
    </Container>
   );
}

export default ItemList;
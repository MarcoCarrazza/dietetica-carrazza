import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import data from '../../DB/data.json'

function ItemDetailContainer() {
  const [products, setProducts] = useState();
  const params = useParams()

  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })

  useEffect(() => {
    task
      .then(response => setProducts(response))
      .catch(err => console.log(err))
      .finally(() => console.log('Finalizó la promesa.'))  
  }, []);

  return ( 
    <div className='d-flex justify-content-center'>
      {!products ? <Spinner animation="grow" variant="primary" /> : <ItemDetail item={products.find(product => product.id == params.id)} />}
    </div>
   );
}

export default ItemDetailContainer;
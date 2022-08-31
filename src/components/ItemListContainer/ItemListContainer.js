import React, { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import data from '../../DB/data.json'

function ItemListContainer({ greeting }) {
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
  }, [params]);

  const categoryFilter = product => {
    if(!params.id) return product
    return product.category === params.id
  }
  
  return ( 
    <section>
      {!params.id && <h1 className='text-center'>Nuestros productos</h1>}
      <div className='d-flex-column justify-content-center'>
        {!products ? <Spinner animation="grow" variant="primary" /> : <ItemList items={products.filter(categoryFilter)} category={params.id} />}
      </div>
    </section>
   );
}

export default ItemListContainer;
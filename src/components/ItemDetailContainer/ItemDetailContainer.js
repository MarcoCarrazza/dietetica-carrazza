import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import Spinner from 'react-bootstrap/Spinner';

const data = {
  id: 1,
  name: 'Mix Europeo 1kg',
  price: 980,
  description: 'Contiene almendras, nueces, maní, castañas de cajú y pasas de uva.',
  stock: 27,
  pictureUrl: 'https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/m/i/mix-frutas-secas_1.jpg'
}

function ItemDetailContainer() {
  const [item, setItem] = useState();

  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })

  useEffect(() => {
    task
      .then(response => setItem(response))
      .catch(err => console.log(err))
      .finally(() => console.log('Finalizó la promesa.'))  
  }, []);

  return ( 
    <div className='d-flex justify-content-center'>
      {!item ? <Spinner animation="grow" variant="primary" /> : <ItemDetail item={item} />}
    </div>
   );
}

export default ItemDetailContainer;
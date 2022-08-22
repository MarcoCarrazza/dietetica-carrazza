import React, { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';

const data = [
  {
    id: 1,
    title: 'Mix Europeo 1kg',
    price: 970,
    pictureUrl: 'https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/m/i/mix-frutas-secas_1.jpg',
    stock: 25
  },
  {
    id: 2,
    title: 'Mix Elite 1kg',
    price: 1350,
    pictureUrl: 'https://i0.wp.com/laduvalina.com.ar/wp-content/uploads/2021/02/eLITE-CON-MANI.png?w=339&ssl=1',
    stock: 33
  },
  {
    id: 3,
    title: 'Mix Bolivia 1kg',
    price: 1430,
    pictureUrl: 'https://scontent.fros9-2.fna.fbcdn.net/v/t1.6435-9/70338552_130266981655584_5253656051470827520_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=9fni0pvmmYkAX-2hJI8&_nc_ht=scontent.fros9-2.fna&oh=00_AT9ZB4CloLi7vY1Qg9TOTGc7Kp5Uyzv_j_bJ1IHtkAigoA&oe=6327D057',
    stock: 25
  },
  {
    id: 4,
    title: 'Mix Carioca 1kg',
    price: 1100,
    pictureUrl: 'https://grandiet.com/2227-thickbox_default/mix-carioca.jpg',
    stock: 0
  },
  {
    id: 5,
    title: 'Mix de Semillas 1kg',
    price: 920,
    pictureUrl: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/106/690/products/mix-de-semillas1-dae6ee0be2712eb4fe15663196147147-1024-10241-22ef429c0b2979c17816046838458485-640-0.png',
    stock: 29
  },
  {
    id: 6,
    title: 'Mix de los Andes 1kg',
    price: 1050,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_766001-MLA44088996368_112020-O.jpg',
    stock: 97
  }
]

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState();
  
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
    <section>
      <h1 className='text-center'>Nuestros productos</h1>
      <div className='d-flex justify-content-center'>
        {!products ? <Spinner animation="grow" variant="primary" /> : <ItemList items={products} />}
      </div>
    </section>
   );
}

export default ItemListContainer;
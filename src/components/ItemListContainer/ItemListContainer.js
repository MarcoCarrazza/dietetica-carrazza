import React, { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import db from '../../servicies';
import { collection, query, where, getDocs } from 'firebase/firestore';

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState();
  
  const params = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = collection(db, 'products')
        let q
        if(params.id){
          q = query(data, where('categoryId', '==', params.id))
        } else {
          q = query(data)
        }
        const col = await getDocs(q)
        const res = col.docs.map(doc => doc = {id: doc.id, ...doc.data()})
        return res
      } catch (error) {
        console.log(error);
      }
    }

    fetchData().then(response => setProducts(response))
  }, [params]);
  
  return ( 
    <section>
      {!params.id && <h1 className='text-center'>Nuestros productos</h1>}
      <div className='d-flex-column justify-content-center'>
        {!products ? <Spinner animation="grow" variant="primary" /> : <ItemList items={products} category={params.id} />}
      </div>
    </section>
   );
}

export default ItemListContainer;
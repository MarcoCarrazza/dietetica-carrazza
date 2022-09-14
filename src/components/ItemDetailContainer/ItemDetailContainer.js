import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import db from '../../servicies';
import { getDoc, doc } from 'firebase/firestore';

function ItemDetailContainer() {
  const [products, setProducts] = useState();
  const params = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'products', params.id);
        const docSnap = await getDoc(docRef);
        const res = {id: docSnap.id, ...docSnap.data()}
        return res
      } catch (error) {
        console.log(error);
      }
    }

    fetchData().then(response => setProducts(response))
  }, [params]);

  return ( 
    <div className='d-flex justify-content-center'>
      {!products ? <Spinner animation="grow" variant="primary" /> : <ItemDetail item={products} />}
    </div>
   );
}

export default ItemDetailContainer;
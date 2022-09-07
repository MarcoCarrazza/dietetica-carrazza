import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { CartContext } from '../../context/CartProvider';

function Cart() {
  const { cartItems, removeItem, clear } = useContext(CartContext)
  return ( 
    <>
      <h1>Carrito:</h1>
      {!cartItems.length 
        ? <h3>Su carrito está vacío :(</h3>
        : <>
            <Table striped bordered>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio unitario</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((prod, i) => {
                return(
                  <tr key={i}>
                    <td lg='2'>
                      <img src={prod.pictureUrl} style={{width: '60px'}} alt={`product-${prod.title}`} />
                    </td>
                    <td>
                      <h3>{prod.title}</h3>
                    </td>
                    <td>
                      <h3>{prod.qty}</h3>
                    </td>
                    <td>
                      <h3>{prod.price}</h3>
                    </td>
                    <td>
                      <Button id={prod.id} onClick={(e) => removeItem(e.target.id)} variant='outline-danger'>Eliminar</Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
            </Table>
            <Button variant='danger' onClick={clear}>Vaciar carrito</Button> 
          </>
      }
    </>
  )
}

export default Cart;
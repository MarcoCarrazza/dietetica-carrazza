import React, { useContext } from 'react';
import { Button, Table, Row, Col, Stack } from 'react-bootstrap';
import { CartContext } from '../../context/CartProvider';
import { NavLink } from 'react-router-dom';
import FormCheckout from './Checkout/FormCheckout';

function Cart() {
  const { cartItems, removeItem, clear } = useContext(CartContext)
  return ( 
    <>
      <h1>Carrito:</h1>
      {!cartItems.length 
        ? <>
            <h3>Su carrito está vacío :(</h3>
            <Button variant='outline-primary'>
              <NavLink to={'/'} style={{textDecoration: 'none'}}>Volver a la tienda</NavLink>
            </Button>
          </>
        : <>
            <Table striped bordered>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio unitario</th>
                <th>Precio total</th>
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
                      <h3>
                      <NavLink to={`/item/${prod.id}`} style={{textDecoration: 'none'}}>{prod.title}</NavLink>
                      </h3>
                    </td>
                    <td>
                      <h3>{prod.qty}</h3>
                    </td>
                    <td>
                      <h3>{prod.price}</h3>
                    </td>
                    <td>
                      <h3>{prod.price * prod.qty}</h3>
                    </td>
                    <td>
                      <Button id={prod.id} onClick={(e) => removeItem(e.target.id)} variant='outline-danger'>Eliminar</Button>
                    </td>
                  </tr>
                )
              })}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <h3>Total:</h3>
                </td>
                <td>
                  <h3>{cartItems.reduce((total, prod) => total + (prod.price * prod.qty), 0)}</h3>
                </td>
                <td></td>
              </tr>
            </tbody>
            </Table>
            
            <Stack gap={3}>
              <Button variant='danger' onClick={clear}>Vaciar carrito</Button>
              <FormCheckout 
                cartItems={cartItems}
                totalItems={cartItems.reduce((total, prod) => total + (prod.price * prod.qty), 0)} />
            </Stack>
          </>
      }
    </>
  )
}

export default Cart;
import React from 'react';

function ItemListContainer({ greeting }) {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 28,
    paddingTop: 30
  }
  return ( 
    <h1 style={style}>{greeting}</h1>
   );
}

export default ItemListContainer;
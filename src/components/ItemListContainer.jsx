import React from 'react';
import { ItemCount } from './ItemCount';

export const ItemListContainer = ({greeting}) => {

  const handleAdd = () => {
    console.log("Item added");
  }
  return (
    <>
      <h1 className='item-list-container__title'>{greeting}</h1>
      <ItemCount onAdd={handleAdd} stock={10} />
    </>
  )
}

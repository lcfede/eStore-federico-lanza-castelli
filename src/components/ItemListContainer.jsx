import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { ItemCount } from './ItemCount';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {

  const {id} = useParams();
  
  const url = !id 
              ? 'https://fakestoreapi.com/products'
              : `https://fakestoreapi.com/products/category/${id}`;
  
  const { data, loading, error } = useFetch(url);

  return (
    <>
      <h1 className='item-list-container__title'>
        {greeting ? greeting : "Discover, collect, and sell extraordinary NFTs"}
      </h1>
      <ItemList data={data} loading={loading} error={error} />
    </>
  )
}

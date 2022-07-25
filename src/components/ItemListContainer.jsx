import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {

  const {id} = useParams();
  
  const url = !id 
              ? 'https://api.escuelajs.co/api/v1/products'
              : `https://api.escuelajs.co/api/v1/categories/${id}/products`;
  
  const { data, loading, error } = useFetch(url);

  return (
    <>
      <h1 className='item-list-container__title'>
        {greeting ? greeting : "Discover new collections for next season"}
      </h1>
      <ItemList data={data} loading={loading} error={error} />
    </>
  )
}

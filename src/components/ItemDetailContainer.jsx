import React from 'react'
import { useFetch } from '../hooks/useFetch';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const {id} = useParams();
  
  const url = !id 
              ? 'https://fakestoreapi.com/products'
              : `https://fakestoreapi.com/products/${id}`;
  
  const { data, loading, error } = useFetch(url);

    return (
        <>
            <ItemDetail data={data} loading={loading} error={error}/>
        </>
    )
}

export default ItemDetailContainer
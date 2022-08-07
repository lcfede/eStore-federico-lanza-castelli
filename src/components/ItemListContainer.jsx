import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useNavigate, useParams } from 'react-router-dom';
import {getProducts, getProductsByCategory} from '../services/productService';
import { Box, LinearProgress } from '@mui/material';

export const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const {category} = useParams();

    useEffect(() => {
      if (!category) {
        getProducts(setLoading)
          .then((data) => {
            setProducts(data);
        });
      } else {
        getProductsByCategory(category, setLoading)
          .then((data) => {
            if (data && data.length > 0)
              setProducts(data);
            else
              navigate('/NotFound');
        })
      }
    }, [category]);
    

    if (loading) 
      return (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )

    return (
      <>
        {
          (products && products.length > 0) &&
          <div>
            <h1 className='item-list-container__title'>
              {greeting ? greeting : "Discover new collections for next season"}
            </h1>
            <ItemList data={products} loading={loading} />
          </div>
        }
        
      </>
    )
  }

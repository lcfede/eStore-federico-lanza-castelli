import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import {getProducts, getProductsByCategory} from './services/productService';

export const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

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
            setProducts(data);
        })
      }
    }, [category]);
    

    if (loading) return <p>Loading data...</p>

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

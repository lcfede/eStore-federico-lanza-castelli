import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {getProductById} from './services/productService';

const ItemDetailContainer = () => {

    const {id} = useParams(); 
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProductById(id, setLoading)
            .then((data) => {
                setProduct(data);
            })
    }, [id])
    
    if(loading) return <p>Loading data...</p>
    return (
        <>
            <ItemDetail data={product} loading={loading}/>
        </>
    )
}

export default ItemDetailContainer
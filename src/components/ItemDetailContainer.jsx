import React from 'react'
import { useFetch } from '../hooks/useFetch';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc} from 'firebase/firestore';
import { db } from '../firebase/config';


const ItemDetailContainer = () => {

  const {id} = useParams();

  const getProducts = async () => {
    const docRef = doc(db, "products", "ZcjWmhQXSARJc8BLsHzT");
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const product = {
            id: docSnap.id,
            ...docSnap.data()
        }
        console.log(product);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }
  getProducts();
  
  const url = !id 
              ? 'https://api.escuelajs.co/api/v1/products'
              : `https://api.escuelajs.co/api/v1/products/${id}`;
  
  const { data, loading, error } = useFetch(url);

    return (
        <>
            <ItemDetail data={data} loading={loading} error={error}/>
        </>
    )
}

export default ItemDetailContainer
import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { db } from "../firebase/config";

const NotFound = () => {

  //   const algoritmoGuardadoAutomático = async () => {
      
  //   const response = await fetch('/data.json');
  //   const productosAGuardar = await response.json();
  //     productosAGuardar.forEach(async (producto) => {
  //         const docRef = await addDoc(collection(db, "products"), {
  //             title: producto.title,
  //             price: producto.price,
  //             description: producto.description,
  //             category: producto.category.name,
  //             image: producto.images[0],
  //             stock: producto.stock,
  //         });
  //         console.log("Document written with ID: ", docRef.id);
  //     });
  // }
  // useEffect(() => {
  //   algoritmoGuardadoAutomático();
  // }, [])
  
  
  return (
    <h1>Page not found...</h1>
  )
}

export default NotFound
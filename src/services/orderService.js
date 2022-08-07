import {collection, addDoc, updateDoc, doc, getDoc} from 'firebase/firestore';
import { db } from '../firebase/config';


export const saveOrder = async (order) => {
    const docRef = await addDoc(collection(db, "orders"), order);

    for (const product of order.products) {
        const docRef = await doc(db, "products", product.id);
        await updateDoc(docRef, {stock: product.stock - product.qty});
    }

    return docRef.id;
}
import {collection, addDoc} from 'firebase/firestore';
import { db } from '../../firebase/config';


export const saveOrder = async (order) => {
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
}
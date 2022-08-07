import {collection, query, getDocs} from 'firebase/firestore';
import { db } from '../firebase/config';


export const getCategoriesAll = async () => {
    try {
        const q = query(collection(db, "categories"));
        const docs = await getDocs(q);
        const categories = [];
        docs.forEach((doc) => {
          categories.push({ id: doc.id, ...doc.data() })
        });
        return categories;
      } catch (error) {
        console.log(error);
      }
}
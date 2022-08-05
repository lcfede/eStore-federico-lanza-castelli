
import {doc, getDoc, collection, query, getDocs, limit, where} from 'firebase/firestore';
import { db } from '../../firebase/config';


export const getProductById = async (id, setLoading) => {
    setLoading(true);
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const product = {
            id: docSnap.id,
            ...docSnap.data()
        }
        setLoading(false);
        return product;
    } else {
      setLoading(false)
      return {};
    }
}

export const getProducts = async (setLoading) => {
    try {
      setLoading(true);
      const q = query(collection(db, "products"), limit(30));
      const docs = await getDocs(q);
      const prods = [];
      docs.forEach((doc) => {
        prods.push({ id: doc.id, ...doc.data() })
      });
      setLoading(false);
      return prods;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  export const getProductsByCategory = async (category, setLoading) => {
    try {
      setLoading(true);
      const prodRef = query(collection(db, "products"), limit(30));
      const q = query(prodRef, where("category", "==", category))
      const docs = await getDocs(q);
      const prods = [];
      docs.forEach((doc) => {
        prods.push({ id: doc.id, ...doc.data() })
      });
      setLoading(false);
      return prods;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
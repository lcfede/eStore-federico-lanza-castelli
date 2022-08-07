
import { db, auth } from "../firebase/config";
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";


export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    return err.message;
  }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      s: "local",
      email,
    });
  } catch (err) {
    return err.message;
  }
};

export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return {result: "success", msg: "Password reset link sent!"};
  } catch (err) {
    return {result: "error", msg: err.message};
  }
};

export const logout = () => {
  signOut(auth);
};

export const getUserName = async (user) => {
    if(!user) return "";
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const docs = await getDocs(q);
      if (!docs.empty) {
        const data = docs.docs[0].data();
        return data.name
      }
      else {
        return "";
      }
    } catch (err) {
      return "";
    }
  };
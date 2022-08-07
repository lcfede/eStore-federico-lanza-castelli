import React, { createContext, useEffect, useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config"; 
import { getUserName } from "../services/authService";

export const Auth = createContext();

const AuthProvider = ({children}) => {    

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
  
      useEffect(() => {
        getUserName(user)
            .then((name) => {
                setName(name);
            });
      }, [user, loading]);

    return (
        <Auth.Provider value={{user, loading, name, error}}>
            {children}
        </Auth.Provider>
    )
}

export default AuthProvider
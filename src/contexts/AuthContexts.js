'use client'
import { createContext, useEffect, useLayoutEffect, useState } from "react";

export const AuthContexts = createContext({})

export const AuthContextsProvider = ({children})=>{
    const [user,setUser] = useState(null)
    
    useLayoutEffect( ()=>{
        async function getUser(token) {
          const response = await fetch("http://localhost:5000/api/user/me", {
            headers: {
              authorization: token,
            },
          });
          const result = await response.json();
          response.ok
            ? setUser({user:result.data, token })
            : setUser(null);
        }
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            if(token){
                getUser(token)
           }
        } catch (error) {
            console.log(error.message);
        }
        // user ? setUser(user) : setUser(null)
        
    },[])
    return(
        <AuthContexts.Provider value={{user,setUser}}>
            {children}
        </AuthContexts.Provider>
    )
}
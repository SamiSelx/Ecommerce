'use client'
import { createContext, useEffect, useState } from "react";
export const AuthContexts = createContext({})

export const AuthContextsProvider = ({children})=>{
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    
    useEffect( ()=>{
        async function getUser(token) {
          const response = await fetch(process.env.NEXT_PUBLIC_URL_BACK+"/api/user/me", {
            headers: {
              authorization: token,
            },
          });
          const result = await response.json();
          console.log(result);  
          response.ok
            ? setUser({user:result.user, token })
            : setUser(undefined);
            
            setLoading(false)
        }
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            if(token){
                getUser(token)
           }else setLoading(false)
        } catch (error) {
            console.log(error.message);
        }
        // user ? setUser(user) : setUser(null)
    },[])
    return(
        <AuthContexts.Provider value={{loading,user,setUser}}>
            {children}
        </AuthContexts.Provider>
    )
}
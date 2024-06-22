'use client'
import { createContext, useEffect, useState } from "react";

export const AuthContexts = createContext({})

export const AuthContextsProvider = ({children})=>{
    const [user,setUser] = useState(null)
    useEffect( ()=>{
        async function getUser(token){
            const response = await fetch('http://localhost:5000/api/user/me',{
                headers:{
                    'authorization':token
                }
            })
            const result =await response.json()
            response.ok ? setUser({fullName:result.data.fullName,token}) : setUser(null)
        }
        const token = JSON.parse(localStorage.getItem('token'))
        // user ? setUser(user) : setUser(null)
        if(token){
             getUser(token)
        }
    },[])
    return(
        <AuthContexts.Provider value={{user,setUser}}>
            {children}
        </AuthContexts.Provider>
    )
}
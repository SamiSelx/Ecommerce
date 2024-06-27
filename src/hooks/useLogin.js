"use client";
import { useState } from "react";
import useAuth from "./useAuth";

export default function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {setUser} = useAuth()

  async function login(login) {
    setIsLoading(true);
    const response = await fetch(process.env.URL_BACK+"/api/user/login", {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(response);
    if (response.ok) {
      console.log(data);
      setError(null);
      localStorage.setItem("token", JSON.stringify(data.token));
      setUser({user:data.user, token: data.token });
    } else {
      console.log(data);
      setError(data.mssg);
    }

    setIsLoading(false);
  }

  return{isLoading,error,login}
}

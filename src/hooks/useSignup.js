"use client";
import { useState } from "react";
import useAuth from "./useAuth";

export default function useSignup() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {setUser} = useAuth()

  async function signup(userInformation) {
    setIsLoading(true);
    const formData = new FormData()
    formData.append('firstName',userInformation.firstName )
    formData.append('lastName',userInformation.lastName)
    formData.append('email',userInformation.email)
    formData.append('password',userInformation.password)
    formData.append('profileImage',userInformation.profileImage)
    const response = await fetch(process.env.NEXT_PUBLIC_URL_BACK+"/api/user/signup", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      setError(null);
      localStorage.setItem("token", JSON.stringify(data.token));
      setUser({user:{...userInformation,profileImage:userInformation.profileImage ? URL.createObjectURL(userInformation.profileImage):null}, token: data.token });
    } else {
      setError(data.mssg);
    }

    setIsLoading(false);
  }

  return { isLoading, error, signup };
}

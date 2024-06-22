"use client";
import { useState } from "react";
import useAuth from "./useAuth";

export default function useSignup() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {setUser} = useAuth()

  async function signup(userInformation) {
    setIsLoading(true);
    const body = {
      fullName: userInformation.firstName + " " + userInformation.lastName,
      email: userInformation.email,
      password: userInformation.password,
    };
    const response = await fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      setError(null);
      localStorage.setItem("token", JSON.stringify(`Bearer ${data.token}`));
      setUser({ fullName: data.user, token: data.token });
    } else {
      setError(data.mssg);
    }

    setIsLoading(false);
  }

  return { isLoading, error, signup };
}

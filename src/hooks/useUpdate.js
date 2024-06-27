"use client";
import useAuth from "./useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useUpdate() {
  const { user, setUser } = useAuth();
  const [error,setError] = useState(null)
  const [loading,setLoading]= useState(false)

  async function update(userUpdate) {
    setLoading(true)
    const formData = new FormData();
    formData.append("firstName", userUpdate.firstName);
    formData.append("lastName", userUpdate.lastName);
    formData.append("email", userUpdate.email);
    formData.append("profileImage", userUpdate.profileImage);

    console.log(userUpdate);
    const response = await fetch(process.env.NEXT_PUBLIC_URL_BACK+"/api/user/me", {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: user.token,
      },
    });
    const data = await response.json();
    console.log('data recieve after update',data);
    if (response.ok) {
      // ref.current.src = user?.profileImage
      setUser({
        user: { ...userUpdate, profileImage: data.user.profileImage },
        token: user.token,
      });
      console.log("change has been successfully");
      toast.success("Your Profile Has Been UPDATED");
      setError(null)
    }else setError(data.mssg)
    setLoading(false)
  }

  return {error,loading,update}
}

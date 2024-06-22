"use client";
import toast from "react-hot-toast";
import useAuth from "./useAuth";


export default function useLogout() {
  const { setUser } = useAuth();
  function logout() {
    setUser(null);
    localStorage.removeItem("token");
    toast.success('Logout successfully')
  }
  return logout;
}

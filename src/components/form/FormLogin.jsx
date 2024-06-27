"use client";
import useAuth from "@/hooks/useAuth";
import useLogin from "@/hooks/useLogin";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

export default function FormLogin() {
  const [userInformation, setUserInformation] = useState({ email: "", password: "" });
  const [visible,setVisible] = useState(false)
  const {isLoading,error,login} = useLogin()
  const {user} = useAuth()
  
  if(user) redirect('/')

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (login.email == "" || login.password == "") return;
    login(userInformation)
    
  };

  return (
    <form className={`flex flex-col gap-3 `} onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1 ">
        <label htmlFor="email">Email</label>
        <input
          className="border-black border w-full focus:outline-none focus:placeholder:opacity-0 placeholder:transition placeholder:duration-300  px-3 py-1 rounded-3xl"
          type="text"
          placeholder="Email"
          id="email"
          value={userInformation.email}
          onChange={(e) => setUserInformation({ ...userInformation, email: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <div className="relative">
          <input
            type={visible ? "text" : "password"}
            placeholder="Password"
            id="password"
            value={userInformation.password}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                password: e.target.value,
              })
            }
            className="border-black border w-full focus:outline-none focus:placeholder:opacity-0 placeholder:transition placeholder:duration-300  px-3 py-1 rounded-3xl"
          />
          <div
            className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
            onClick={() => setVisible((prev) => !prev)}
          >
            {!visible ? <FaEyeSlash /> : <IoEyeSharp />}
          </div>
        </div>
      </div>
      <input
        disabled={isLoading}
        type="submit"
        value={"Sign in"}
        className={`bg-dark hover:bg-darkHover transition duration-500 text-white rounded-3xl px-3 py-1  ${
          isLoading ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      />
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

"use client";
import useAuth from "@/hooks/useAuth";
import useSignup from "@/hooks/useSignup";
import { redirect } from "next/navigation";
import { useRef, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa";


export default function FormSignUp() {
  const [userInformation, setUserInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profileImage:null
  });
  const [visible,setVisible] = useState(false)
  const { isLoading, error, signup } = useSignup();
  const { user } = useAuth();
  if (user) redirect("/");

  const handleSubmit = async (e) => {
    e.preventDefault();

    signup(userInformation);
    if (!error) {
      setUserInformation({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        
      });
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={(e) => handleSubmit(e)}>
      <div className="relative h-[150px] w-[150px] self-center">
            <img
              src={!userInformation.profileImage ? "../img/user.png" : URL.createObjectURL(userInformation.profileImage)}
              alt="profile"
              className="rounded-full w-full h-full shadow-md"
            />
            <input
              type="file"
              name="image"
              id="img"
              className="hidden"
              onChange={e=>{
                setUserInformation({...userInformation,profileImage:e.target.files[0]})
              }}
            />
            <label
              htmlFor="img"
              className="absolute right-[2%] bottom-[8%] text-white p-1.5 cursor-pointer hover:bg-blue-600 bg-blue-500 rounded-full transition duration-300"
            >
              <FaPen />
            </label>
          </div>
      <div className="flex gap-4">
      
        <div>
          <label htmlFor="FN">First Name</label>
          <br></br>
          <input
            type="text"
            placeholder="First Name"
            id="FN"
            className="border-black border w-full focus:outline-none focus:placeholder:opacity-0 placeholder:transition placeholder:duration-300  px-3 py-1 rounded-3xl"
            value={userInformation.firstName}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                firstName: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="LN">Last Name</label>
          <br></br>
          <input
            type="text"
            placeholder="Last Name"
            id="LS"
            value={userInformation.lastName}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                lastName: e.target.value,
              })
            }
            className="border-black border w-full focus:outline-none focus:placeholder:opacity-0 placeholder:transition placeholder:duration-300  px-3 py-1 rounded-3xl"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <br></br>
        <input
          className="border-black border w-full focus:outline-none focus:placeholder:opacity-0 placeholder:transition placeholder:duration-300  px-3 py-1 rounded-3xl"
          type="text"
          placeholder="Email"
          id="email"
          value={userInformation.email}
          onChange={(e) =>
            setUserInformation({ ...userInformation, email: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <br></br>
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
        type="submit"
        value="Sign up"
        className={`bg-dark hover:bg-darkHover transition duration-500 text-white rounded-3xl px-3 py-1  ${
          isLoading ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      />

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

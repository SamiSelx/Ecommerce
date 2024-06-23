"use client";
import ProfileForm from "@/components/profileForm/ProfileForm";
import useAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FaPen } from "react-icons/fa";

export default function Profile() {
  const [userUpdate, setUserUpdate] = useState({
    image: null,
    firstName: "",
    lastName: "",
    email: "",
  });
  const { user } = useAuth();
  if (!user) redirect("/auth/login");
  console.log(userUpdate);

  return (
    <>
      <form className="h-[70vh] flex gap-8 container mx-auto p-4 shadow-sm">
        <div className="border-r border-dark flex flex-col items-center pr-14 basis-1/3 gap-12">
          <h1 className="text-center text-2xl font-bold">
            Welcome {user.user.fullName}
          </h1>
          <div className="relative w-[200px]">
            <img
              src="img/team-member-02.jpg"
              alt="profile"
              className="rounded-full w-full h-full shadow-md"
            />
            <input
              type="file"
              name="image"
              id="img"
              className="hidden"
              onChange={(e) =>
                setUserUpdate({ ...userUpdate, image: e.target.files[0] })
              }
            />
            <label
              htmlFor="img"
              className="absolute right-[2%] bottom-[8%] text-white p-1.5 cursor-pointer hover:bg-blue-600 bg-blue-500 rounded-full transition duration-300"
            >
              <FaPen />
            </label>
          </div>
        </div>
        <ProfileForm userUpdate={userUpdate} setUserUpdate={setUserUpdate}/>
      </form>
      <div className="h-[15vh]"></div>
    </>
  );
}

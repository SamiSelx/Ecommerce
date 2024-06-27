"use client";
import Loading from "@/app/loading";
import ProfileForm from "@/components/profileForm/ProfileForm";
import useAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";
import {  useState } from "react";
import { FaPen } from "react-icons/fa";
import useUpdate from "@/hooks/useUpdate";

export default function Profile() {
  const {loading:waiting,user,setUser } = useAuth();

  if(waiting) return <Loading/>
  if (!user) redirect("/auth/login");

  const [userUpdate, setUserUpdate] = useState(user.user);
  const [profileImage,setProfileImage] = useState(user.user.profileImage)
  const {error,loading,update} = useUpdate()

  async function handleSubmit(e){
    e.preventDefault()
    if(userUpdate.firstName == "" || userUpdate.lastName == "" || userUpdate.email == "") return

    // const fr = new FormData(e.target)
    update(userUpdate)

  }

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="h-[85vh] flex gap-8 container mx-auto p-4 shadow-sm">
        <div className="border-r border-dark flex flex-col items-center pr-14 basis-1/3 gap-12">
          <h1 className="text-center text-2xl font-bold">
            Welcome {user.user.firstName + ' '+ user.user.lastName}
          </h1>
          <div className="relative h-[200px] w-[200px]">
            <img
              src={!profileImage ? "../img/user.png" : profileImage}
              alt="profile"
              className="rounded-full w-full h-full shadow-md"
            />
            <input
              type="file"
              name="profileImage"
              id="img"
              className="hidden"
              onChange={(e) =>
                {
                  setProfileImage(URL.createObjectURL(e.target.files[0]))
                  setUserUpdate({ ...userUpdate, profileImage: e.target.files[0] })
                }
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
        <ProfileForm userUpdate={userUpdate} setUserUpdate={setUserUpdate} loading={loading}/>
        {error && <div className="text-red-500 text-xl font-semibold">{error}</div>}
      </form>
    </>
  );
}

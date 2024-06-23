import useAuth from "@/hooks/useAuth";
import { useState } from "react";

export default function ProfileForm({ userUpdate, setUserUpdate }) {
    const [edit,setEdit] = useState(false)
    const {user} = useAuth()
    console.log('inside setting',user);
  return (
    <div className="flex flex-col justify-center gap-4 flex-1">
      <div>
        <label htmlFor="firstname">First Name </label>
        <br></br>
        <input
          type="text"
          name=""
          id="firstname"
          placeholder="First Name"
          disabled={!edit}
          value={!edit ? user.user.fullName : userUpdate.firstName}
          onChange={e=>setUserUpdate({...userUpdate,firstName:e.target.value})}
          className={`border-black border w-full focus:outline-none focus:placeholder:opacity-0 placeholder:transition placeholder:duration-300  px-3 py-1 ${!edit ? 'cursor-not-allowed text-grey' : ""}`}
        />
      </div>
      <div>
        <label htmlFor="lastname">Last Name </label>
        <br></br>
        <input
          type="text"
          name=""
          id="lastname"
          placeholder="Last Name"
          value={userUpdate.lastName}
          onChange={e=>setUserUpdate({...userUpdate,lastName:e.target.value})}
          className={`border-black border w-full focus:outline-none focus:placeholder:opacity-0 placeholder:transition placeholder:duration-300  px-3 py-1 ${!edit ? 'cursor-not-allowed text-grey' : ""}`}
          disabled={!edit}
        />
      </div>
      <div>
        <label htmlFor="email">Email </label>
        <br></br>
        <input
          type="text"
          name=""
          id="email"
          placeholder="Email"
          value={!edit ? user.user.email : userUpdate.email}
          onChange={e=>setUserUpdate({...userUpdate,email:e.target.value})}
          disabled={!edit}
          className={`border-black border w-full focus:outline-none focus:placeholder:opacity-0 placeholder:transition placeholder:duration-300  px-3 py-1 ${!edit ? 'cursor-not-allowed text-grey' : ""}`}
        />
      </div>
      <button type="button" onClick={()=>setEdit(true)}>Edit</button>
    </div>
  );
}

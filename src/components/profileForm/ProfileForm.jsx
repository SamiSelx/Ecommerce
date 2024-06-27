import useAuth from "@/hooks/useAuth";
import { useState } from "react";

export default function ProfileForm({ userUpdate, setUserUpdate,loading }) {
    const [edit,setEdit] = useState(false)

  return (
    <div className="flex flex-col justify-center gap-4 flex-1">
      <div>
        <label htmlFor="firstname">First Name </label>
        <br></br>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="First Name"
          disabled={!edit}
          value={userUpdate.firstName}
          onChange={e=>setUserUpdate({...userUpdate,firstName:e.target.value})}
          className={`border-black border w-full focus:outline-none focus:placeholder:opacity-0 placeholder:transition placeholder:duration-300  px-3 py-1 ${!edit ? 'cursor-not-allowed text-grey' : ""}`}
        />
      </div>
      <div>
        <label htmlFor="lastname">Last Name </label>
        <br></br>
        <input
          type="text"
          name="lastname"
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
          name="email"
          id="email"
          placeholder="Email"
          value={userUpdate.email}
          onChange={e=>setUserUpdate({...userUpdate,email:e.target.value})}
          disabled={!edit}
          className={`border-black border w-full focus:outline-none focus:placeholder:opacity-0 placeholder:transition placeholder:duration-300  px-3 py-1 ${!edit ? 'cursor-not-allowed text-grey' : ""}`}
        />
      </div>
      <button type="button" onClick={()=>setEdit(true)}>Edit</button>
      <input type="submit" value={loading ? "Saving..." : "Save"} className={`cursor-pointer text-white py-3 rounded-full ${loading ? 'bg-grey' : 'bg-dark'}`}/>
    </div>
  );
}

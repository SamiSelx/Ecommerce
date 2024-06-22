'use client'
import FormSignup from "@/components/form/FormSignup";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  return (
    <div className="h-[85vh] flex justify-center items-center flex-col">
      <div className="flex flex-col gap-3 container mx-auto px-5 max-w-lg">
        <h1 className="text-3xl font-bold">Sign up</h1>
        <FormSignup/>
        <p className="text-base font-medium">
            Already have an account?
          <Link href={"/auth/login"} className="text-dark underline">
            Sign in
          </Link>
        </p>
        <a href="#">
          <p className="flex gap-2 items-center justify-center py-1 rounded-3xl bg-grey text-white hover:bg-dark transition duration-500">
            Sign in with Google <FcGoogle />
          </p>
        </a>
      </div>
    </div>
  );
}

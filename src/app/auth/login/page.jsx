import Link from "next/link";
import FormLogin from "@/components/form/FormLogin";
import { FcGoogle } from "react-icons/fc";
export default function Login() {
   return (
    <div className="h-[85vh] flex justify-center items-center flex-col">
      <div className="flex flex-col gap-3 container mx-auto px-5 max-w-lg">
        <h1 className="text-3xl font-bold">Login</h1>
        <FormLogin/>
        <p className="text-base font-medium">
          Need an account?{" "}
          <Link href={"/auth/signup"} className="text-dark underline">
            Create one
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

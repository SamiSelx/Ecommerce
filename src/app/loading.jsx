import { ClipLoader } from "react-spinners"

export default function Loading(){
    return (
        <div className="flex justify-center items-center">
            <ClipLoader className=" my-8" color="rgb(0 0 0 / 80%)" />
        </div>
    )
}
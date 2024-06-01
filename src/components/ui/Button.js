import Link from "next/link"

export default function ButtonOne({link,content}){
    return(
        <Link href={link} className="font-semibold px-8 py-3 w-fit border text-white hover:bg-white hover:text-black transition duration-700">{content}</Link>
    )
}
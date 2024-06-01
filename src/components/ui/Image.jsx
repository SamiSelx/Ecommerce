import { FaInstagram } from "react-icons/fa";

export default function Image({title,imgSrc}){
    return(
        <div className="relative social">
            <img src={imgSrc} alt="instaPic"/>
            <div className="social-hidden opacity-0 -z-10 h-full w-full absolute bg-[rgba(0,0,0,0.5)] flex flex-col items-start justify-end p-5 top-0 left-0 text-white" >
                <h2 className="mb-1">{title}</h2>
                <a href="https://www.instagram.com/" target="_blank"><FaInstagram/></a>
            </div>
        </div>
    )
}
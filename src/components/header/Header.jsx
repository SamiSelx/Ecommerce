"use client"

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import NavIcon from "../ui/NavIcon";

const links = [
  {name:"Home", url:"/"},
  {name:"Men's", url:"/men"},
  {name:"Women's", url:"/women"},
  {name:"Kid's", url:"/kid"}
]



export default function Header(){
  const path = usePathname();
  const [active, setActive] = useState(false)

  function handleActive(){
    setActive(!active)
  }

    return (
      <header className="relative h-[15vh]">

        <div className=" container p-6 mx-auto flex items-center justify-between">
          <Link href={'/'}><img src="logo.png" alt="logo" /></Link>
          <ul className={`navBar ${active && "active"}`}>
            {links.map((link,index)=>{
                const isActive = path.startsWith(link.url) && path.length == link.url.length
              return (
                <li key={index} className={isActive ? "text-[#ccc] font-[500] hover:text-[#ccc] transition-colors duration-300" : "font-[500] hover:text-[#ccc] transition-colors duration-300"}>
                <Link href={link.url}>{link.name}</Link>
              </li>
              )
            })}
            <li className="font-[500] hover:text-[#ccc] transition-all duration-300 ">
              <p>Pages</p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
          </ul>
          <NavIcon isActive = {active} handleActive = {handleActive}/>
        </div>
      </header>
    );
}

{/* <li className="text-[#ccc] font-[500] hover:text-[#ccc] transition-colors duration-300">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-[#ccc] transition-all duration-300">
              <Link href={"/men"}>Men's</Link>
            </li>
            <li className="hover:text-[#ccc] transition-all duration-300">
              <Link href={"/women"}>Women's</Link>
            </li>
            <li className="hover:text-[#ccc] transition-all duration-300 ">
              <Link href={"/kid"}>Kid's</Link>
            </li> */}
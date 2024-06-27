"use client"

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import NavIcon from "../ui/NavIcon";
import { CgProfile } from "react-icons/cg";


// Navigation Menu From ShadCn
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

import { useTheme } from "next-themes";
import useAuth from "@/hooks/useAuth";
import useLogout from "@/hooks/useLogout";

const links = [
  {name:"Home", url:"/"},
  {name:"Men's", url:"/men"},
  {name:"Women's", url:"/women"},
  {name:"Kid's", url:"/kid"}
]



export default function Header(){
  const path = usePathname();
  const [open, setOpen] = useState(false)
  const {setTheme} = useTheme();
  const {user} = useAuth()
  const logout = useLogout()

  function handleActive(){
    setOpen((prev)=>!prev)
  }
 
    return (
      <header className="relative h-[15vh]">
        <div className=" container p-6 h-full mx-auto flex items-center justify-between">
          <Link href={"/"} className="text-4xl font-bold text-dark">
            Samx
          </Link>
          <ul
            className={`navBar ${
              open && "active"
            } flex items-center justify-between flex-1 ml-[25%]`}
          >
            <div className="flex items-center gap-8">
              {links.map((link, index) => {
                const isActive =
                  path.startsWith(link.url) && path.length == link.url.length;
                return (
                  <li
                    key={index}
                    className={
                      isActive
                        ? "text-[#ccc] font-[500] hover:text-[#ccc] transition-colors duration-300"
                        : "font-[500] hover:text-[#ccc] transition-colors duration-300"
                    }
                    onClick={() => setOpen(false)}
                  >
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                );
              })}
              <li className="font-[500] hover:text-[#ccc] transition-all duration-200 ">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul>
                          <li>
                            <Link href="/about" legacyBehavior passHref>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                About Us
                              </NavigationMenuLink>
                            </Link>
                          </li>
                          <li>
                            <Link href="/products" legacyBehavior passHref>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                Products
                              </NavigationMenuLink>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/productDetails"
                              legacyBehavior
                              passHref
                            >
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                Single Product
                              </NavigationMenuLink>
                            </Link>
                          </li>
                          <li>
                            <Link href="/contact" legacyBehavior passHref>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                Contact Us
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>
            </div>
            {/* <li className="font-[500] hover:text-[#ccc] transition-all duration-200 ">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul>
                        {Array.from({ length: 4 }).map((_, index) => (
                          <li key={index}>
                            <Link href={`/features/${index + 1}`}>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                {`Features Page ${index + 1}`}
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li> */}
            {/* <li className="font-[500] hover:text-[#ccc] transition-all duration-200 ">
              <Link href={"explore"}>Explore</Link>
            </li> */}
            {user ? (
              <div className="text-center flex items-center gap-8">
                <Link
                  href={"/profile"}
                  className="text-2xl cursor-pointer hover:text-[#ccc] transition-all duration-200 w-12 h-12 border border-black rounded-full"
                >
                  {user.user.profileImage ? <img src={user.user.profileImage} alt="profile-pic" className="h-full w-full rounded-full"/>:  <CgProfile />}
                </Link>
                <div>
                  Welcome {user.user.firstName + ' ' + user.user.lastName}
                  <li
                    className="font-[500] hover:text-[#ccc] transition-all duration-200 cursor-pointer"
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                  >
                    LogOut
                  </li>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-8">
                <li
                  className="font-[500] hover:text-[#ccc] transition-all duration-200 "
                  onClick={() => setOpen(false)}
                >
                  <Link href={"/auth/login"}>Login</Link>
                </li>
                <li
                  className="font-[500] hover:text-[#ccc] transition-all duration-200 "
                  onClick={() => setOpen(false)}
                >
                  <Link href={"/auth/signup"}>Sign Up</Link>
                </li>
              </div>
            )}
          </ul>
          <NavIcon open={open} handleActive={handleActive} />
          {/*           
          <button onClick={()=>setTheme("light")}>light</button> 
          <button onClick={()=>setTheme("dark")}>Dark</button>                      */}
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
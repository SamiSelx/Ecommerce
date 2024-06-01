import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 mt-5 bg-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10 border-b border-b-[rgb(255 255 255 / 50%]">
            <div>
            <img src="/img/white-logo.png" alt="logo" />
            <ul className="mt-6 flex flex-col gap-2">
                <li className="w-fit cursor-pointer text-white hover:text-grey tranistion duration-300 text-sm">
                16501 Collins Ave,Sunny Isles Beach, Fl 33160, United States
                </li>
                <li className=" w-fit cursor-pointer text-white hover:text-grey tranistion duration-300 text-sm">
                hexashop@company.com
                </li>
                <li className="w-fit cursor-pointer text-white hover:text-grey tranistion duration-300 text-sm">
                010-020-0340
                </li>
            </ul>
            </div>
            <div>
            <h1 className="font-bold text-2xl text-white">Shopping & Categories</h1>
            <ul className="mt-6 flex flex-col gap-2">
                <li className="cursor-pointer text-white hover:text-grey tranistion duration-300 text-sm">
                Men's Shopping
                </li>
                <li className="cursor-pointer text-white hover:text-grey tranistion duration-300 text-sm">
                Women's Shopping
                </li>
                <li className="cursor-pointer text-white hover:text-grey tranistion duration-300 text-sm">
                Kid's Shopping
                </li>
            </ul>
            </div>
            <div>
            <h1 className="font-bold text-2xl text-white">Useful Links</h1>
            <ul className="mt-6 flex flex-col gap-2">
                <li className="w-fit cursor-pointer text-white hover:text-grey tranistion duration-300 text-sm">
                <Link href={"/"}>HomePage</Link>
                </li>
                <li className="w-fit cursor-pointer text-white hover:text-grey tranistion duration-300 text-sm">
                
                <Link href={"/about"}>About Us</Link>
                </li>
                <li className="w-fit cursor-pointer text-white hover:text-grey tranistion duration-300 text-sm">
                <Link href={"/help"}>Help</Link>
                </li>
                <li className="w-fit cursor-pointer text-white hover:text-grey tranistion duration-300 text-sm">
                <Link href={"/contact"}>Contact Us</Link>
                </li>
            </ul>
            </div>
            <div>
            <h1 className="font-bold text-2xl text-white">Help & Information</h1>
            <ul className="mt-6 flex flex-col gap-2">
                <li className="w-fit cursor-pointer text-white hover:text-grey tranistion duration-300 text-sm">
                Help
                </li>
                <li className="w-fit cursor-pointer text-white hover:text-grey tranistion duration-300 text-sm">
                FAQ's
                </li>
                <li className="w-fit cursor-pointer text-white hover:text-grey tranistion duration-300 text-sm">
                Shipping
                </li>
                <li className="w-fit cursor-pointer text-white hover:text-grey tranistion duration-300 text-sm">
                Tracking ID
                </li>
            </ul>
            </div>
        </div>
        <div className="text-white flex items-center justify-center flex-col pt-8">
            <p className="text-center mb-2">Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved</p>
            <p>Design: <a href="#" className="text-[#ccffff] hover:text-[#c66] transition duration-300">TemplateMo</a></p>
            <div className="flex items-center text-[#ccffff] mt-5 w-[200px]">
                <FaFacebookF className="basis-1/4 text-[1.5em] hover:text-[#c66] cursor-pointer transition duration-300"/>
                <FaXTwitter className="basis-1/4 text-[1.5em] hover:text-[#c66] cursor-pointer transition duration-300" />
                <FaLinkedinIn className="basis-1/4 text-[1.5em] hover:text-[#c66] cursor-pointer transition duration-300"/>
                <FaBehance className="basis-1/4 text-[1.5em] hover:text-[#c66] cursor-pointer transition duration-300"/>
            </div>
        </div>
      </div>
    </footer>
  );
}

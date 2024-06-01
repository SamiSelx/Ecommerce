import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";
import ButtonOne from "../ui/Button.js";

export default function ExploreProduct(){
  return (
    <section className="container flex-wrap md:flex-nowrap flex justify-between gap-5 pt-8 border-b-4 border-dotted pb-8">
      <div className="basis-full md:basis-1/2 flex flex-col gap-8">
        <h1 className="font-extrabold text-4xl text-dark">Explore Our Products</h1>
        <p className="text-grey">
          You are allowed to use this HexaShop HTML CSS template. You can feel
          free to modify or edit this layout. You can convert this template as
          any kind of ecommerce CMS theme as you wish.
        </p>
        <div className="flex items-center gap-5 text-dark italic text-md">
          <FaQuoteLeft className="text-3xl"/>
          <p className="">
            You are not allowed to redistribute this template ZIP file on any
            other website.
          </p>
        </div>
        <p className="text-grey">
          There are 5 pages included in this HexaShop Template and we are
          providing it to you for absolutely free of charge at our TemplateMo
          website. There are web development costs for us.
        </p>
        <p className="text-grey">
          If this template is beneficial for your website or business, please
          kindly <Link href="/support" className="text-blue-500">support us</Link> a little via PayPal. Please also tell
          your friends about our great website. Thank you
        </p>
        <Link href={"/explore"} className="font-semibold  px-6 py-2 w-fit border border-dark text-dark hover:bg-dark hover:text-white transition duration-700">Discover More</Link>
      </div>

    <div className="grid grid-cols-1 flex-1 md:flex-grow-0 basis-1/2 lg:grid-cols-2 gap-8">
        <div className="bg-[#f7f7f7] grid place-content-center text-center gap-2">
            <h1 className="font-bold text-2xl">Leather Bags</h1>
            <p className="text-grey">Latest Collection</p>
        </div>
        <div>
            <img className="w-full h-full" src="/img/explore-image-01.jpg" />
        </div>
        <div>
            <img className="w-full h-full" src="/img/explore-image-02.jpg" />
        </div>
        <div className="bg-[#f7f7f7] grid place-content-center text-center gap-1.5">
            <h1 className="font-bold text-2xl">Different Types</h1>
            <p className="text-grey">Over 304 Products</p>
        </div>
        
    </div>

    </section>
  );
}
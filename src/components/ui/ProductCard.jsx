import { IoStarSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function ProductCard({ product }) {

  return (
    <div className="w-4/5">
      <div className="relative card-image" >
        <img className="w-full" src={product.img} />
        <div className="card-image-display absolute flex items-center gap-2 justify-center bottom-0 -z-10 opacity-0 w-full text-black">
            {/*Icons */}
            <div className="p-5 bg-[#e6e6e6] font-semibold text-xl cursor-pointer"><FaEye/></div>
            <div className="p-5 bg-[#e6e6e6] font-semibold text-xl cursor-pointer"><IoStarSharp/></div>
            <div className="p-5 bg-[#e6e6e6] font-semibold text-xl cursor-pointer"><FaCartShopping/></div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-2 mt-4 font-semibold text-2xl">
        <h1 className="font-bold">{product.title}</h1>
        <div className="flex items-center text-black">
          {Array.from({ length: product.stars }).map((_, index) => (
            <>
              <IoStarSharp />
            </>
          ))}
        </div>
      </div>
      <span className="text-grey font-semibold">{product.price}</span>
    </div>
  );
}

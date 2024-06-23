"use client"

export default function NavIcon({open, handleActive}){
    console.log('inside nav',open);
    return (
        <div onClick={handleActive} className="group h-[26px] w-[20px] flex flex-col items-end gap-1 justify-between cursor-pointer nav-icon"> {/*md:hidden */}
            <span className="block h-[2px] mb-[4px] w-full bg-dark"></span>
            <span className= {`${open ? "w-full" : "w-[70%]"} block h-[2px] w-[70%] mb-[4px]  bg-dark group-hover:w-[100%] transition-width duration-300`}></span>
            <span className={`${open ? "w-full" : "w-[40%]"} block h-[2px] w-[70%] mb-[4px]  bg-dark group-hover:w-[100%] transition-width duration-300`}></span>
        </div>
    )
}
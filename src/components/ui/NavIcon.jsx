

export default function NavIcon({isActive, handleActive}){
    return (
        <div onClick={handleActive} className="group h-full w-[20px] flex flex-col items-end gap-1 justify-between cursor-pointer md:hidden">
            <span className="block h-[2px] mb-[4px] w-full bg-dark"></span>
            <span className= {`${isActive ? "w-[100%]" : "w-[70%]"} block h-[2px] w-[70%] mb-[4px]  bg-dark group-hover:w-[100%] transition-width duration-300`}></span>
            <span className={`${isActive ? "w-[100%]" : "w-[40%]"} block h-[2px] w-[70%] mb-[4px]  bg-dark group-hover:w-[100%] transition-width duration-300`}></span>
        </div>
    )
}
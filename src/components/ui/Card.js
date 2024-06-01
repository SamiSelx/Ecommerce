import ButtonOne from "./Button";

export default function Card({title,desc,style}){
  
    return (
      <div className={`relative flex items-center justify-center flex-col text-white bg-center bg-cover bg-no-repeat ${style} card`}>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-md">{desc}</p>
        <div className="card-hidden text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000000e6] flex items-center justify-around flex-col p-5 w-4/5 h-4/5">
          <h2 className="font-semibold text-xl">{title}</h2>
          <p className="text-[0.9em] font-medium italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
          <ButtonOne link={"/" + title.toLowerCase()} content="Discover More"/>
        </div>
      </div>
    );
}
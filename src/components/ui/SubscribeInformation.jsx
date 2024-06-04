
export default function SubscribeInformation({title,desc,key}){
 
    return (
        <div className="text-center md:text-start">
            <h1 className="text-black font-semibold">{title}:</h1>
            <p className="text-grey">{desc}</p>
        </div>
    )
}
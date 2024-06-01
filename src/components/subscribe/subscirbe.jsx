import { BsFillSendFill } from "react-icons/bs";
import SubscribeInformation from '@/components/ui/SubscribeInformation'

const information = [
    {title:"Store Location",desc:"Sunny Isles Beach, FL 33160, United States"},
    {title:"Work Hours",desc:"07:30 AM - 9:30 PM Daily"},
    {title:"Phone",desc:"010-020-0340"},
    {title:"Email",desc:"info@company.com"},
    {title:"Office Location",desc:"North Miami Beach"},
    {title:"Social Media",desc:"Facebook,Instagram, Behance,Linkedin"},
]

const styleInput =
  "border border-dark py-2 px-5 focus:outline-dark placeholder:text-grey placeholder:italic placeholder:font-medium placeholder:text-md w-full";

export default function Subscribe(){
    return (
      <section className="container mx-auto flex flex-col lg:flex-row gap-5 mt-10 py-8 border-b-4 border-dotted">
        <div className="flex flex-col justify-between flex-1 basis-3/4">
          <h1 className="font-extrabold text-4xl text-dark">
            By Subscribing To Our Newsletter You Can Get 30% Off
          </h1>
          <p className="text-grey italic">
            Details to details is what makes Hexashop different from the other
            themes.
          </p>
          <form className="flex items-center flex-col md:flex-row gap-4 overflow-hidden">
            <input
              className={styleInput}
              type="text"
              placeholder="Your Name"
              name="name"
            />
            <input
              className={styleInput}
              type="email"
              placeholder="Your Email Adresse"
              name="email"
            />
            <button
              type="submit"
              className="bg-dark border border-dark hover:bg-white hover:text-dark transition duration-700 text-white text-lg flex items-center justify-center h-full w-full md:w-[100px]"
            >
              <BsFillSendFill className="w-[42px]" />
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {information.map((info) => (
            <SubscribeInformation title={info.title} desc={info.desc} />
          ))}
        </div>
      </section>
    );
}
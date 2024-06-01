import Image from '@/components/ui/Image'
const imageInstagrame = [
  { title: "Fashion", imgSrc: "/img/instagram-01.jpg" },
  { title: "New", imgSrc: "/img/instagram-02.jpg" },
  { title: "Brand", imgSrc: "/img/instagram-03.jpg" },
  { title: "Makeup", imgSrc: "/img/instagram-04.jpg" },
  { title: "Leather", imgSrc: "/img/instagram-05.jpg" },
  { title: "Bag", imgSrc: "/img/instagram-06.jpg" },
];

export default function SocialMedia(){
    return(
        <section className='container mx-auto py-8 border-b-4 border-dotted'>
            <div>
            <h1 className='font-extrabold text-4xl text-dark'>Social Media</h1>
            <p className='text-md mb-8 font-meduim text-grey italic mt-2'>Details to details is what makes Hexashop different from the other themes.</p>
            </div>
            <div className='flex items-center mt-8 flex-wrap justify-center sm:justify-start'>
                {imageInstagrame.map((inst,index)=> (
                    
                    <div key={index}><Image title={inst.title} imgSrc ={inst.imgSrc} /></div>
                ))}
            </div>
        </section>
    )
}
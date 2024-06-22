import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import ProductCard from "../ui/ProductCard";

export default function Product({ title, desc, products }) {  //array of product has stars,images,..ect
  return (
    <section className=" py-5 my-5  mx-auto px-[15px] border-b-4 border-dotted w-screen">
      <div className="container">
        <h1 className="font-extrabold text-4xl text-dark mb-3">
          {title} Latest
        </h1>
        <p className="text-md mb-8 font-meduim text-grey">{desc}</p>
      </div>

      {/*scroll + cards */}

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="container mx-auto px-4"
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3 grid place-items-center"
            >
              {/* <div className="p-1">
                <div className="bg-black">
                    1
                </div>
              </div> */}
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

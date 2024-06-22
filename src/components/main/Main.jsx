import Card from "../ui/Card"
import ButtonOne from "../ui/Button"

export default function Main(){
    
    return(
        <>
            <main className="border-b-4 border-t-4 border-dotted min-h-[85vh] p-5 flex gap-5 flex-col md:flex-row" >
            <div className="flex flex-col gap-5 justify-center basis-1/2 px-8 bg-[url('/left-banner-image.jpg')] bg-center bg-cover bg-no-repeat text-white">
                <h1 className="text-5xl font-semibold ">We Are Hexashop</h1>
                <p>Awesome, clean & creative HTML5 Template</p>
                <ButtonOne link={"/purchase"} content={"Purchase Now!"}/>
            </div>
            <div className="grid grid-cols-1 flex-1 gap-5 basis-1/2 lg:grid-cols-2">
               
                <Card title="Women" desc="Best Clothes For Women" style="bg-[url('/img/baner-right-image-01.jpg')]" />
                <Card title="Men" desc="Best Clothes For Men" style="bg-[url('/img/baner-right-image-02.jpg')]" />
                <Card title="Kids" desc="Best Clothes For Kids" style="bg-[url('/img/baner-right-image-03.jpg')]" />
                <Card title="Accessories" desc="Best Trend Accessories"  style="bg-[url('/img/baner-right-image-04.jpg')]"/>
            </div>
        </main>

        </>

    )
}
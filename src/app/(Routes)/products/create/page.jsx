"use client"
import axios from "axios"
import { useState } from "react"

export default function CreateProduct(){
    const [productInfo,setProductInfo] = useState({
        title:"",
        price:0,
        stars:0,
        type:"",
        image:null
    })

    const [products,setProducts] = useState([])
    const [show,setShow] = useState(false)
    const [result,setResult] = useState({})

    function handleImage(e){
        setProductInfo({...productInfo,image:e.target.files[0]})
    }

    async function  handleCreate(e){
        e.preventDefault()
        if(!productInfo.image || !productInfo.image.type.startsWith('image/')) return
        // let reader = new FileReader()
        // reader.readAsDataURL(productInfo.image)
        // reader.onload = ()=>{
        //     console.log(reader.result);
        // }
        const formData = new FormData()
        console.log(productInfo.image);
        formData.append('title',productInfo.title)
        formData.append('price',productInfo.price)
        formData.append('stars',productInfo.stars)
        formData.append('type',productInfo.type)
        formData.append('image',productInfo.image)
        try {
            const result = await axios.post('http://localhost:5000/api/products',formData,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(result);
            setResult(result.data.data)
            // let urlBase64 = result.data.data.buffer.data.toString('base64')
            // setResult({...result.data.data,url:`data:${result.data.data.mimetype};base64,${urlBase64}`})
        } catch (error) {
            console.log(error);
        }
        
    }

    async function handleDelete(){
        try {
            const result = await axios.delete('http://localhost:5000/api/products')
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    async function showProduct(){
        setShow(!show)
        try {
            const result = await axios.get('http://localhost:5000/api/products')
            console.log(result.data);
            setProducts(result.data)
        } catch (error) {
            console.log(result);
        }

    }

    function handleType(e){
        setProductInfo({...productInfo,type:e.target.checked ? e.target.id : ""})
    }

    return(
        <main className="min-h-[85vh] flex flex-col items-center justify-center container">
            <form onSubmit={(e)=>handleCreate(e)}>
                <input type="text"  placeholder="title" onChange={(e)=>setProductInfo({...productInfo,title:e.target.value})}/>
                <input type="text"  placeholder="price" onChange={(e)=>setProductInfo({...productInfo,price:e.target.value})}/>
                <input type="text"  placeholder="stars" onChange={(e)=>setProductInfo({...productInfo,stars:e.target.value})}/>
               <label htmlFor="men">Men</label><input type="radio" name="type"  id="men" checked={productInfo.type == 'men' ? true : false} onChange={(e)=>handleType(e)} />
               <label htmlFor="women">wome</label><input type="radio" name="type"  id="women" checked={productInfo.type == 'women' ? true : false} onChange={(e)=>handleType(e)}  />
               <label htmlFor="kid">Kid</label><input type="radio" name="type" id="kid"  checked={productInfo.type == 'kid' ? true : false} onChange={(e)=>handleType(e)} />
                <input type="file"  onChange={(e)=>handleImage(e)}/>
                <input type="submit" value="Create"/>
            </form>
            {/* {image !=null ? <img src={`data:image/jpeg;base64,${image}`} /> : null} */}
            {/* <img src={urlImg}/> */}
            <button onClick={handleDelete}>Delete All Products</button>
            <div>
                <h3>Title : </h3> <div>{result.title}</div>
                <h3>price : </h3> <div>{result.price}</div>
                <h3>stars : </h3> <div>{result.stars}</div>
                <div className="w-[200px] h-[200px]">
                    <img className="w-full rounded-full" src={result.image?.url} alt="" />
                </div>
            </div>
            <button onClick={showProduct}>Show All Products</button>
            <div className="grid grid-cols-2">
                {show && products.map((product)=>(
                    <div className="grid place-items-center border m-4 shadow-md p-4" key={product._id}>
                        <h1>{product.title}</h1>
                        <span>Price: {product.price}$</span>
                        <span>Stars : {product.stars}</span>
                        <div className="w-[300px] h-[300px]">
                            <img src={product.image.url} className="w-full h-full" alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

// img:"/img/men-03.jpg",
//       title:"Classic Spring",
//       stars: 5,
//       price:"$120.00"

import {products,menProduct,womenProdut,kidProduct} from '@/app/productData'

export async function GET(){
    return Response.json(products)
}

export async function POST(request){
    let newProduct = await request.json();
    products.push(newProduct)

    // Add product men | women | kid
    let type = newProduct.img.slice(5)

    type.startsWith("men")
      ? menProduct.push(newProduct)
      : type.startsWith("women")
      ? womenProdut.push(newProduct)
      : kidProduct.push(newProduct);

    return new Response(JSON.stringify(products,{
        headers:{
            "content-type":"application/json"
        },
        status:201
    }))
}

import {products,menProduct,womenProdut,kidProduct} from '@/app/productData'

export async function GET(){
    return Response.json(products)
}

export async function POST(request){
    let newProduct = await request.json();
    products.push(newProduct)
    // switch case for add product on men | women | kid
    return new Response(JSON.stringify(products,{
        headers:{
            "content-type":"application/json"
        },
        status:201
    }))
}
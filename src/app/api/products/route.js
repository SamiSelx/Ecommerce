
import {products} from '@/app/productData'

export async function GET(){
    return Response.json(products)
}
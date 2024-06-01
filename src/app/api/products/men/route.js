
import {menProduct} from '@/app/productData'

export async function GET(){
    return Response.json(menProduct)
}
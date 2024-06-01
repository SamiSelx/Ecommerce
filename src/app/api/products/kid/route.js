
import {kidProduct} from '@/app/productData'

export async function GET(){
    return Response.json(kidProduct)
}
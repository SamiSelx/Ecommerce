
import {womenProdut} from '@/app/productData'

export async function GET(){
    return Response.json(womenProdut)
}
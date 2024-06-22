import { womenProdut } from "@/utils/productData";

export async function GET() {
  return Response.json(womenProdut);
}

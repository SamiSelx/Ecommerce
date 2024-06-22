import { kidProduct } from "@/utils/productData";

export async function GET() {
  return Response.json(kidProduct);
}

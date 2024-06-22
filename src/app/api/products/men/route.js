import { menProduct } from "@/utils/productData";

export async function GET() {
  return Response.json(menProduct);
}

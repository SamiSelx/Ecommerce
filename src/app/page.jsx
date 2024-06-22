import Main from "@/components/main/Main";
import Product from "@/components/product/Product";
import ExploreProduct from "@/components/exploreProduct/ExploreProduct";
import SocialMedia from "@/components/socialMedia/SocialMedia";
import Subscribe from "@/components/subscribe/subscirbe";
import "dotenv/config";
import {
  products,
  menProduct,
  kidProduct,
  womenProdut,
} from "../utils/productData";
const productType = ["Men", "Women", "Kid"];
  
export default async function Home() {

  return (
    <>
      <Main />
      {productType.map(async (p) => {
        // const response = await fetch(
        //   `${process.env.URL_HST}/api/products/${p.toLowerCase()}`
        // );
        // const products = await response.json();
        return (
          <Product
            title={p + "'s"}
            desc={
              "Details to details is what makes Hexashop different from the other themes."
            }
            products={
              p == "Men" ? menProduct : p == "Women" ? womenProdut : kidProduct
            }
          />
        );
      })}
      <ExploreProduct />
      <SocialMedia />
      <Subscribe />
    </>
  );
}

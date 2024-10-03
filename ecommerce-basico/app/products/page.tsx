import { Product } from "../interfaces";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  console.log(products);

  return (
    <>
      <h1 className="font-bold text-5xl">PRODUCTS PAGE</h1>
    </>
  );
}

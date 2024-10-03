import Card from "../components/card";
import { Product } from "../interfaces";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  console.log(products);

  return (
    <>
      <h1 className="font-bold text-5xl my-5">PRODUCTS PAGE</h1>
      <div className="flex flex-row max-w-2/3 flex-wrap gap-3 px-20">
        {products.map((product) => {
          return <Card product={product} />;
        })}
      </div>
    </>
  );
}

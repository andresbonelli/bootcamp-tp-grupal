import Card from "../components/card";
import { Product } from "../interfaces";
import Card from "../components/card";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  console.log(products);

  return (
    <>
      <h1 className="font-bold text-5xl text-center my-8">PRODUCTS PAGE</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

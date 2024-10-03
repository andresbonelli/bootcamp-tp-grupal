import { Product } from "@/app/interfaces";

export default async function ProductDetails({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: Product = await res.json();

  return (
    <>
      <h1 className="font-bold text-5xl">{product.title}</h1>
    </>
  );
}

import { Product } from "@/app/interfaces";
import ProductDetailsActions from "@/app/components/product_details_actions";
import Image from "next/image";

export default async function ProductDetails({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: Product = await res.json();

  return (
    <div className="mt-10 max-w-[1440px]">
      <h1 className="font-bold text-5xl">{product.title}</h1>
      <Image src={product.image} alt={product.title} height={200} width={200} />
      <ProductDetailsActions product={product} />
    </div>
  );
}

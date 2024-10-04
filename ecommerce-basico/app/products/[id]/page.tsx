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
    <div className="max-w-[1440px] mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start bg-white border border-black rounded-lg shadow-lg">
        <div className="flex-shrink-0 p-4">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="p-6 flex-1 flex justify-center items-center h-full">
          <div>
            <h1 className="font-bold text-4xl text-black mb-4 text-center">{product.title}</h1>
            <p className="text-gray-700 mb-4 text-center">{product.description}</p>
            <div className="flex justify-center">
              <span className="text-center text-2xl font-semibold text-black mt-2">
                ${product.price}
              </span>
            </div>
            <div className="flex justify-center mt-2">
              <ProductDetailsActions product={product}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

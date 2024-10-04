"use client";

import Image from "next/image";
import { useCart } from "@/app/CartContextProvider";
import { ProductFromCart } from "@/app/interfaces";

export default function ProductsInCart() {
  const { cart, removeFromCart, addToCart, substractOneFromCart } = useCart();

  return (
    <div className="flex flex-col justify-start items-center gap-5 ">
      {cart.map((product: ProductFromCart) => {
        return (
          <div
            key={product.id}
            className="w-full h-44 flex flex-row justify-between items-center shadow-lg gap-2 p-3  bg-gray-50"
          >
            <Image
              className="justify-self-center "
              src={product.image}
              alt={product.title}
              height={100}
              width={100}
            />
            <div className="flex flex-col flex-auto items-start w-2/3 p-2 ">
              <h1 className="font-bold">{product.title}</h1>
              <div className="overflow-hidden max-h-40">
                <p className="text-xs ">{product.description}</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center gap-3">
              <button
                onClick={() => substractOneFromCart(product.id)}
                className="text-3xl"
              >
                -
              </button>
              <p className="font-bold text-xl">{product.quantity}</p>
              <button
                onClick={() => addToCart({ ...product, quantity: 1 })}
                className="text-3xl"
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

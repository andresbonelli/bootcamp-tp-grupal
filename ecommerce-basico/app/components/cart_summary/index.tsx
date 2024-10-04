"use client";

import { useCart } from "@/app/CartContextProvider";

export default function CartSummary() {
  const { cart, totalItems, totalPrice } = useCart();
  return (
    <>
      <h1 className="text-center text-xl font-bold mb-5">
        Precio total: ${totalPrice}
      </h1>
      <button className="rounded-md bg-gray-500 text-white hover:bg-gray-700 p-2 ">
        Terminar compra
      </button>
    </>
  );
}

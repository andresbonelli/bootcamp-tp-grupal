"use client";

import { useCart } from "@/app/CartContextProvider";

export default function CartSummary() {
  const { cart, totalItems, totalPrice } = useCart();
  return (
    <>
      <h1 className="text-center text-xl font-bold mb-5">
        Precio total: ${totalPrice}
      </h1>
      <button className="rounded-md ">Terminar compra</button>
    </>
  );
}

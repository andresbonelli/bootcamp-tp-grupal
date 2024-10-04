"use client";

import { useCart } from "@/app/CartContextProvider";

export default function CartSummary() {
  const { cart, totalItems, totalPrice, removeFromCart } = useCart();
  return (
    <>
      <h1 className="text-center text-xl font-bold mb-5">
        Precio total: ${totalPrice}
      </h1>
      <button className="rounded-mdw-full sm:w-1/3 bg-black text-white rounded p-2 border border-black hover:bg-white hover:text-black transition-colors">Terminar compra</button>
      <button className="rounded-mdw-full sm:w-1/3 bg-black text-white rounded p-2 border border-black hover:bg-white hover:text-black transition-colors" onClick={removeFromCart}>Borrar Carrito</button>
    </>
  );
}

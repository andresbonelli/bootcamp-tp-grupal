"use client";

import { useCart } from "@/app/CartContextProvider";
import { Product } from "@/app/interfaces";

export default function ProductDetailsActions({
  product,
}: {
  product: Product;
}) {
  const { addToCart, removeFromCart, substractOneFromCart, cart, clearCart } =
    useCart();

  return (
    <div className="flex flex-col p-5 justify-between items-center w-64">
      <button
        className=" bg-blue-500 hover:bg-blue-800 tx-sm p-2"
        onClick={() => addToCart({ ...product, quantity: 1 })}
      >
        AGREGAR AL CARRITO
      </button>
      <button
        className="w-full bg-blue-500 hover:bg-blue-800 tx-sm p-2"
        onClick={() => removeFromCart(product.id)}
      >
        ELIMINAR DEL CARRITO
      </button>
      <button
        type="button"
        className="w-full bg-blue-500 hover:bg-blue-800 tx-sm p-2 border border-red"
        onClick={() => substractOneFromCart(product.id)}
      >
        -
      </button>
      <button
        className="w-full bg-blue-500 hover:bg-blue-800 tx-sm p-2"
        onClick={() => addToCart({ ...product, quantity: 1 })}
      >
        +
      </button>
      <button
        className="w-full bg-blue-500 hover:bg-blue-800 tx-sm p-2"
        onClick={() => clearCart()}
      >
        BORRAR CARRITO
      </button>
    </div>
  );
}

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
      <div className="flex flex-col sm:flex-row p-5 gap-5 justify-between items-center w-full sm:w-1/2">
        <button
          type="button"
          className="w-full sm:w-1/3 bg-black text-white rounded p-2 mt-2 border border-black hover:bg-white hover:text-black transition-colors"
          onClick={() => substractOneFromCart(product.id)}
        >
          -
        </button>
        <button
          className="w-full sm:w-1/3 bg-black text-white rounded p-2 mt-2 border border-black hover:bg-white hover:text-black transition-colors"
          onClick={() => addToCart({ ...product, quantity: 1 })}
        >
          +
        </button>
        <button
          className="w-full sm:w-1/3 bg-black text-white rounded p-2 mt-2 border border-black hover:bg-white hover:text-black transition-colors"
          onClick={() => clearCart()}
        >
          BORRAR CARRITO
        </button>
      </div>
    );    
}

"use client";

import Image from "next/image";
import { Product } from "../../interfaces";
import React from "react";
import { useCart } from "@/app/CartContextProvider";
import Link from "next/link";

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <Link key={product.id} href={`/products/${product.id}`}>
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-80 h-96 mx-auto border border-black hover:-translate-y-2">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover border-b border-black"
          width={200}
          height={200}
        />
        <div className="p-4">
          <h2 className="font-bold text-lg text-black">{product.title}</h2>
          <p className="text-black mt-4 font-bold">${product.price}</p>
          <button
            onClick={() => addToCart({ ...product, quantity: 1 })}
            className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;

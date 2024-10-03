import Image from 'next/image';
import { Product } from '../../interfaces';
import React from 'react';

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto border border-black">
      <Image src={product.image} alt={product.title} className="w-full h-48 object-cover border-b border-black" width={300} height={200}/>
      <div className="p-4">
        <h2 className="font-bold text-lg text-black">{product.title}</h2>
        <p className="text-black mt-4 font-bold">${product.price}</p>
        <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default Card;
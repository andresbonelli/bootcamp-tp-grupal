"use client";

import { CartProvider } from "./CartContextProvider";
import "./globals.css";
import Navbar from "./components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: Navbar fijo
  // Componente listar productos (server )
  // componente card tiene que tener boton add to cart
  // DONE ruta dinamica product[id] -> (client) render de los detalles
  // DONE Contexto global: CartProvider -> Products[], addToCart, removeFromCart(?),
  // DONE totalItems para mostrar en el navbar
  // Pagina de cart????
  return (
    <html lang="en">
      <body className="w-screen h-screen flex flex-col justify-start items-center ">
        <CartProvider>
          <Navbar />

          {children}
        </CartProvider>
      </body>
    </html>
  );
}

import { useCart } from "@/app/CartContextProvider";
import Link from "next/link";

export default function Navbar() {
  const { totalItems } = useCart();
  return (
    <nav className=" h-20 w-full flex flex-row justify-center items-center py-5 px-20 bg-pink-400 gap-10">
      <Link href="/" className="text-3xl">
        HOME
      </Link>
      <Link href="/products">Products</Link>
      <h1 className="text-xl">productos en el carrito:{totalItems}</h1>
    </nav>
  );
}

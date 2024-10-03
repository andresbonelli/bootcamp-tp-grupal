import { useCart } from "@/app/CartContextProvider";

export default function Navbar() {
  const { totalItems } = useCart();
  return (
    <nav className="fixed top-0 h-60 w-full flex flex-row justify-between py-5 px-20 bg-pink-400">
      <h1>NAVBAR productos en el carrito:{totalItems}</h1>
    </nav>
  );
}

import { useCart } from "@/app/CartContextProvider";
import Link from "next/link";
import CartIcon from "../icons/Cart";

const links = [
  {
    href: "/",
    name: "HOME",
  },
  {
    href: "/products",
    name: "Products",
  },
];

export default function Navbar() {
  const { totalItems } = useCart();
  return (
    <nav className=" h-20 w-full flex flex-row justify-center place-items-center py-5 px-20 bg-gray-400 gap-10">
      {links.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.href}
            className="text-xl font-bold hover:scale-105"
          >
            {item.name}
          </Link>
        );
      })}
      <Link href="/" className="relative">
        <CartIcon width={30} height={30} fill="black" />
        {totalItems > 0 && (
          <p className="absolute -top-2 -right-2 flex flex-col justify-center items-center rounded-full h-5 w-5 bg-red-500 text-center text-white">
            {totalItems}
          </p>
        )}
      </Link>
    </nav>
  );
}

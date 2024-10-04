import CartSummary from "../components/cart_summary";
import ProductsInCart from "../components/products_in_cart";

export default function Cart() {
  return (
    <div className="w-screen sm:p-20 p-3 flex sm:flex-row flex-col justify-between items-start">
      <div className="sm:w-1/2 w-screen flex flex-col justify-start items-center sm:gap-5">
        <h1 className="text-center text-xl font-bold sm:mb-5 w-full">
          Resumen:
        </h1>
        <CartSummary />
      </div>
      <div className="sm:w-1/2 ">
        <h1 className="text-center text-xl font-bold my-8">
          Productos del carrito
        </h1>
        <ProductsInCart />
      </div>
    </div>
  );
}

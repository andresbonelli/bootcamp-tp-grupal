import CartSummary from "../components/cart_summary";
import ProductsInCart from "../components/products_in_cart";

export default function Cart() {
  return (
    <div className="w-screen sm:p-20 p-3 flex sm:flex-row flex-col justify-between items-start">
      <div className="sm:w-1/2 ">
        <h1 className="text-center text-xl font-bold mb-5">
          Productos del carrito
        </h1>
        <ProductsInCart />
      </div>
      <div className="sm:w-1/2 flex flex-col justify-start items-center gap-5">
        <h1 className="text-center text-xl font-bold mb-5">Resumen:</h1>
        <CartSummary />
      </div>
    </div>
  );
}

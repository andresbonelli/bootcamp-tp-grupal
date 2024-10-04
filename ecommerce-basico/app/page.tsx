import Image from "next/image";
import portada from "../public/portada.webp";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="font-bold text-5xl mb-10">Ecommerce</h1>
      <Image width={800} src={portada} alt="portada" className="shadow-xl" />
    </div>
  );
}

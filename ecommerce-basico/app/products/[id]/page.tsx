export default function ProductDetails({ params }: { params: { id: number } }) {
  const { id } = params;
  return (
    <>
      <h1 className="font-bold text-5xl">PRODUCT ID {id}</h1>
    </>
  );
}

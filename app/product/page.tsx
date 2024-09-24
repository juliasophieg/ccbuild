import ProductForm from "@/components/ProductForm";

export default function Product() {
  const projectId = "12345"; // Ändra till rätt id!!

  return (
    <>
      <div className="text-red-400">
        <ProductForm projectId={projectId} />
      </div>
    </>
  );
}

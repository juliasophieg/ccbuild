import ProductForm from "@/components/ProductForm";
import { CategoryProvider } from "@/context/CategoryContext";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function Product({ params }: PageProps) {
  const { slug } = params;
  console.log("create" + slug);

  return (
    <>
      <div className="text-blue-400">
        <CategoryProvider>
          <ProductForm projectId={slug} />
        </CategoryProvider>
      </div>
    </>
  );
}

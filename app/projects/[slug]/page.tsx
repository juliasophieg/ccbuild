import { FC } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { ProductSchema, ProductFormData } from "@/schemas";

type PageProps = {
  params: {
    slug: string;
  };
};

type ProjectData = {
  _id: string;
  name: string;
  date: string;
  description: string;
};

const Page: FC<PageProps> = async ({ params }) => {
  let project: ProjectData | null = null;
  let products: ProductFormData[] = [];
  let errorMessage = "";

  // Fetch project data based on slug
  try {
    const res = await fetch(
      `http://localhost:3000/api/projects/${params.slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch project data");
    }

    project = await res.json();
  } catch (error) {
    errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
  }

  if (!project) {
    return <p>{errorMessage || "Project not found"}</p>;
  }

  // Fetch products related to the projectId (project._id)
  try {
    const resProducts = await fetch(
      `http://localhost:3000/api/products/${project._id}`,
      {
        cache: "no-store",
      }
    );

    if (!resProducts.ok) {
      throw new Error("Failed to fetch products");
    }
    console.log(resProducts);
    products = await resProducts.json();
  } catch (error) {
    errorMessage =
      error instanceof Error
        ? error.message
        : "Unknown error occurred while fetching products";
  }

  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{project.name}</h1>
        <p className="mt-2 text-lg">Date: {project.date}</p>
        <p className="mt-2">{project.description}</p>
      </div>

      <div>
        <h2 className="mb-6 text-3xl font-semibold">
          Products for this Project
        </h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product._id}
                className="flex aspect-square flex-col justify-between rounded-lg bg-white p-6 text-black shadow-lg"
              >
                {product?.generalInformation?.productName ||
                  "Product Name Not Available"}
              </div>
            ))}
          </div>
        ) : (
          <p>No products found for this project.</p>
        )}
      </div>

      <Link href={`/projects/${params.slug}/product/create`}>
        <Button variant="contained" color="primary" className="mt-8">
          Create Product
        </Button>
      </Link>
    </>
  );
};

export default Page;

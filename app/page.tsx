import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/projects");

  /* 
 const products = await getProduct();
  const projects = await getProject();

  return (
    <>
      <div className="flex w-screen flex-row">
        <div className="flex-grow bg-green-400">
          {products.map((product) => (
            <div key={product._id} className="my-2">
              <h1 className="font-bold">
                {product.generalInformation.productName}
              </h1>
              <p>
                Category: {product.generalInformation.productName} »{" "}
                {product.generalInformation.productCategory1} »{" "}
              </p>
            </div>
          ))}
        </div>

        <div className="flex-grow bg-blue-400">
          {projects.map((project) => (
            <div key={project._id} className="my-2">
              <h1 className="font-bold">{project.name}</h1>
              <p>{project.description}</p>
              <p>{project.date.toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );*/
}

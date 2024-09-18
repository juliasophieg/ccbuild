import { Button } from "@mui/material";
import { addProduct, getProduct } from "@/actions/productAction";
import Link from 'next/link';

export default async function Home() {
  const products = await getProduct();

  return (
    <>
      <div className="bg-green-400">
        {products.map((product) => (
          <div key={product._id} className="my-2">
            <h1 className="font-bold">{product.name}</h1>
            <p>
              Category: {product.category.mainCategory} »{" "}
              {product.category.subCategory} » {product.category.subSubCategory}
            </p>
            <p>
              Modell: {product.productInfo.manufacturer} (
              {product.productInfo.yearOfManufacturing})
            </p>
            <p>Condition: {product.condition}/5</p>
            
          </div>
        ))}
      </div>
      <Link href={`/product`}>
              <Button variant="contained" color="primary">
                Create Product
              </Button>
            </Link>
    </>
  );
}
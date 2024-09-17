import { Button } from "@mui/material";
import { addProduct, getProduct } from "@/actions/action";

export default async function Home() {
  const products = await getProduct();

  return (
    <>
      <div className="bg-green-400">
        {products.map((product) => (
          <div key={product._id} className="my-2">
            <h1 className="font-bold">{product.name}</h1>
            <p>{product.enabled}</p>
          </div>
        ))}

        <form action={addProduct}>
          <div>
            <label>Title</label>
            <input name="name" type="text" />
          </div>
          <div>
            <label>enabled</label>
            <textarea name="enabled" />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
}

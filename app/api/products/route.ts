import { NextRequest, NextResponse } from "next/server";
import { getProduct, addProduct } from "@/actions/action";

export async function GET(req: NextRequest) {
  const products = await getProduct();

  const productsJson = products.map((product) => {
    return product;
  });

  return NextResponse.json(productsJson);
}

export async function POST(req: NextRequest) {
  const productData = await req.json();
  console.log("HÄÄÄÄÄR" + productData);
  addProduct(productData);

  return NextResponse.json({ message: "Product added successfully" });
}

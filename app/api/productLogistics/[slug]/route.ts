import { NextResponse } from "next/server";
import { getProductVarientByProduct } from "@/actions/productLogisticAction";

export async function GET({
  params,
}: {
  params: { slug: string };
}): Promise<NextResponse> {
  const slug = params.slug;

  const products = await getProductVarientByProduct(slug);

  return NextResponse.json(products);
}

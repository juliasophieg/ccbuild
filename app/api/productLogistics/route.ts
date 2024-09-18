import { NextRequest, NextResponse } from "next/server";
import {
  getProductLogistic,
  addProductLogistic,
} from "@/actions/productLogisticAction";

export async function GET(req: NextRequest) {
  const productLogistics = await getProductLogistic();

  const productLogisticsJson = productLogistics.map((productLogistic) => {
    return productLogistic;
  });

  return NextResponse.json(productLogisticsJson);
}

export async function POST(req: NextRequest) {
  const productLogisticData = await req.json();
  addProductLogistic(productLogisticData);

  return NextResponse.json({ message: "Product logistic added successfully" });
}

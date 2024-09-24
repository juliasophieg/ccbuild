import { NextRequest, NextResponse } from "next/server";
import {
  getProductLogistic,
  addProductLogistic,
} from "@/actions/productLogisticAction";

export async function GET() {
  const productLogistics = await getProductLogistic();

  const productLogisticsJson = productLogistics.map((productLogistic) => {
    return productLogistic;
  });

  return NextResponse.json(productLogisticsJson);
}

export async function POST(req: NextRequest) {
  try {
    const productLogisticData = await req.json();

    if (productLogisticData.pickup?.availableDate) {
      productLogisticData.pickup.availableDate = new Date(
        productLogisticData.pickup.availableDate
      );
    }
    if (productLogisticData.pickup?.firstDeliveryDate) {
      productLogisticData.pickup.firstDeliveryDate = new Date(
        productLogisticData.pickup.firstDeliveryDate
      );
    }

    const savedProductLogistic = await addProductLogistic(productLogisticData);

    return NextResponse.json({
      message: "Product logistic added successfully",
      data: savedProductLogistic,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Failed to add productvar", error: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to add productvar", error: "Unknown error" },
        { status: 500 }
      );
    }
  }
}

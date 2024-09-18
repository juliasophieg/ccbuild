"use server";

import ProductLogistic from "@/models/productLogistic";
import { ProductLogisticSchema } from "@/app/api/productLogistics/schema";
import { z } from "zod";

type ProductLogisticData = z.infer<typeof ProductLogisticSchema>;

const addProductLogistic = async (productLogisticData: ProductLogisticData) => {
  const parsedData = ProductLogisticSchema.safeParse({
    ...productLogisticData,
    date: new Date(productLogisticData.date),
  });

  if (!parsedData.success) {
    //If validation fails
    throw new Error(
      `Validation failed: ${JSON.stringify(parsedData.error.errors)}`
    );
  }

  const { quantity, date, status, location, productId } = parsedData.data;

  const newProductLogistic = new ProductLogistic({
    quantity,
    date,
    status,
    location,
    productId,
  });

  try {
    const savedProductLogistic = await newProductLogistic.save();
    // Conversion to plain js object
    const plainProductLogistic = savedProductLogistic.toObject();
    return plainProductLogistic;
  } catch (error) {
    throw new Error(`Error saving product logistics`);
  }
};

const getProductLogistic = async () => {
  try {
    const productLogistics = await ProductLogistic.find();
    return productLogistics;
  } catch (error) {
    throw new Error(`Error fetching product logistics`);
  }
};

export { addProductLogistic, getProductLogistic };

"use server";

import mongoose from "mongoose";
import Product from "@/models/product";
import { ProductSchema } from "@/schemas";
import { z } from "zod";

type ProductData = z.infer<typeof ProductSchema>;

// const addProduct = async (productData: ProductData) => {
//   const parsedData = ProductSchema.safeParse(productData)

//   if (!parsedData.success) {
//     throw new Error(
//       `Validation failed: ${JSON.stringify(parsedData.error.errors)}`,
//     )
//   }

//   const { name, category, condition, format, productInfo, project } =
//     parsedData.data

//   const newProduct = new Product({
//     name,
//     category,
//     condition,
//     format,
//     productInfo,
//     project: project,
//   })

//   console.log('newProduct', newProduct)

//   try {
//     const savedProduct = await newProduct.save()
//     const plainProduct = savedProduct.toObject()
//     return plainProduct
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error('Error saving product:', error) // Log the exact error
//       throw new Error(`Error saving product: ${error.message}`) // Access the message safely
//     } else {
//       throw new Error('Unknown error occurred')
//     }
//   }
// }

const addProduct = async (projectId: string) => {
  const newProduct = new Product({
    project: projectId,
  });

  try {
    const savedProduct = await newProduct.save();
    const plainProduct = savedProduct.toObject();
    return plainProduct;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error saving product:", error);
      throw new Error(`Error saving product: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

const getProduct = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error(`Error fetching products`);
  }
};

const getProductByProject = async (projectId: string) => {
  try {
    const objectId = new mongoose.Types.ObjectId(projectId);

    const products = await Product.find({ project: objectId });

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Error fetching products");
  }
};

const patchProduct = async (productId: string, productData: ProductData) => {
  const parsedData = ProductSchema.safeParse(productData);

  if (!parsedData.success) {
    throw new Error(
      `Validation failed: ${JSON.stringify(parsedData.error.errors)}`
    );
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: parsedData.data },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      throw new Error("Product not found");
    }

    return updatedProduct.toObject();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error updating product:", error);
      throw new Error(`Error updating product: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export { addProduct, getProduct, getProductByProject, patchProduct };

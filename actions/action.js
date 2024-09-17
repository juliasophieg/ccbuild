"use server";

import Product from "@/models/Product";

const addProduct = async (productData) => {
  console.log("productData", productData);
  console.log("productData name", productData.name);
  const name = productData.name;
  const enabled = productData.enabled;

  const newProduct = new Product({ name, enabled });
  const savedProduct = await newProduct.save();

  // Conversion to plain js object
  const plainProduct = savedProduct.toObject();

  return plainProduct;
};
const getProduct = async () => {
  return Product.find();
};

export { addProduct, getProduct };

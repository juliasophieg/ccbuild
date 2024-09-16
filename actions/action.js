"use server";

import Product from "@/models/Product";

const addProduct = async (productData) => {
  const name = productData.get("name");
  const enabled = productData.get("enabled");

  const newProduct = new Product({ name, enabled });
  return newProduct.save();
};
const getProduct = async () => {
  return Product.find();
};

export { addProduct, getProduct };

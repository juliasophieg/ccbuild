'use server'

import mongoose from 'mongoose'
import Product from '@/models/Product'
import { ProductSchema } from '@/schemas'
import { z } from 'zod'

type ProductData = z.infer<typeof ProductSchema>

const addProduct = async (productData: ProductData) => {
  const parsedData = ProductSchema.safeParse(productData)

  if (!parsedData.success) {
    throw new Error(
      `Validation failed: ${JSON.stringify(parsedData.error.errors)}`,
    )
  }

  const { name, category, condition, format, productInfo, projectSlug } =
    parsedData.data

  console.log('parsedData', parsedData)
  console.log('slug', projectSlug)

  // Convert projectSlug (which is actually an ObjectId as a string) to an ObjectId
  const projectSlugId = new mongoose.Types.ObjectId(projectSlug)

  // Make sure to assign projectSlugId to the correct field, in this case "project"
  const newProduct = new Product({
    name,
    category,
    condition,
    format,
    productInfo,
    project: projectSlugId, // This ensures the project ID is assigned correctly
  })

  console.log('newProduct', newProduct)

  try {
    const savedProduct = await newProduct.save()
    const plainProduct = savedProduct.toObject()
    return plainProduct
  } catch (error) {
    throw new Error(`Error saving product`)
  }
}

const getProduct = async () => {
  try {
    const products = await Product.find()
    return products
  } catch (error) {
    throw new Error(`Error fetching products`)
  }
}

export { addProduct, getProduct }

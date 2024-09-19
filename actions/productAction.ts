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

  const { name, category, condition, format, productInfo, projectId } =
    parsedData.data

  console.log('parsedData', parsedData)
  console.log('slug', projectId)

  const newProduct = new Product({
    name,
    category,
    condition,
    format,
    productInfo,
    projectId,
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

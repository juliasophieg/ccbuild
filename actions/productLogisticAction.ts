'use server'

import ProductLogistic from '@/models/productLogistic'
import { ProductLogisticSchema } from '@/schemas'
import { z } from 'zod'
import mongoose from 'mongoose'

type ProductLogisticData = z.infer<typeof ProductLogisticSchema>
const addProductLogistic = async (productLogisticData: ProductLogisticData) => {
  productLogisticData.quantity = Number(productLogisticData.quantity)

  const parsedData = ProductLogisticSchema.safeParse(productLogisticData)

  console.log('parsedData!!!!!!!!', parsedData)

  if (!parsedData.success) {
    throw new Error(
      `Validation failed: ${JSON.stringify(parsedData.error.errors)}`,
    )
  }

  const {
    pickup,
    location,
    decision,
    quantity,
    status,
    marketplaces,
    productId,
  } = parsedData.data

  console.log('quantity', quantity)
  console.log('typeof quantity', typeof quantity)

  const newProductLogistic = new ProductLogistic({
    pickup,
    location,
    decision,
    quantity,
    status,
    marketplaces,
    productId: productId ? new mongoose.Types.ObjectId(productId) : null,
  })

  try {
    const savedProductLogistic = await newProductLogistic.save()
    return savedProductLogistic.toObject()
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error updating product:', error)
      throw new Error(`Error updating product: ${error.message}`)
    } else {
      throw new Error('Unknown error occurred')
    }
  }
}

const getProductLogistic = async () => {
  try {
    const productLogistics = await ProductLogistic.find()
    return productLogistics
  } catch (error) {
    throw new Error(`Error fetching product logistics`)
  }
}

const getProductVarientByProduct = async (productId: string) => {
  try {
    const objectId = new mongoose.Types.ObjectId(productId)

    const products = await ProductLogistic.find({ productId: objectId })

    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    throw new Error('Error fetching products')
  }
}

export { addProductLogistic, getProductLogistic, getProductVarientByProduct }

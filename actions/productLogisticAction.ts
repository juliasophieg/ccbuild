'use server'

import ProductLogistic from '@/models/productLogistic'
import { ProductLogisticSchema } from '@/schemas'
import { z } from 'zod'
import mongoose from 'mongoose'

type ProductLogisticData = z.infer<typeof ProductLogisticSchema>

const addProductLogistic = async (productLogisticData: ProductLogisticData) => {
  const parsedData = ProductLogisticSchema.safeParse({
    ...productLogisticData,
  })

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

  const newProductLogistic = new ProductLogistic({
    pickup,
    location,
    decision,
    quantity,
    status,
    marketplaces,
    productId: new mongoose.Types.ObjectId(productId),
  })

  try {
    const savedProductLogistic = await newProductLogistic.save()
    const plainProductLogistic = savedProductLogistic.toObject()
    return plainProductLogistic
  } catch (error) {
    throw new Error(`Error saving product logistics`)
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

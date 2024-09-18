import { z } from 'zod'
import mongoose from 'mongoose'

// Validation for ObjectId
const objectIdSchema = z
  .string()
  .refine(value => mongoose.Types.ObjectId.isValid(value), {
    message: 'Invalid ObjectId',
  })

// PRODUCT SCHEMA
export const ProductSchema = z.object({
  name: z.string().optional(),
  category: z
    .object({
      mainCategory: z.string().optional(),
      subCategory: z.string().optional(),
      subSubCategory: z.string().optional(),
    })
    .optional(),
  condition: z.number().min(1).max(5).optional(),
  format: z
    .object({
      length: z.number().optional(),
      height: z.number().optional(),
      width: z.number().optional(),
    })
    .optional(),
  productInfo: z
    .object({
      manufacturer: z.string().optional(),
      yearOfManufacturing: z.number().optional(),
      articleNumber: z.number().optional(),
    })
    .optional(),
  locationInfo: z
    .object({
      firstLocation: z.string().optional(),
      secondLocation: z.string().optional(),
      thirdLocation: z.string().optional(),
    })
    .optional(),
  projectId: objectIdSchema.optional(),
})

// PRODUCT LOGISTICS SCHEMA

export const ProductLogisticSchema = z.object({
  quantity: z.number().optional(),
  date: z.date().optional(),
  status: z.string().optional(),
  location: objectIdSchema.optional(),
  productId: objectIdSchema.optional(),
})

// LOCATION SCHEMA

export const LocationSchema = z.object({
  firstLocation: z.string().optional(),
  secondLocation: z.string().optional(),
  thirdLocation: z.string().optional(),
})

export type ProductFormData = z.infer<typeof ProductSchema>

export const ProjectSchema = z.object({
  name: z.string().optional(),
  date: z.date().optional(),
  description: z.string().optional(),
})

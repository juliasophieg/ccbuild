import { z } from 'zod'
import mongoose from 'mongoose'

// Validation for ObjectId
const objectIdSchema = z
  .string()
  .refine(value => mongoose.Types.ObjectId.isValid(value), {
    message: 'Invalid ObjectId',
  })

// USER SCHEMA

export const UserSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(100, { message: "Name can't be longer then 250 characters long" }),
  email: z.string().email({ message: 'Please provide a valid email' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
})

// LOGIN SCHEMA

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Please provide a valid email' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
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
  project: objectIdSchema,
})

// PRODUCT LOGISTICS SCHEMA

export const ProductLogisticSchema = z.object({
  pickup: z.object({
    availableDate: z.date().optional(),
    firstDeliveryDate: z.date().optional(),
  }),
  location: z
    .object({
      house: z.string().optional(),
      room: z.string().optional(),
      location: z.string().optional(),
      accesaibility: z
        .enum([
          'Lätt Åtkomlig',
          'Åtkomlig men planering och specialverktyg kan krävas',
          'Begränsad åtkomlighet',
        ])
        .optional(),
      dismantling: z
        .enum([
          'Enkel att demontera/demontering krävs ej',
          'Demonterbar men specialverktyg kan krävas',
          'Begränsad demonterbarhet',
        ])
        .optional(),
    })
    .optional(),
  decision: z
    .object({
      location1: z.string().optional(),
      location2: z.string().optional(),
      location3: z.string().optional(),
      location4: z.string().optional(),
    })
    .optional(),
  quantity: z.number().default(1),
  status: z
    .enum([
      'Inventerad',
      'Inventerad - i byggnad',
      'Inventerad - i lager/förråd',
      'Mängdad',
      'Mängdad - i byggnad',
      'Mängdad - i lager/förråd',
      'På rekonditionering',
      'I lager',
      'Bevarad (slutstatus)',
      'Återbrukad i projektet (slutstatus)',
      'Återbrukad inom organisationen (slutstatus)',
      'Återbrukad externt av annan aktör (slutstatus)',
      'Avfallshanterad (slutstatus)',
    ])
    .optional(),
  marketplaces: z
    .enum([
      'Ej publicerad',
      'Publicerad som intern annons',
      'Publicerad som extern annons',
      'Reserverad',
      'Såld',
      'Avpublicerad',
      'Automatiskt avpublicerad',
    ])
    .optional()
    .default('Ej publicerad'),
  productId: objectIdSchema.optional(),
})
// LOCATION SCHEMA

export const LocationSchema = z.object({
  firstLocation: z.string().optional(),
  secondLocation: z.string().optional(),
  thirdLocation: z.string().optional(),
})

export type ProductFormData = z.infer<typeof ProductSchema>
export type ProductLogisticData = z.infer<typeof ProductLogisticSchema>

export const ProjectSchema = z.object({
  name: z.string().optional(),
  date: z.date().optional(),
  description: z.string().optional(),
})

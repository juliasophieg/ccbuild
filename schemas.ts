import { z } from "zod";
import mongoose from "mongoose";

// Validation for ObjectId
const objectIdSchema = z
  .string()
  .refine((value) => mongoose.Types.ObjectId.isValid(value), {
    message: "Invalid ObjectId",
  });

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
  email: z.string().email({ message: "Please provide a valid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

// PRODUCT SCHEMA
const ProductSchema = z.object({
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
  quantity: z.number().optional(),
  date: z.date().optional(),
  status: z.string().optional(),
  location: objectIdSchema.optional(),
  productId: objectIdSchema.optional(),
});

// LOCATION SCHEMA

export const LocationSchema = z.object({
  firstLocation: z.string().optional(),
  secondLocation: z.string().optional(),
  thirdLocation: z.string().optional(),
});

export type ProductFormData = z.infer<typeof ProductSchema>;

export const ProjectSchema = z.object({
  name: z.string().optional(),
  date: z.date().optional(),
  description: z.string().optional(),
});

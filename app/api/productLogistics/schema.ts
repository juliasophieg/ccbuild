import { z } from "zod";
import mongoose from "mongoose";

// Validation for ObjectId
const objectIdSchema = z
  .string()
  .refine((value) => mongoose.Types.ObjectId.isValid(value), {
    message: "Invalid ObjectId",
  });

export const ProductLogisticSchema = z.object({
  quantity: z.number(),
  date: z.date(),
  status: z.string(),
  location: objectIdSchema,
  productId: objectIdSchema,
});

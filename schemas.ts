import { z } from 'zod';

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
});

export type ProductFormData = z.infer<typeof ProductSchema>;

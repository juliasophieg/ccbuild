import { z } from 'zod';

  
export const ProductSchema = z.object({
    name: z.string(),
    category: z.object({
      mainCategory: z.string(),
      subCategory: z.string(),
      subSubCategory: z.string(),
    }),
    condition: z.number().min(1).max(5),
    format: z.object({
      length: z.number(),
      height: z.number(),
      width: z.number(),
    }),
    productInfo: z.object({
      manufacturer: z.string(),
      yearOfManufacturing: z.number(),
      articleNumber: z.number(),
    }),
    locationInfo: z.object({
    firstLocation: z.string().optional(),
    secondLocation: z.string().optional(),
    thirdLocation: z.string().optional(),
    }),
  });
  


 export type ProductFormData = z.infer<typeof ProductSchema>;
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
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(100, { message: "Name can't be longer then 250 characters long" }),
  email: z.string().email({ message: "Please provide a valid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

// LOGIN SCHEMA

export const LoginSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export const ProductSchema = z.object({
  //generated id
  _id: objectIdSchema.optional(),
  generalInformation: z.object({
    productName: z.string().optional(),
    productCategory1: z.string().optional(),
    productCategory2: z.string().optional(),
    productCategory3: z.string().optional(),
    productDescription: z.string().optional(),
  }),

  location: z
    .object({
      premises: z.string().optional(), // Corresponds to 'Lokal'
      room: z.string().optional(), // Corresponds to 'Rum'
      place: z.string().optional(), // Corresponds to 'Plats'
      accessibility: z
        .enum([
          "Lätt Åtkomlig",
          "Åtkomlig men planering och specialverktyg kan krävas",
          "Begränsad åtkomlighet",
        ])
        .optional(),
      dismantling: z
        .enum([
          "Enkel att demontera/demontering krävs ej",
          "Demonterbar men specialverktyg kan krävas",
          "Begränsad demonterbarhet",
        ])
        .optional(),
    })
    .optional(),

  condition: z
    .object({
      aestheticCondition: z.string().optional(),
      functionalCondition: z.string().optional(),
    })
    .optional(),

  properties: z
    .object({
      material: z.string().optional(),
      color: z.string().optional(),
      surfaceTreatment: z.string().optional(),
    })
    .optional(),

  dimensions: z
    .object({
      measurementUnit: z.enum(["mm", "cm", "m", "in", "ft"]).optional(),
      width: z.number().optional(),
      height: z.number().optional(),
      depth: z.number().optional(),
      weightUnit: z.enum(["kg", "g", "lbs"]).optional(),
      weightPerUnit: z.number().optional(),
    })
    .optional(),

  specialProperties: z.record(z.any()).optional(),

  productInformation: z
    .object({
      manufacturer: z.string().optional(),
      articleNumber: z.string().optional(),
      manufacturingYear: z.number().optional(),
      purchaseYear: z.number().optional(),
      GTIN: z.string().optional(),
      RSK: z.string().optional(),
      ENR: z.string().optional(),
      BSAB: z.string().optional(),
      BK04: z.string().optional(),
    })
    .optional(),

  price: z
    .object({
      internalPrice: z.number().optional(),
      externalPrice: z.number().optional(),
      buyerPrice: z.boolean().optional(),
    })
    .optional(),

  address: z
    .object({
      address: z.string().optional(),
      postalCode: z.string().optional(),
      city: z.string().optional(),
    })
    .optional(),

  pickup: z
    .object({
      availableDate: z.date().optional(),
      firstDeliveryDate: z.date().optional(),
      canBeSent: z.boolean().optional(),
      canBePickedUp: z.boolean().optional(),
      contactPerson: z.string().optional(),
      description: z.string().optional(),
    })
    .optional(),

  variations: z.array(z.record(z.any())).optional(),
  project: objectIdSchema,
});

// PRODUCT LOGISTICS SCHEMA

export const ProductLogisticSchema = z.object({
  _id: objectIdSchema.optional(),
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
          "Lätt Åtkomlig",
          "Åtkomlig men planering och specialverktyg kan krävas",
          "Begränsad åtkomlighet",
        ])
        .optional(),
      dismantling: z
        .enum([
          "Enkel att demontera/demontering krävs ej",
          "Demonterbar men specialverktyg kan krävas",
          "Begränsad demonterbarhet",
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
  quantity: z.number().optional(),
  status: z
    .enum([
      "Inventerad",
      "Inventerad - i byggnad",
      "Inventerad - i lager/förråd",
      "Mängdad",
      "Mängdad - i byggnad",
      "Mängdad - i lager/förråd",
      "På rekonditionering",
      "I lager",
      "Bevarad (slutstatus)",
      "Återbrukad i projektet (slutstatus)",
      "Återbrukad inom organisationen (slutstatus)",
      "Återbrukad externt av annan aktör (slutstatus)",
      "Avfallshanterad (slutstatus)",
    ])
    .optional(),
  marketplaces: z
    .enum([
      "Ej publicerad",
      "Publicerad som intern annons",
      "Publicerad som extern annons",
      "Reserverad",
      "Såld",
      "Avpublicerad",
      "Automatiskt avpublicerad",
    ])
    .optional()
    .default("Ej publicerad"),
  productId: objectIdSchema.optional(),
});
// LOCATION SCHEMA

export const LocationSchema = z.object({
  firstLocation: z.string().optional(),
  secondLocation: z.string().optional(),
  thirdLocation: z.string().optional(),
});

export type ProductFormData = z.infer<typeof ProductSchema>;
export type ProductLogisticData = z.infer<typeof ProductLogisticSchema>;

// PROJECT SCHEMA
export const ProjectSchema = z.object({
  _id: objectIdSchema.optional(),
  userId: objectIdSchema.optional(),
  name: z.string().optional(),
  description: z.string().optional(),
});

export type ProjectFormData = {
  userId: string;
  name: string;
  description: string;
  date: Date;
};

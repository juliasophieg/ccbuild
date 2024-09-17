import { z } from "zod";

export const LocationSchema = z.object({
  firstLocation: z.string(),
  secondLocation: z.string(),
  thirdLocation: z.string(),
});

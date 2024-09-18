"use server";

import Location from "@/models/Location";
import { LocationSchema } from "@/app/api/locations/schema";
import { z } from "zod";

type LocationData = z.infer<typeof LocationSchema>;

const addLocation = async (locationData: LocationData) => {
  const parsedData = LocationSchema.safeParse(locationData);

  if (!parsedData.success) {
    //If validation fails
    throw new Error(
      `Validation failed: ${JSON.stringify(parsedData.error.errors)}`
    );
  }

  const { firstLocation, secondLocation, thirdLocation } = parsedData.data;

  const newLocation = new Location({
    firstLocation,
    secondLocation,
    thirdLocation,
  });

  try {
    const savedLocation = await newLocation.save();
    // Conversion to plain js object
    const plainLocation = savedLocation.toObject();
    return plainLocation;
  } catch (error) {
    throw new Error(`Error saving location`);
  }
};

const getLocation = async () => {
  try {
    const locations = await Location.find();
    return locations;
  } catch (error) {
    throw new Error(`Error fetching locations`);
  }
};

export { addLocation, getLocation };

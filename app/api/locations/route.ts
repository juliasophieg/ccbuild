/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { getLocation, addLocation } from "@/actions/locationAction";

export async function GET(req: NextRequest) {
  const locations = await getLocation();

  const locationsJson = locations.map((location) => {
    return location;
  });

  return NextResponse.json(locationsJson);
}

export async function POST(req: NextRequest) {
  const locationData = await req.json();
  addLocation(locationData);

  return NextResponse.json({ message: "Location added successfully" });
}
/* eslint-enable @typescript-eslint/no-unused-vars */

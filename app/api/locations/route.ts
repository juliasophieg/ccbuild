import { NextRequest, NextResponse } from "next/server";
import { registerSchema } from "@/schemas";
import { z } from "zod";
import mongoose from "mongoose";

export async function registerUser(req: NextRequest) {
  try {
    const body: z.infer<typeof registerSchema> = await req.json();

    if (!registerSchema.safeParse(body).success) {
      return NextResponse.json(
        { success: false, error: new Error("Invalid data") },
        { status: 403 }
      );
    }

    const { name, email, password } = body;

    //const hashPass = await bcrypt.hash(password, 10);

    //INSERT LOGIC

    return NextResponse.json({
      success: true,
      data: { name, email },
    });
  } catch {
    return NextResponse.json(
      { success: false, error: new Error("Internal server error") },
      { status: 500 }
    );
  }
}

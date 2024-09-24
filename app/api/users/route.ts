import { NextRequest, NextResponse } from "next/server";
import { registerUser, getUser } from "@/actions/userAction";

export async function POST(req: NextRequest) {
  try {
    const userData = await req.json();
    registerUser(userData);

    return NextResponse.json({
      success: true,
      message: "User registration successfull",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: new Error("Internal server error") },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const users = await getUser();
    const usersJson = users.map((user) => {
      return user;
    });
    return NextResponse.json(usersJson);
  } catch (error) {
    throw new Error(`Error fetching users`);
  }
}

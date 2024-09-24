"use server";
import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { UserSchema } from "@/schemas";
import { z } from "zod";

type UserData = z.infer<typeof UserSchema>;

const registerUser = async (userData: UserData) => {
  const parsedData = UserSchema.safeParse(userData);

  if (!parsedData.success) {
    return NextResponse.json(
      { success: false, error: "Invalid data" },
      { status: 403 }
    );
  }

  const { name, email, password } = parsedData.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  try {
    const savedUser = await newUser.save();
    // Conversion to plain js object
    const plainUser = savedUser.toObject();
    return plainUser;
  } catch (error) {
    throw new Error(`Error saving user`);
  }
};

const getUser = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(`Error fetching users`);
  }
};

export { registerUser, getUser };

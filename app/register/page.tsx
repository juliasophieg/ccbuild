"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldPath,
} from "react-hook-form";
import { UserSchema } from "@/schemas";
import { useRouter } from "next/navigation";

type RegisterForm = z.infer<typeof UserSchema>;

export default function Register() {
  const form = useForm<RegisterForm>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: RegisterForm) => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from API:", errorData);
        throw new Error(
          errorData.message || "An error occurred while registering"
        );
      }

      const result = await response.json();

      if (result.success) {
        router.push("/login");
      } else {
        throw new Error(result.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error in onSubmit:", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" {...form.register("name")} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...form.register("email")} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" {...form.register("password")} />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

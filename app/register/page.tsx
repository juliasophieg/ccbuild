"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserSchema } from "@/schemas";
import { useRouter } from "next/navigation";
import { Button, TextField } from "@mui/material";

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

  const {
    formState: { errors },
  } = form;

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
        <div className="my-1">
          <label htmlFor="name" className="mx-1">
            Name
          </label>
          <TextField
            id="name"
            type="text"
            size="small"
            {...form.register("name")}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ""}
          />
        </div>

        <div className="my-1">
          <label htmlFor="email" className=" mx-1">
            Email
          </label>
          <TextField
            id="email"
            type="email"
            size="small"
            {...form.register("email")}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
          />
        </div>

        <div className="my-1">
          <label htmlFor="password" className=" mx-1">
            Password
          </label>
          <TextField
            id="password"
            type="password"
            size="small"
            {...form.register("password")}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
          />
        </div>

        <Button type="submit" variant="outlined" className="my-1">
          Sign up
        </Button>
        <p>
          Already have an account?{" "}
          <a href="/login" className="underline underline-offset-3">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}

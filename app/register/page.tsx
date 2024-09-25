"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserSchema } from "@/schemas";
import { useRouter } from "next/navigation";
import { Button, Box, TextField } from "@mui/material";

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
    <div className="flex justify-center items-center w-full my-14">
      <div className="w-96 border-solid border rounded-md border-gray-200 py-7 px-12">
        <h1 className="text-center mb-4">Skapa konto</h1>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center gap-4">
            <div className="my-1 flex flex-col w-full">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Namn
              </label>{" "}
              <TextField
                id="outlined-size-small"
                placeholder="För- och efternamn"
                type="text"
                size="small"
                {...form.register("name")}
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
                className="w-full"
              />
            </div>
            <div className="my-1 flex flex-col w-full">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Mailadress
              </label>
              <TextField
                id="outlined-size-small"
                placeholder="exempel@mail.se"
                type="email"
                size="small"
                {...form.register("email")}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                className="w-full"
              />
            </div>

            <div className="my-1 flex flex-col w-full">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Lösenord
              </label>
              <TextField
                id="outlined-size-small"
                placeholder="Lösenord"
                type="password"
                size="small"
                {...form.register("password")}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
                className="w-full"
              />
            </div>

            <Button type="submit" variant="contained" className="w-full mt-2">
              Skapa konto
            </Button>
            <p>
              Har du redan ett konto?{" "}
              <a href="/login" className="underline underline-offset-3">
                Logga in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

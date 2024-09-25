"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { useRouter } from "next/navigation";
import { Button, TextField } from "@mui/material";
import { signIn } from "next-auth/react";

type LoginForm = z.infer<typeof LoginSchema>;

export default function Login() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    formState: { errors },
  } = form;
  const router = useRouter();

  const onSubmit = async (data: LoginForm) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      console.error("Login failed", result.error);
    } else {
      router.push("/");
      console.log("Login successful:", result);
    }
  };

  return (
    <div className="flex justify-center items-center w-full my-14">
      <div className="w-96 border-solid border rounded-md border-gray-200 py-7 px-12">
        <h1 className="text-center mb-4">Logga in</h1>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center gap-4">
            <div className="my-1 flex flex-col w-full">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Mailadress
              </label>{" "}
              <TextField
                className="w-full"
                id="outlined-size-small"
                type="email"
                size="small"
                placeholder="exempel@mail.se"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
            </div>

            <div className="my-1 flex flex-col w-full">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Lösenord
              </label>{" "}
              <TextField
                className="w-full"
                id="outlined-size-small"
                type="password"
                size="small"
                placeholder="•••••••••"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
            </div>

            <Button type="submit" variant="contained" className="w-full mt-2">
              Logga in
            </Button>
            <p>
              Har du inget konto?{" "}
              <a href="/register" className="underline underline-offset-3">
                Skapa konto
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

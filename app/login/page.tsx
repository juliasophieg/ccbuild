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
        <h2 className="text-center mb-4">Logga in</h2>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center gap-4">
            <div className="my-1 flex flex-col">
              <TextField
                className="w-full"
                id="email"
                type="email"
                size="small"
                placeholder="Mailadress"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
            </div>

            <div className="my-1 flex flex-col">
              <TextField
                className="w-full"
                id="password"
                type="password"
                size="small"
                placeholder="Lösenord"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
            </div>

            <Button type="submit" variant="outlined" className="w-full">
              Login
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

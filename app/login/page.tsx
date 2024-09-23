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
    handleSubmit,
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
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="my-1">
          <label htmlFor="email" className=" mx-1">
            Email
          </label>
          <TextField
            id="email"
            type="email"
            size="small"
            {...register("email")}
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
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
          />
        </div>

        <Button type="submit" variant="outlined">
          Login
        </Button>
        <p>
          Don't have an account?{" "}
          <a href="/register" className="underline underline-offset-3">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

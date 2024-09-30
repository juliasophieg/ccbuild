"use client";

import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProjectSchema, ProjectFormData } from "@/schemas";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";

const CreateProject: React.FC = () => {
  const { session, isAuthenticated } = useAuth();

  if (!isAuthenticated || !session) {
    console.log("User not authenticated");
  } else {
    console.log("User authenticated:", session.user);
  }

  const userId = session?.user?.id;

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(ProjectSchema),
    mode: "all",
    defaultValues: {
      userId: userId,
      date: new Date(),
      name: "",
      description: "",
    },
  });

  const { register, handleSubmit } = form;
  const router = useRouter();

  const onSubmit: SubmitHandler<ProjectFormData> = async (data) => {
    console.log("Form Data Submitted:", data);
    try {
      const response = await fetch(
        "https://ccbuild-project.vercel.app/api/projects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from API:", errorData);
        throw new Error(
          errorData.message || "An error occurred while adding project"
        );
      }

      const result = await response.json();

      if (result.success) {
        router.push("/projects");
      } else {
        throw new Error(result.message || "Failed to add project");
      }
    } catch (error) {
      console.error("Error in onSubmit:", error);
    }
  };

  return (
    <>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb" className="m-4">
        <Link underline="hover" color="inherit" href="/">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Fill
        </Link>
        <Typography sx={{ color: "text.primary" }}>
          Skapa nytt projekt
        </Typography>
      </Breadcrumbs>
      <div className="flex flex-col items-center mx-auto my-7 max-w-lg p-4">
        <h1 className="text-custom-blue mb-4">Skapa nytt projekt</h1>
        {!isAuthenticated ? (
          <div className="flex flex-col items-center gap-4">
            <p>Du måste vara inloggad för att skapa ett projekt.</p>
            <p>
              <Link
                href="/login"
                className="font-bold text-custom-blue underline"
              >
                Logga in
              </Link>{" "}
              eller
              <Link
                href="/register"
                className="font-bold text-custom-blue underline"
              >
                {" "}
                Skapa konto
              </Link>
            </p>
          </div>
        ) : (
          <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Projektnamn
                </label>
                <input
                  id="name"
                  required
                  {...register("name", {
                    required: "Project name is required",
                  })}
                  className={`w-full rounded-md border p-2`}
                  placeholder="Vad heter projektet?"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Beskrivning
                </label>
                <textarea
                  id="description"
                  {...register("description", {
                    required: "Project description is required",
                  })}
                  className={`w-full rounded-md border p-2`}
                  placeholder="Beskriv projektet"
                />
              </div>

              <input type="hidden" {...register("date")} />

              <div>
                <Button
                  type="submit"
                  variant="contained"
                  className="mt-2 w-full"
                >
                  Skapa projekt
                </Button>
              </div>
            </form>
          </FormProvider>
        )}
      </div>
    </>
  );
};

export default CreateProject;

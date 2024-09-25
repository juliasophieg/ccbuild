"use client";

import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProjectSchema, ProjectFormData } from "@/schemas";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@mui/material";

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
      const response = await fetch("/api/projects", {
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
    <div className="max-w-lg mx-auto p-4 my-7">
      <h1 className="text-custom-blue mb-4">Skapa nytt projekt</h1>
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
              {...register("name", { required: "Project name is required" })}
              className={`w-full border p-2 rounded-md`}
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
              className={`w-full border p-2 rounded-md`}
              placeholder="Beskriv projektet"
            />
          </div>

          <input type="hidden" {...register("date")} />

          <div>
            <Button type="submit" variant="contained" className="w-full mt-2">
              Skapa projekt
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateProject;

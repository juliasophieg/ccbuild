"use client";

import React, { useState, useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProjectSchema, ProjectFormData } from "@/schemas";
import { useRouter } from "next/navigation";

type ProjectFormProps = {
  userId: string;
};

const CreateProject: React.FC<ProjectFormProps> = ({ userId }) => {
  const form = useForm<ProjectFormData>({
    resolver: zodResolver(ProjectSchema),
    mode: "all",
    defaultValues: {
      userId: userId,
    },
  });

  const { handleSubmit, trigger } = form;
  const [projectId, setProjectId] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit: SubmitHandler<ProjectFormData> = async (data) => {
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
        throw new Error(result.message || "Project failed to add");
      }
    } catch (error) {
      console.error("Error in onSubmit:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold text-blue-500 mb-4">
        Create New Project
      </h1>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Project Name
            </label>
            <input
              id="name"
              className={`w-full border p-2 rounded-md`}
              placeholder="Enter project name"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Project Description
            </label>
            <textarea
              id="description"
              className={`w-full border p-2 rounded-md`}
              placeholder="Enter project description"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Create Project
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateProject;

"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { z } from "zod";
import { ProjectSchema } from "@/schemas"; // Make sure this is the correct import path
import { infer as zInfer } from "zod";

// Infer the project type from the Zod schema
type Project = zInfer<typeof ProjectSchema>;

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();

        // Validate the data directly as an array of Project objects
        const projectsData = z.array(ProjectSchema).safeParse(data);

        if (projectsData.success) {
          setProjects(projectsData.data); // Set the validated data
        } else {
          setError("Invalid data format");
          console.error(projectsData.error);
        }
      } catch (error) {
        setError("Error fetching projects");
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Link href={`/projects/create`}>
        <Button variant="contained" color="primary" className="mt-8">
          Create project
        </Button>
      </Link>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            href={`/projects/${project._id}`}
            key={project._id}
            className="flex aspect-square flex-col justify-between rounded-lg bg-white p-6 text-black shadow-lg"
          >
            <div className="my-2">
              <h1>{project._id}</h1>
              <h1 className="font-bold">{project.name}</h1>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

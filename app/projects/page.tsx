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

      <div className="flex flex-col items-center w-screen px-4 ">
        <div className="flex flex-col w-full max-w-6xl py-7">
          <h1 className="text-custom-blue">Mina projekt</h1>
          <Link href={`/projects/create`} className="self-end">
            <Button variant="outlined" color="primary" className="mb-5">
              + Lägg till projekt
            </Button>
          </Link>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.reverse().map((project) => (
              <Link
                href={`/projects/${project.id}`}
                key={project._id}
                className="flex aspect-square flex-col justify-between rounded-lg bg-white p-6 text-black shadow-lg hover:scale-105"
              >
                <div className="my-2">
                  <h2 className="font-bold">{project.name}</h2>
                  <p>{project.description}</p>
                  <p>{project.date.toLocaleDateString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

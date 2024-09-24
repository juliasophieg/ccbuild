"use server";

import Project from "@/models/project";
import { ProjectSchema } from "@/schemas";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { Session } from "next-auth";

type projectData = z.infer<typeof ProjectSchema>;

interface CustomUser {
  id: string;
  name?: string | null;
  email?: string | null;
}
interface CustomSession extends Session {
  user: CustomUser;
}

const addProject = async (projectData: projectData) => {
  const session: CustomSession | null = await getServerSession(authOptions);

  if (!session) {
    console.log("Session not found");
    throw new Error(`User not authenticated`);
  } else {
    console.log("Session found:", session); // Log session details
  }

  const parsedData = ProjectSchema.safeParse(projectData);

  if (!parsedData.success) {
    throw new Error(
      `Validation failed: ${JSON.stringify(parsedData.error.errors)}`
    );
  }

  const { name, description } = parsedData.data;

  console.log("User ID from form data:", session.user.id);

  const newProject = new Project({
    userId: session.user.id,
    name,
    description,
    date: new Date(),
  });

  console.log("New project data:", newProject);

  try {
    const savedProject = await newProject.save();
    const plainProject = savedProject.toObject();
    return plainProject;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error saving project: ${error.message}`);
    } else {
      throw new Error(`Unknown error occurred while saving project`);
    }
  }
};

const getProject = async () => {
  try {
    const projects = await Project.find();
    return projects;
  } catch (error) {
    throw new Error(`Error fetching projects`);
  }
};

const getProjectById = async (id: string) => {
  try {
    const project = await Project.findById(id);
    return project;
  } catch (error) {
    throw new Error(`Error fetching project`);
  }
};

export { addProject, getProject, getProjectById };

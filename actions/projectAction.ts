"use server";

import Project from "@/models/project";
import { ProjectSchema } from "@/schemas";
import { z } from "zod";
import { getServerSession } from "next-auth";
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
  const session: CustomSession | null = await getServerSession();

  if (!session || !session.user || !session.user.id) {
    throw new Error(`User not authenticated`);
  }
  const parsedData = ProjectSchema.safeParse(projectData);

  if (!parsedData.success) {
    throw new Error(
      `Validation failed: ${JSON.stringify(parsedData.error.errors)}`
    );
  }

  const { name, description, date } = parsedData.data;

  const newProject = new Project({
    userId: session.user.id,
    name,
    description,
    date,
  });

  try {
    const savedProject = await newProject.save();
    const plainProject = savedProject.toObject();
    return plainProject;
  } catch (error) {
    throw new Error(`Error saving project`);
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

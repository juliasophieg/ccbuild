'use server'

import Project from '@/models/project'
import { ProjectSchema } from '@/schemas'
import { z } from 'zod'

type projectData = z.infer<typeof ProjectSchema>

const addProject = async (projectData: projectData) => {
  const parsedData = ProjectSchema.safeParse(projectData)

  if (!parsedData.success) {
    //If validation fails
    throw new Error(
      `Validation failed: ${JSON.stringify(parsedData.error.errors)}`,
    )
  }

  const { name, description, date } = parsedData.data

  const newProject = new Project({
    name,
    description,
    date,
  })

  try {
    const savedProject = await newProject.save()
    // Conversion to plain js object
    const plainProject = savedProject.toObject()
    return plainProject
  } catch (error) {
    throw new Error(`Error saving project`)
  }
}

const getProject = async () => {
  try {
    const projects = await Project.find()
    return projects
  } catch (error) {
    throw new Error(`Error fetching projects`)
  }
}

export { addProject, getProject }

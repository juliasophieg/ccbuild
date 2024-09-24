import { NextRequest, NextResponse } from "next/server";
import { getProject, addProject } from "@/actions/projectAction";

export async function GET() {
  const projects = await getProject();

  const projectsJson = projects.map((projects) => {
    return projects;
  });

  return NextResponse.json(projectsJson);
}

export async function POST(req: NextRequest) {
  const projectData = await req.json();
  projectData.date = new Date(projectData.date);
  console.log(projectData);
  addProject(projectData);

  return NextResponse.json({
    success: true,
    message: "Project added successfully",
  });
}

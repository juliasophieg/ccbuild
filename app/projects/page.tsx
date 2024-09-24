import { Button } from "@mui/material";
import { getProject } from "@/actions/projectAction";
import Link from "next/link";

export default async function Projects() {
  const projects = await getProject();

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
            href={`/projects/${project.id}`}
            key={project._id}
            className="flex aspect-square flex-col justify-between rounded-lg bg-white p-6 text-black shadow-lg"
          >
            <div className="my-2">
              <h1>{project.id}</h1>
              <h1 className="font-bold">{project.name}</h1>
              <p>{project.description}</p>
              <p>{project.date.toLocaleDateString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

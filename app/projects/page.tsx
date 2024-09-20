import { Button } from '@mui/material'
import { getProject } from '@/actions/projectAction'
import Link from 'next/link'

export default async function Projects() {
  const projects = await getProject()

  return (
    <>
      <div className='flex-grow bg-blue-400'>
        {projects.map(project => (
          <Link href={`/projects/${project.id}`} key={project._id}>
            <div className='my-2'>
              <h1>{project.id}</h1>
              <h1 className='font-bold'>{project.name}</h1>
              <p>{project.description}</p>
              <p>{project.date.toLocaleDateString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

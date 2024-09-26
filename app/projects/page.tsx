'use client'

import { Button } from '@mui/material'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { ProjectSchema } from '@/schemas'
import { infer as zInfer } from 'zod'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import HomeIcon from '@mui/icons-material/Home'

type Project = zInfer<typeof ProjectSchema>

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects')
        const data = await res.json()

        const projectsData = z.array(ProjectSchema).safeParse(data)

        if (projectsData.success) {
          setProjects(projectsData.data)
        } else {
          setError('Invalid data format')
          console.error(projectsData.error)
        }
      } catch (error) {
        setError('Error fetching projects')
        console.error('Error fetching projects:', error)
      }
    }

    fetchProjects()
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <Breadcrumbs maxItems={2} aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' href='#'>
          <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
        </Link>
        <Link underline='hover' color='inherit' href='#'>
          Fill
        </Link>

        <Typography sx={{ color: 'text.primary' }}>Projekt</Typography>
      </Breadcrumbs>
      <div className='flex w-screen flex-col items-center px-4 '>
        <div className='flex w-full max-w-6xl flex-col py-7'>
          <h1 className='text-custom-blue'>Mina projekt</h1>
          <NextLink href={`/projects/create`} className='self-end'>
            <Button variant='outlined' color='primary' className='mb-5'>
              + Lägg till projekt
            </Button>
          </NextLink>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {projects.reverse().map(project => (
              <Link
                href={`/projects/${project._id}`}
                key={project._id}
                className='flex aspect-square flex-col justify-between rounded-lg bg-white p-6 text-black shadow-lg hover:scale-105'
              >
                <div className='my-2'>
                  <h2 className='font-bold'>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

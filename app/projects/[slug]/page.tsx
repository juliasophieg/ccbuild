import { FC } from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'

type PageProps = {
  params: {
    slug: string
  }
}

type ProjectData = {
  name: string
  date: string
  description: string
}

const Page: FC<PageProps> = async ({ params }) => {
  let project: ProjectData | null = null
  let errorMessage = ''

  try {
    const res = await fetch(
      `http://localhost:3000/api/projects/${params.slug}`,
      {
        cache: 'no-store',
      },
    )

    if (!res.ok) {
      throw new Error('Failed to fetch project data')
    }

    project = await res.json()
  } catch (error) {
    errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred'
  }

  if (!project) {
    return <p>{errorMessage || 'Project not found'}</p>
  }

  return (
    <>
      <div>
        <h1>{project.name}</h1>
        <p>Date: {project.date}</p>
        <p>{project.description}</p>
      </div>
      <Link href={`/product/${params.slug}/product/create`}>
        <Button variant='contained' color='primary'>
          Create Product
        </Button>
      </Link>
    </>
  )
}

export default Page

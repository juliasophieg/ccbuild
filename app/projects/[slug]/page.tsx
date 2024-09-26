import { FC } from 'react'
import NextLink from 'next/link' // Renamed to NextLink
import { Button } from '@mui/material'
import { ProductFormData } from '@/schemas'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import HomeIcon from '@mui/icons-material/Home'

type PageProps = {
  params: {
    slug: string
  }
}

type ProjectData = {
  _id: string
  name: string
  date: string
  description: string
}

const Page: FC<PageProps> = async ({ params }) => {
  let project: ProjectData | null = null
  let products: ProductFormData[] = []
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

  try {
    const resProducts = await fetch(
      `http://localhost:3000/api/products/${project._id}`,
      {
        cache: 'no-store',
      },
    )

    if (!resProducts.ok) {
      throw new Error('Failed to fetch products')
    }
    console.log(resProducts)
    products = await resProducts.json()
  } catch (error) {
    errorMessage =
      error instanceof Error
        ? error.message
        : 'Unknown error occurred while fetching products'
  }

  return (
    <div className='mb-14'>
      <div className='m-4'>
        <Breadcrumbs maxItems={2} aria-label='breadcrumb'>
          <Link underline='hover' color='inherit' href='#'>
            <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
          </Link>
          <Link underline='hover' color='inherit' href='#'>
            Fill
          </Link>

          <Typography sx={{ color: 'text.primary' }}>Produkter</Typography>
        </Breadcrumbs>
      </div>
      <div className='mx-14 mb-8'>
        <h1 className='text-4xl font-bold'>{project.name}</h1>
      </div>

      <div className='mx-14'>
        <h2 className='mb-6 text-3xl font-semibold'>
          Products for this Project
        </h2>
        {products.length > 0 ? (
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {products.map(product => (
              <div
                key={product._id}
                className='flex aspect-square flex-col justify-between rounded-lg bg-white p-6 text-black shadow-lg'
              >
                {product?.generalInformation?.productName ||
                  'Product Name Not Available'}
              </div>
            ))}
          </div>
        ) : (
          <p>No products found for this project.</p>
        )}
      </div>

      <NextLink
        href={`http://localhost:3000/projects/${params.slug}/product/create`}
        className='mx-14 mb-14'
      >
        <Button variant='contained' color='primary' className='mt-8'>
          Create Product
        </Button>
      </NextLink>
    </div>
  )
}

export default Page

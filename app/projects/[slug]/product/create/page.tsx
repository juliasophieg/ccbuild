import ProductForm from '@/components/ProductForm'
import { CategoryProvider } from '@/context/CategoryContext'
import ProgressBar from '@/components/ProgressBar'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import HomeIcon from '@mui/icons-material/Home'

type PageProps = {
  params: {
    slug: string
  }
}

export default function Product({ params }: PageProps) {
  const { slug } = params
  console.log('create' + slug)

  return (
    <>
      <div className='bg-[#F5F5F5] text-blue-400'>
        <Breadcrumbs maxItems={2} aria-label='breadcrumb'>
          <Link underline='hover' color='inherit' href='#'>
            <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
          </Link>
          <Link underline='hover' color='inherit' href='#'>
            Fill
          </Link>

          <Typography sx={{ color: 'text.primary' }}>
            Skapa ny produkt
          </Typography>
        </Breadcrumbs>
        <CategoryProvider>
          <div className='flex flex-row pt-24'>
            <ProgressBar />
            <ProductForm projectId={slug} />
          </div>
        </CategoryProvider>
      </div>
    </>
  )
}

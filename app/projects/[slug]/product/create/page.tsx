import ProductForm from '@/components/ProductForm'
import { CategoryProvider } from '@/context/CategoryContext'
import ProgressBar from '@/components/ProgressBar'

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
      <div className='text-blue-400'>
        <CategoryProvider>
          <ProgressBar />
          <ProductForm projectId={slug} />
        </CategoryProvider>
      </div>
    </>
  )
}

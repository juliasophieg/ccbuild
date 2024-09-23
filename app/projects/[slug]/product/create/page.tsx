import ProductForm from '@/components/ProductForm'

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
        <ProductForm projectId={slug} />
      </div>
    </>
  )
}

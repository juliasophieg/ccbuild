import ProductForm from '@/components/ProductForm'

type PageProps = {
  params: {
    slug: string
  }
}

export default function Product({ params }: PageProps) {
  const { slug } = params

  return (
    <>
      <div className='text-red-400'>
        <ProductForm projectSlug={slug} />
      </div>
    </>
  )
}

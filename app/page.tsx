export default async function Home() {
  const fetchProducts = async () => {
    const res = await fetch('/api/products')
    if (!res.ok) {
      throw new Error('Failed to fetch products')
    }
    return res.json()
  }

  const fetchProjects = async () => {
    const res = await fetch('/api/projects')
    if (!res.ok) {
      throw new Error('Failed to fetch projects')
    }
    return res.json()
  }

  const products: Array<{
    _id: string
    generalInformation: { productName: string; productCategory1?: string }
  }> = await fetchProducts()
  const projects: Array<{
    _id: string
    name: string
    description: string
    date: string
  }> = await fetchProjects()

  return (
    <div className='flex w-screen flex-row'>
      <div className='flex-grow bg-green-400'>
        {products.map(product => (
          <div key={product._id} className='my-2'>
            <h1 className='font-bold'>
              {product.generalInformation.productName}
            </h1>
            <p>
              Category: {product.generalInformation.productName} »{' '}
              {product.generalInformation.productCategory1} »{' '}
            </p>
          </div>
        ))}
      </div>

      <div className='flex-grow bg-blue-400'>
        {projects.map(project => (
          <div key={project._id} className='my-2'>
            <h1 className='font-bold'>{project.name}</h1>
            <p>{project.description}</p>
            <p>{new Date(project.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

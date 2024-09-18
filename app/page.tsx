import { Button } from '@mui/material'
import { addProduct, getProduct } from '@/actions/productAction'
import { getProject } from '@/actions/projectAction'
import Link from 'next/link'

export default async function Home() {
  const products = await getProduct()
  const projects = await getProject()

  return (
    <>
      <div className='flex w-screen flex-row'>
        <div className='flex-grow bg-green-400'>
          {products.map(product => (
            <div key={product._id} className='my-2'>
              <h1 className='font-bold'>{product.name}</h1>
              <p>
                Category: {product.category.mainCategory} »{' '}
                {product.category.subCategory} »{' '}
                {product.category.subSubCategory}
              </p>
              <p>
                Modell: {product.productInfo.manufacturer} (
                {product.productInfo.yearOfManufacturing})
              </p>
              <p>Condition: {product.condition}/5</p>
            </div>
          ))}
        </div>

        <div className='flex-grow bg-blue-400'>
          {projects.map(project => (
            <div key={project._id} className='my-2'>
              <h1 className='font-bold'>{project.name}</h1>
              <p>{project.description}</p>
              <p>{project.date.toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>

      <Link href={`/product`}>
        <Button variant='contained' color='primary'>
          Create Product
        </Button>
      </Link>
    </>
  )
}

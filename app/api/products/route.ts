import { NextRequest, NextResponse } from 'next/server'
import { getProduct, addProduct } from '@/actions/productAction'

export async function GET(req: NextRequest) {
  const products = await getProduct()

  const productsJson = products.map(product => {
    return product
  })

  return NextResponse.json(productsJson)
}

export async function POST(req: NextRequest) {
  try {
    const productData = await req.json()

    const savedProduct = await addProduct(productData)

    return NextResponse.json({
      message: 'Product added successfully',
      product: savedProduct,
    })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: 'Failed to add product', error: error.message },
        { status: 500 },
      )
    } else {
      return NextResponse.json(
        { message: 'Failed to add product', error: 'Unknown error' },
        { status: 500 },
      )
    }
  }
}

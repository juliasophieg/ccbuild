import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getProductByProject, patchProduct } from '@/actions/productAction'
import mongoose from 'mongoose'

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
): Promise<NextResponse> {
  const slug = params.slug

  const project = await getProductByProject(slug)

  return NextResponse.json(project)
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { slug: string } },
): Promise<NextResponse> {
  const productId = params.slug

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return NextResponse.json({ message: 'Invalid product ID' }, { status: 400 })
  }

  try {
    const productData = await req.json()

    const updatedProduct = await patchProduct(productId, productData)

    return NextResponse.json({
      message: 'Product updated successfully',
      product: updatedProduct,
    })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: 'Failed to update product', error: error.message },
        { status: 500 },
      )
    } else {
      return NextResponse.json(
        { message: 'Failed to update product', error: 'Unknown error' },
        { status: 500 },
      )
    }
  }
}

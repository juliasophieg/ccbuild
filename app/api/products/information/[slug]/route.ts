import { NextRequest, NextResponse } from 'next/server'
import { getProductById } from '@/actions/productAction'
import mongoose from 'mongoose'

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: { slug: string }
  },
): Promise<NextResponse> {
  const slug = params.slug

  const product = await getProductById(slug)

  return NextResponse.json(product)
}

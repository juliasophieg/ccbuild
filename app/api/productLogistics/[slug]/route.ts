import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getProductVarientByProduct } from '@/actions/productLogisticAction'
import mongoose from 'mongoose'

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
): Promise<NextResponse> {
  const slug = params.slug

  const products = await getProductVarientByProduct(slug)

  return NextResponse.json(products)
}

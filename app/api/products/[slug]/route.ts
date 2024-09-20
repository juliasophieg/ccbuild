import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getProductByProject } from '@/actions/productAction'

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
): Promise<NextResponse> {
  const slug = params.slug

  const project = await getProductByProject(slug)

  return NextResponse.json(project)
}

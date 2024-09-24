import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getProjectById } from '@/actions/projectAction'

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
): Promise<NextResponse> {
  const slug = params.slug

  const project = await getProjectById(slug)

  return NextResponse.json(project)
}

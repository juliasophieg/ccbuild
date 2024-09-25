'use client'

import React from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProjectSchema, ProjectFormData } from '@/schemas'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

const CreateProject: React.FC = () => {
  const { session, isAuthenticated } = useAuth()

  if (!isAuthenticated || !session) {
    console.log('User not authenticated')
  } else {
    console.log('User authenticated:', session.user)
  }

  const userId = session?.user?.id

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(ProjectSchema),
    mode: 'all',
    defaultValues: {
      userId: userId,
      date: new Date(),
      name: '',
      description: '',
    },
  })

  const { register, handleSubmit } = form
  const router = useRouter()

  const onSubmit: SubmitHandler<ProjectFormData> = async data => {
    console.log('Form Data Submitted:', data)
    try {
      const response = await fetch(
        'https://ccbuild-project.vercel.app/api/projects',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      )

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Error from API:', errorData)
        throw new Error(
          errorData.message || 'An error occurred while adding project',
        )
      }

      const result = await response.json()

      if (result.success) {
        router.push('/projects')
      } else {
        throw new Error(result.message || 'Failed to add project')
      }
    } catch (error) {
      console.error('Error in onSubmit:', error)
    }
  }

  return (
    <div className='mx-auto max-w-lg p-4'>
      <h1 className='mb-4 text-2xl font-bold text-blue-500'>
        Create New Project
      </h1>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              Project Name
            </label>
            <input
              id='name'
              {...register('name', { required: 'Project name is required' })}
              className={`w-full rounded-md border p-2`}
              placeholder='Enter project name'
            />
          </div>

          <div>
            <label
              htmlFor='description'
              className='block text-sm font-medium text-gray-700'
            >
              Project Description
            </label>
            <textarea
              id='description'
              {...register('description', {
                required: 'Project description is required',
              })}
              className={`w-full rounded-md border p-2`}
              placeholder='Enter project description'
            />
          </div>

          <input type='hidden' {...register('date')} />

          <div>
            <button
              type='submit'
              className='w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
            >
              Create Project
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default CreateProject

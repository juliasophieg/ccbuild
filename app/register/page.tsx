'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { UserSchema } from '@/schemas'
import { useRouter } from 'next/navigation'
import { Button, Box, TextField } from '@mui/material'

type RegisterForm = z.infer<typeof UserSchema>

export default function Register() {
  const form = useForm<RegisterForm>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const {
    formState: { errors },
  } = form

  const router = useRouter()

  const onSubmit = async (data: RegisterForm) => {
    try {
      const response = await fetch(
        'https://ccbuild-project.vercel.app/api/users',
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
          errorData.message || 'An error occurred while registering',
        )
      }

      const result = await response.json()

      if (result.success) {
        router.push('/login')
      } else {
        throw new Error(result.message || 'Registration failed')
      }
    } catch (error) {
      console.error('Error in onSubmit:', error)
    }
  }

  return (
    <div className='my-14 flex w-full items-center justify-center'>
      <div className='w-96 rounded-md border border-solid border-gray-200 px-12 py-7'>
        <h1 className='mb-4 text-center'>Skapa konto</h1>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex flex-col items-center gap-4'>
            <div className='my-1 flex w-full flex-col'>
              <label
                htmlFor='name'
                className='text-sm font-medium text-gray-700'
              >
                Namn
              </label>{' '}
              <TextField
                id='outlined-size-small'
                placeholder='För- och efternamn'
                type='text'
                size='small'
                {...form.register('name')}
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ''}
                className='w-full'
              />
            </div>
            <div className='my-1 flex w-full flex-col'>
              <label
                htmlFor='email'
                className='text-sm font-medium text-gray-700'
              >
                Mailadress
              </label>
              <TextField
                id='outlined-size-small'
                placeholder='exempel@mail.se'
                type='email'
                size='small'
                {...form.register('email')}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
                className='w-full'
              />
            </div>

            <div className='my-1 flex w-full flex-col'>
              <label
                htmlFor='password'
                className='text-sm font-medium text-gray-700'
              >
                Lösenord
              </label>
              <TextField
                id='outlined-size-small'
                placeholder='•••••••••'
                type='password'
                size='small'
                {...form.register('password')}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ''}
                className='w-full'
              />
            </div>

            <Button type='submit' variant='contained' className='mt-2 w-full'>
              Skapa konto
            </Button>
            <p>
              Har du redan ett konto?{' '}
              <a href='/login' className='underline-offset-3 underline'>
                Logga in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

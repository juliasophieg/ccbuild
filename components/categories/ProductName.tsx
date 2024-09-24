'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ProductFormData } from '@/schemas'

const NameForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  return (
    <fieldset>
      <div>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          type='text'
          {...register('name')}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && <p className='error'>{errors.name.message}</p>}
      </div>
    </fieldset>
  )
})

export default NameForm

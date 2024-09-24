'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ProductFormData } from '@/schemas'

const PropertiesForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  return (
    <fieldset>
      <legend>Properties</legend>
      <div>
        <label htmlFor='material'>Material:</label>
        <input
          id='material'
          type='text'
          {...register('properties.material')}
          aria-invalid={errors.properties?.material ? 'true' : 'false'}
        />
        {errors.properties?.material && (
          <p className='error'>{errors.properties.material.message}</p>
        )}
      </div>
      <div>
        <label htmlFor='color'>Color:</label>
        <input
          id='color'
          type='text'
          {...register('properties.color')}
          aria-invalid={errors.properties?.color ? 'true' : 'false'}
        />
        {errors.properties?.color && (
          <p className='error'>{errors.properties.color.message}</p>
        )}
      </div>
      <div>
        <label htmlFor='surfaceTreatment'>Surface Treatment:</label>
        <input
          id='surfaceTreatment'
          type='text'
          {...register('properties.surfaceTreatment')}
          aria-invalid={errors.properties?.surfaceTreatment ? 'true' : 'false'}
        />
        {errors.properties?.surfaceTreatment && (
          <p className='error'>{errors.properties.surfaceTreatment.message}</p>
        )}
      </div>
    </fieldset>
  )
})

export default PropertiesForm

'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ProductFormData } from '@/schemas'

const ConditionForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  return (
    <fieldset>
      <legend>Condition</legend>
      <div>
        <label htmlFor='condition'>Condition:</label>
        <input
          id='condition'
          type='number'
          {...register('condition', {
            setValueAs: value => parseInt(value, 10),
          })}
          aria-invalid={errors.condition ? 'true' : 'false'}
        />
        {errors.condition && (
          <p className='error'>{errors.condition.message}</p>
        )}
      </div>
    </fieldset>
  )
})

export default ConditionForm

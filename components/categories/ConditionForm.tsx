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
        <label htmlFor='functionalCondition'>Functional Condition:</label>
        <input
          id='functionalCondition'
          type='number'
          {...register('condition.functionalCondition')}
          aria-invalid={
            errors.condition?.functionalCondition ? 'true' : 'false'
          }
        />
      </div>
      <div>
        <label htmlFor='functionalCondition'>Functional Condition:</label>
        <input
          id='functionalCondition'
          type='text'
          {...register('condition.functionalCondition')}
          aria-invalid={
            errors.condition?.functionalCondition ? 'true' : 'false'
          }
        />
        {errors.condition?.functionalCondition && (
          <p className='error'>
            {errors.condition.functionalCondition.message}
          </p>
        )}
      </div>
    </fieldset>
  )
})

export default ConditionForm

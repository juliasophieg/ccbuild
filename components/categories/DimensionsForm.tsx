'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ProductFormData } from '@/schemas'

const DimensionsForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  return (
    <fieldset>
      <legend>Dimensions</legend>

      <div>
        <label htmlFor='measurementUnit'>Measurement Unit:</label>
        <select
          id='measurementUnit'
          {...register('dimensions.measurementUnit')}
          aria-invalid={errors.dimensions?.measurementUnit ? 'true' : 'false'}
        >
          <option value=''>Select Unit</option>
          <option value='mm'>mm</option>
          <option value='cm'>cm</option>
          <option value='m'>m</option>
          <option value='in'>in</option>
          <option value='ft'>ft</option>
        </select>
        {errors.dimensions?.measurementUnit && (
          <p className='error'>{errors.dimensions.measurementUnit.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='width'>Width:</label>
        <input
          id='width'
          type='number'
          {...register('dimensions.width', {
            setValueAs: value => parseFloat(value),
          })}
          aria-invalid={errors.dimensions?.width ? 'true' : 'false'}
        />
        {errors.dimensions?.width && (
          <p className='error'>{errors.dimensions.width.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='height'>Height:</label>
        <input
          id='height'
          type='number'
          {...register('dimensions.height', {
            setValueAs: value => parseFloat(value),
          })}
          aria-invalid={errors.dimensions?.height ? 'true' : 'false'}
        />
        {errors.dimensions?.height && (
          <p className='error'>{errors.dimensions.height.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='depth'>Depth:</label>
        <input
          id='depth'
          type='number'
          {...register('dimensions.depth', {
            setValueAs: value => parseFloat(value),
          })}
          aria-invalid={errors.dimensions?.depth ? 'true' : 'false'}
        />
        {errors.dimensions?.depth && (
          <p className='error'>{errors.dimensions.depth.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='weightUnit'>Weight Unit:</label>
        <select
          id='weightUnit'
          {...register('dimensions.weightUnit')}
          aria-invalid={errors.dimensions?.weightUnit ? 'true' : 'false'}
        >
          <option value=''>Select Unit</option>
          <option value='kg'>kg</option>
          <option value='g'>g</option>
          <option value='lbs'>lbs</option>
        </select>
        {errors.dimensions?.weightUnit && (
          <p className='error'>{errors.dimensions.weightUnit.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='weightPerUnit'>Weight per Unit:</label>
        <input
          id='weightPerUnit'
          type='number'
          {...register('dimensions.weightPerUnit', {
            setValueAs: value => parseFloat(value),
          })}
          aria-invalid={errors.dimensions?.weightPerUnit ? 'true' : 'false'}
        />
        {errors.dimensions?.weightPerUnit && (
          <p className='error'>{errors.dimensions.weightPerUnit.message}</p>
        )}
      </div>
    </fieldset>
  )
})

export default DimensionsForm

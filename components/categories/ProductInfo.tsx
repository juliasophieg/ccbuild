'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ProductFormData } from '@/schemas'

const ProductInfoForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  return (
    <fieldset>
      <legend>Product</legend>

      <div>
        <label htmlFor='manufacturer'>Manufacturer:</label>
        <input
          id='manufacturer'
          type='string'
          {...register('productInfo.manufacturer')}
          aria-invalid={errors.productInfo?.manufacturer ? 'true' : 'false'}
        />
        {errors.productInfo?.manufacturer && (
          <p className='error'>{errors.productInfo.manufacturer.message}</p>
        )}
      </div>
      <div>
        <label htmlFor='yearOfManufacturing'>Year of Manufacturing:</label>
        <input
          id='yearOfManufacturing'
          type='number'
          {...register('productInfo.yearOfManufacturing', {
            setValueAs: value => parseInt(value, 10),
          })}
          aria-invalid={
            errors.productInfo?.yearOfManufacturing ? 'true' : 'false'
          }
        />
        {errors.productInfo?.yearOfManufacturing && (
          <p className='error'>
            {errors.productInfo.yearOfManufacturing.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor='articleNumber'>Article Number:</label>
        <input
          id='articleNumber'
          type='number'
          {...register('productInfo.articleNumber', {
            setValueAs: value => parseInt(value, 10),
          })}
          aria-invalid={errors.productInfo?.articleNumber ? 'true' : 'false'}
        />
        {errors.productInfo?.articleNumber && (
          <p className='error'>{errors.productInfo.articleNumber.message}</p>
        )}
      </div>
    </fieldset>
  )
})

export default ProductInfoForm

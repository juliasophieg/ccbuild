'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ProductFormData } from '@/schemas'

const GeneralForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  return (
    <fieldset>
      <div>
        <label htmlFor='productName'>Product Name:</label>
        <input
          id='productName'
          type='text'
          {...register('generalInformation.productName')}
          aria-invalid={
            errors.generalInformation?.productName ? 'true' : 'false'
          }
        />
        {errors.generalInformation?.productName && (
          <p className='error'>
            {errors.generalInformation.productName.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor='productCategory1'>Product Category 1:</label>
        <input
          id='productCategory1'
          type='text'
          {...register('generalInformation.productCategory1')}
          aria-invalid={
            errors.generalInformation?.productCategory1 ? 'true' : 'false'
          }
        />
        {errors.generalInformation?.productCategory1 && (
          <p className='error'>
            {errors.generalInformation.productCategory1.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor='productCategory2'>Product Category 2:</label>
        <input
          id='productCategory2'
          type='text'
          {...register('generalInformation.productCategory2')}
          aria-invalid={
            errors.generalInformation?.productCategory2 ? 'true' : 'false'
          }
        />
        {errors.generalInformation?.productCategory2 && (
          <p className='error'>
            {errors.generalInformation.productCategory2.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor='productCategory3'>Product Category 3:</label>
        <input
          id='productCategory3'
          type='text'
          {...register('generalInformation.productCategory3')}
          aria-invalid={
            errors.generalInformation?.productCategory3 ? 'true' : 'false'
          }
        />
        {errors.generalInformation?.productCategory3 && (
          <p className='error'>
            {errors.generalInformation.productCategory3.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor='productDescription'>Product Description:</label>
        <textarea
          id='productDescription'
          {...register('generalInformation.productDescription')}
          aria-invalid={
            errors.generalInformation?.productDescription ? 'true' : 'false'
          }
        />
        {errors.generalInformation?.productDescription && (
          <p className='error'>
            {errors.generalInformation.productDescription.message}
          </p>
        )}
      </div>
    </fieldset>
  )
})

export default GeneralForm

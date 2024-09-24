'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ProductFormData } from '@/schemas'

const ProductInformationForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  return (
    <fieldset>
      <legend>Product Information</legend>

      <div>
        <label htmlFor='manufacturer'>Manufacturer:</label>
        <input
          id='manufacturer'
          type='text'
          {...register('productInformation.manufacturer')}
          aria-invalid={
            errors.productInformation?.manufacturer ? 'true' : 'false'
          }
        />
        {errors.productInformation?.manufacturer && (
          <p className='error'>
            {errors.productInformation.manufacturer.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor='articleNumber'>Article Number:</label>
        <input
          id='articleNumber'
          type='text'
          {...register('productInformation.articleNumber')}
          aria-invalid={
            errors.productInformation?.articleNumber ? 'true' : 'false'
          }
        />
        {errors.productInformation?.articleNumber && (
          <p className='error'>
            {errors.productInformation.articleNumber.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor='manufacturingYear'>Manufacturing Year:</label>
        <input
          id='manufacturingYear'
          type='number'
          {...register('productInformation.manufacturingYear', {
            setValueAs: value => parseFloat(value),
          })}
          aria-invalid={
            errors.productInformation?.manufacturingYear ? 'true' : 'false'
          }
        />
        {errors.productInformation?.manufacturingYear && (
          <p className='error'>
            {errors.productInformation.manufacturingYear.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor='purchaseYear'>Purchase Year:</label>
        <input
          id='purchaseYear'
          type='number'
          {...register('productInformation.purchaseYear', {
            setValueAs: value => parseFloat(value),
          })}
          aria-invalid={
            errors.productInformation?.purchaseYear ? 'true' : 'false'
          }
        />
        {errors.productInformation?.purchaseYear && (
          <p className='error'>
            {errors.productInformation.purchaseYear.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor='GTIN'>GTIN:</label>
        <input
          id='GTIN'
          type='text'
          {...register('productInformation.GTIN')}
          aria-invalid={errors.productInformation?.GTIN ? 'true' : 'false'}
        />
        {errors.productInformation?.GTIN && (
          <p className='error'>{errors.productInformation.GTIN.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='RSK'>RSK:</label>
        <input
          id='RSK'
          type='text'
          {...register('productInformation.RSK')}
          aria-invalid={errors.productInformation?.RSK ? 'true' : 'false'}
        />
        {errors.productInformation?.RSK && (
          <p className='error'>{errors.productInformation.RSK.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='ENR'>E-NR:</label>
        <input
          id='ENR'
          type='text'
          {...register('productInformation.ENR')}
          aria-invalid={errors.productInformation?.ENR ? 'true' : 'false'}
        />
        {errors.productInformation?.ENR && (
          <p className='error'>{errors.productInformation.ENR.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='BSAB'>BSAB:</label>
        <input
          id='BSAB'
          type='text'
          {...register('productInformation.BSAB')}
          aria-invalid={errors.productInformation?.BSAB ? 'true' : 'false'}
        />
        {errors.productInformation?.BSAB && (
          <p className='error'>{errors.productInformation.BSAB.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='BK04'>BK04:</label>
        <input
          id='BK04'
          type='text'
          {...register('productInformation.BK04')}
          aria-invalid={errors.productInformation?.BK04 ? 'true' : 'false'}
        />
        {errors.productInformation?.BK04 && (
          <p className='error'>{errors.productInformation.BK04.message}</p>
        )}
      </div>
    </fieldset>
  )
})

export default ProductInformationForm

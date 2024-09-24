'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ProductFormData } from '@/schemas'

const PriceForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  return (
    <fieldset>
      <legend>Price</legend>

      <div>
        <label htmlFor='internalPrice'>Internal Price:</label>
        <input
          id='internalPrice'
          type='number'
          {...register('price.internalPrice', {
            setValueAs: value => parseFloat(value),
          })}
          aria-invalid={errors.price?.internalPrice ? 'true' : 'false'}
        />
        {errors.price?.internalPrice && (
          <p className='error'>{errors.price.internalPrice.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='externalPrice'>External Price:</label>
        <input
          id='externalPrice'
          type='number'
          {...register('price.externalPrice', {
            setValueAs: value => parseFloat(value),
          })}
          aria-invalid={errors.price?.externalPrice ? 'true' : 'false'}
        />
        {errors.price?.externalPrice && (
          <p className='error'>{errors.price.externalPrice.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='buyerPrice'>Buyer Price:</label>
        <input
          id='buyerPrice'
          type='checkbox'
          {...register('price.buyerPrice')}
          aria-invalid={errors.price?.buyerPrice ? 'true' : 'false'}
        />
        {errors.price?.buyerPrice && (
          <p className='error'>{errors.price.buyerPrice.message}</p>
        )}
      </div>
    </fieldset>
  )
})

export default PriceForm

'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ProductFormData } from '@/schemas'

const AddressForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  return (
    <fieldset>
      <legend>Address</legend>

      <div>
        <label htmlFor='address'>Address:</label>
        <input
          id='address'
          type='text'
          {...register('address.address')}
          aria-invalid={errors.address?.address ? 'true' : 'false'}
        />
        {errors.address?.address && (
          <p className='error'>{errors.address.address.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='postalCode'>Postal Code:</label>
        <input
          id='postalCode'
          type='text'
          {...register('address.postalCode')}
          aria-invalid={errors.address?.postalCode ? 'true' : 'false'}
        />
        {errors.address?.postalCode && (
          <p className='error'>{errors.address.postalCode.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='city'>City:</label>
        <input
          id='city'
          type='text'
          {...register('address.city')}
          aria-invalid={errors.address?.city ? 'true' : 'false'}
        />
        {errors.address?.city && (
          <p className='error'>{errors.address.city.message}</p>
        )}
      </div>
    </fieldset>
  )
})

export default AddressForm

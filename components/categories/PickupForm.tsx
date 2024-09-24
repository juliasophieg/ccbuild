'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ProductFormData } from '@/schemas'

const PickupForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  return (
    <fieldset>
      <legend>Pickup Information</legend>

      <div>
        <label htmlFor='availableDate'>Available Date:</label>
        <input
          id='availableDate'
          type='date'
          {...register('pickup.availableDate', {
            setValueAs: value => new Date(value),
          })}
          aria-invalid={errors.pickup?.availableDate ? 'true' : 'false'}
        />
        {errors.pickup?.availableDate && (
          <p className='error'>{errors.pickup.availableDate.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='firstDeliveryDate'>First Delivery Date:</label>
        <input
          id='firstDeliveryDate'
          type='date'
          {...register('pickup.firstDeliveryDate', {
            setValueAs: value => new Date(value),
          })}
          aria-invalid={errors.pickup?.firstDeliveryDate ? 'true' : 'false'}
        />
        {errors.pickup?.firstDeliveryDate && (
          <p className='error'>{errors.pickup.firstDeliveryDate.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='canBeSent'>Can Be Sent:</label>
        <input
          id='canBeSent'
          type='checkbox'
          {...register('pickup.canBeSent')}
          aria-invalid={errors.pickup?.canBeSent ? 'true' : 'false'}
        />
        {errors.pickup?.canBeSent && (
          <p className='error'>{errors.pickup.canBeSent.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='canBePickedUp'>Can Be Picked Up:</label>
        <input
          id='canBePickedUp'
          type='checkbox'
          {...register('pickup.canBePickedUp')}
          aria-invalid={errors.pickup?.canBePickedUp ? 'true' : 'false'}
        />
        {errors.pickup?.canBePickedUp && (
          <p className='error'>{errors.pickup.canBePickedUp.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='contactPerson'>Contact Person:</label>
        <input
          id='contactPerson'
          type='text'
          {...register('pickup.contactPerson')}
          aria-invalid={errors.pickup?.contactPerson ? 'true' : 'false'}
        />
        {errors.pickup?.contactPerson && (
          <p className='error'>{errors.pickup.contactPerson.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='description'>Description:</label>
        <textarea
          id='description'
          {...register('pickup.description')}
          aria-invalid={errors.pickup?.description ? 'true' : 'false'}
        />
        {errors.pickup?.description && (
          <p className='error'>{errors.pickup.description.message}</p>
        )}
      </div>
    </fieldset>
  )
})

export default PickupForm

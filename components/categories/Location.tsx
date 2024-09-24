'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ProductFormData } from '@/schemas'

const LocationForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  return (
    <fieldset>
      <legend>Location</legend>
      <div>
        <label htmlFor='premises'>Premises:</label>
        <input
          id='premises'
          type='text'
          {...register('location.premises')}
          aria-invalid={errors.location?.premises ? 'true' : 'false'}
        />
        {errors.location?.premises && (
          <p className='error'>{errors.location.premises.message}</p>
        )}
      </div>
      <div>
        <label htmlFor='room'>Room:</label>
        <input
          id='room'
          type='text'
          {...register('location.room')}
          aria-invalid={errors.location?.room ? 'true' : 'false'}
        />
        {errors.location?.room && (
          <p className='error'>{errors.location.room.message}</p>
        )}
      </div>
      <div>
        <label htmlFor='place'>Place:</label>
        <input
          id='place'
          type='text'
          {...register('location.place')}
          aria-invalid={errors.location?.place ? 'true' : 'false'}
        />
        {errors.location?.place && (
          <p className='error'>{errors.location.place.message}</p>
        )}
      </div>
      <div>
        <label htmlFor='accessibility'>Accessibility:</label>
        <select
          id='accessibility'
          {...register('location.accessibility')}
          aria-invalid={errors.location?.accessibility ? 'true' : 'false'}
        >
          <option value=''>Select Accessibility</option>
          <option value='Lätt Åtkomlig'>Lätt Åtkomlig</option>
          <option value='Åtkomlig men planering och specialverktyg kan krävas'>
            Åtkomlig men planering och specialverktyg kan krävas
          </option>
          <option value='Begränsad åtkomlighet'>Begränsad åtkomlighet</option>
        </select>
        {errors.location?.accessibility && (
          <p className='error'>{errors.location.accessibility.message}</p>
        )}
      </div>
      <div>
        <label htmlFor='dismantling'>Dismantling:</label>
        <select
          id='dismantling'
          {...register('location.dismantling')}
          aria-invalid={errors.location?.dismantling ? 'true' : 'false'}
        >
          <option value=''>Select Dismantling</option>
          <option value='Enkel att demontera/demontering krävs ej'>
            Enkel att demontera/demontering krävs ej
          </option>
          <option value='Demonterbar men specialverktyg kan krävas'>
            Demonterbar men specialverktyg kan krävas
          </option>
          <option value='Begränsad demonterbarhet'>
            Begränsad demonterbarhet
          </option>
        </select>
        {errors.location?.dismantling && (
          <p className='error'>{errors.location.dismantling.message}</p>
        )}
      </div>
    </fieldset>
  )
})

export default LocationForm

// components/ProductLogisticForm.tsx
'use client'

import React from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProductLogisticSchema } from '@/schemas'
import { z } from 'zod'

type ProductLogisticData = z.infer<typeof ProductLogisticSchema>

interface ProductLogisticFormProps {
  onSubmit: (data: ProductLogisticData) => void
  onCancel: () => void
}

const ProductLogisticForm: React.FC<ProductLogisticFormProps> = ({
  onSubmit,
  onCancel,
}) => {
  const methods = useForm<ProductLogisticData>({
    resolver: zodResolver(ProductLogisticSchema),
    defaultValues: {
      quantity: 1,
      marketplaces: 'Ej publicerad',
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods

  const submitHandler: SubmitHandler<ProductLogisticData> = data => {
    onSubmit(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitHandler)}>
        {/* Pickup Fields */}
        <fieldset>
          <legend>Pickup</legend>
          <div>
            <label htmlFor='availableDate'>Available Date:</label>
            <input
              id='availableDate'
              type='date'
              {...register('pickup.availableDate')}
            />
          </div>
          <div>
            <label htmlFor='firstDeliveryDate'>First Delivery Date:</label>
            <input
              id='firstDeliveryDate'
              type='date'
              {...register('pickup.firstDeliveryDate')}
            />
          </div>
        </fieldset>

        {/* Location Fields */}
        <fieldset>
          <legend>Location</legend>
          <div>
            <label htmlFor='house'>House:</label>
            <input id='house' type='text' {...register('location.house')} />
          </div>
          <div>
            <label htmlFor='room'>Room:</label>
            <input id='room' type='text' {...register('location.room')} />
          </div>
          <div>
            <label htmlFor='location'>Location:</label>
            <input
              id='location'
              type='text'
              {...register('location.location')}
            />
          </div>
          <div>
            <label htmlFor='accesaibility'>Accesibility:</label>
            <select id='accesaibility' {...register('location.accesaibility')}>
              <option value=''>Select...</option>
              <option value='Lätt Åtkomlig'>Lätt Åtkomlig</option>
              <option value='Åtkomlig men planering och specialverktyg kan krävas'>
                Åtkomlig men planering och specialverktyg kan krävas
              </option>
              <option value='Begränsad åtkomlighet'>
                Begränsad åtkomlighet
              </option>
            </select>
          </div>
          <div>
            <label htmlFor='dismantling'>Dismantling:</label>
            <select id='dismantling' {...register('location.dismantling')}>
              <option value=''>Select...</option>
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
          </div>
        </fieldset>

        {/* Decision Fields */}
        <fieldset>
          <legend>Decision</legend>
          <div>
            <label htmlFor='location1'>Location 1:</label>
            <input
              id='location1'
              type='text'
              {...register('decision.location1')}
            />
          </div>
          <div>
            <label htmlFor='location2'>Location 2:</label>
            <input
              id='location2'
              type='text'
              {...register('decision.location2')}
            />
          </div>
          <div>
            <label htmlFor='location3'>Location 3:</label>
            <input
              id='location3'
              type='text'
              {...register('decision.location3')}
            />
          </div>
          <div>
            <label htmlFor='location4'>Location 4:</label>
            <input
              id='location4'
              type='text'
              {...register('decision.location4')}
            />
          </div>
        </fieldset>

        <div>
          <label htmlFor='quantity'>Quantity:</label>
          <input
            id='quantity'
            type='number'
            {...register('quantity', { valueAsNumber: true })}
          />
        </div>

        <div>
          <label htmlFor='status'>Status:</label>
          <select id='status' {...register('status')}>
            <option value=''>Select...</option>
            <option value='Inventerad'>Inventerad</option>
          </select>
        </div>

        <div>
          <label htmlFor='marketplaces'>Marketplaces:</label>
          <select id='marketplaces' {...register('marketplaces')}>
            <option value='Ej publicerad'>Ej publicerad</option>
          </select>
        </div>

        <div className='form-actions'>
          <button type='button' onClick={onCancel}>
            Cancel
          </button>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </FormProvider>
  )
}

export default ProductLogisticForm

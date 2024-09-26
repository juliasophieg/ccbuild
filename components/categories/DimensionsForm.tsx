'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ProductFormData } from '@/schemas'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

const DimensionsForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  return (
    <fieldset className='flex flex-col gap-4'>
      <h3 className='text-lg'>Mått</h3>

      <div className='flex w-full gap-4'>
        <TextField
          required
          className='w-1/4'
          select
          label='Måttenhet'
          variant='outlined'
          size='small'
          id='measurementUnit'
          {...register('dimensions.measurementUnit')}
          aria-invalid={errors.dimensions?.measurementUnit ? 'true' : 'false'}
          error={!!errors.dimensions?.measurementUnit}
          helperText={errors.dimensions?.measurementUnit?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        >
          <MenuItem value=''>Select Unit</MenuItem>
          <MenuItem value='mm'>mm</MenuItem>
          <MenuItem value='cm'>cm</MenuItem>
          <MenuItem value='m'>m</MenuItem>
          <MenuItem value='in'>in</MenuItem>
          <MenuItem value='ft'>ft</MenuItem>
        </TextField>

        <TextField
          required
          className='w-1/4'
          label='Bredd'
          variant='outlined'
          size='small'
          type='number'
          id='width'
          {...register('dimensions.width', {
            setValueAs: value => parseFloat(value),
          })}
          aria-invalid={errors.dimensions?.width ? 'true' : 'false'}
          error={!!errors.dimensions?.width}
          helperText={errors.dimensions?.width?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        <TextField
          required
          className='w-1/4'
          label='Höjd'
          variant='outlined'
          size='small'
          type='number'
          id='height'
          {...register('dimensions.height', {
            setValueAs: value => parseFloat(value),
          })}
          aria-invalid={errors.dimensions?.height ? 'true' : 'false'}
          error={!!errors.dimensions?.height}
          helperText={errors.dimensions?.height?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        <TextField
          required
          className='w-1/4'
          label='Djup'
          variant='outlined'
          size='small'
          type='number'
          id='depth'
          {...register('dimensions.depth', {
            setValueAs: value => parseFloat(value),
          })}
          aria-invalid={errors.dimensions?.depth ? 'true' : 'false'}
          error={!!errors.dimensions?.depth}
          helperText={errors.dimensions?.depth?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
      </div>

      <div className='mt-4 flex gap-4'>
        <TextField
          required
          className='w-1/4'
          select
          label='Weight Unit'
          variant='outlined'
          size='small'
          id='weightUnit'
          {...register('dimensions.weightUnit')}
          aria-invalid={errors.dimensions?.weightUnit ? 'true' : 'false'}
          error={!!errors.dimensions?.weightUnit}
          helperText={errors.dimensions?.weightUnit?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        >
          <MenuItem value=''>Select Unit</MenuItem>
          <MenuItem value='kg'>kg</MenuItem>
          <MenuItem value='g'>g</MenuItem>
          <MenuItem value='lbs'>lbs</MenuItem>
        </TextField>

        <TextField
          required
          className='w-3/4'
          label='Weight per Unit'
          variant='outlined'
          size='small'
          type='number'
          id='weightPerUnit'
          {...register('dimensions.weightPerUnit', {
            setValueAs: value => parseFloat(value),
          })}
          aria-invalid={errors.dimensions?.weightPerUnit ? 'true' : 'false'}
          error={!!errors.dimensions?.weightPerUnit}
          helperText={errors.dimensions?.weightPerUnit?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
      </div>
    </fieldset>
  )
})

export default DimensionsForm

'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ProductFormData } from '@/schemas'
import { useCategoryContext } from '@/context/CategoryContext'

const ChairForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  return (
    <div>
      <label htmlFor='chairProperty'>Chair Specific Property:</label>
      <input
        id='chairProperty'
        type='text'
        {...register('specialProperties.chairProperty')}
        aria-invalid={
          errors.specialProperties?.chairProperty ? 'true' : 'false'
        }
      />
    </div>
  )
}

const TableForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  return (
    <div>
      <label htmlFor='tableProperty'>Table Specific Property:</label>
      <input
        id='tableProperty'
        type='text'
        {...register('specialProperties.tableProperty')}
        aria-invalid={
          errors.specialProperties?.tableProperty ? 'true' : 'false'
        }
      />
    </div>
  )
}

const HouseForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>()

  return (
    <div>
      <label htmlFor='houseProperty'>House Specific Property:</label>
      <input
        id='houseProperty'
        type='text'
        {...register('specialProperties.houseProperty')}
        aria-invalid={
          errors.specialProperties?.houseProperty ? 'true' : 'false'
        }
      />
    </div>
  )
}

const SpecialForm: React.FC = React.memo(() => {
  const { selectedCategory1 } = useCategoryContext()

  const renderCategorySpecificForm = () => {
    switch (selectedCategory1) {
      case 'chair':
        return <ChairForm />
      case 'table':
        return <TableForm />
      case 'house':
        return <HouseForm />
      default:
        return null
    }
  }

  return (
    <fieldset>
      <legend>Special</legend>
      {renderCategorySpecificForm()}
    </fieldset>
  )
})

export default SpecialForm

import React, { useState } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { useCategoryContext } from '@/context/CategoryContext'
import { ProductFormData } from '@/schemas'

const DynamicForm: React.FC = () => {
  const { control, watch, setValue } = useFormContext<ProductFormData>()
  const { setSelectedCategory1 } = useCategoryContext()

  const [showSecondForm, setShowSecondForm] = useState(false)
  const [showThirdForm, setShowThirdForm] = useState(false)

  const firstCategory = watch('generalInformation.productCategory1')
  const secondCategory = watch('generalInformation.productCategory2')

  const secondFormOptions = {
    chair: ['Wooden Chair', 'Plastic Chair', 'Cushioned Chair'],
    table: ['Coffee Table', 'Dining Table', 'Study Table'],
    house: ['Apartment', 'Villa', 'Cottage'],
  }

  const thirdFormOptions = {
    'Wooden Chair': ['With Arms', 'Without Arms'],
    'Plastic Chair': ['Stackable', 'Non-stackable'],
    'Cushioned Chair': ['Leather Cushion', 'Fabric Cushion'],
    'Coffee Table': ['Round', 'Square'],
    'Dining Table': ['Wooden', 'Glass'],
    'Study Table': ['Small', 'Large'],
    Apartment: ['Studio', '2 Bedroom'],
    Villa: ['Single Floor', 'Double Floor'],
    Cottage: ['Traditional', 'Modern'],
  }

  return (
    <>
      <Controller
        control={control}
        name='generalInformation.productCategory1'
        render={({ field }) => (
          <div>
            <label>Product Category 1:</label>
            <select
              {...field}
              onChange={e => {
                field.onChange(e)
                setShowSecondForm(true)
                setShowThirdForm(false)
                setValue('generalInformation.productCategory2', '')
                setValue('generalInformation.productCategory3', '')
                setSelectedCategory1(e.target.value)
              }}
            >
              <option value=''>Select an option</option>
              <option value='chair'>Chair</option>
              <option value='table'>Table</option>
              <option value='house'>House</option>
            </select>
          </div>
        )}
      />

      {showSecondForm && firstCategory && (
        <Controller
          control={control}
          name='generalInformation.productCategory2'
          render={({ field }) => (
            <div>
              <label>Product Category 2:</label>
              <select
                {...field}
                onChange={e => {
                  field.onChange(e)
                  setShowThirdForm(true)
                  setValue('generalInformation.productCategory3', '')
                }}
              >
                <option value=''>Select an option</option>
                {secondFormOptions[
                  firstCategory as keyof typeof secondFormOptions
                ]?.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
        />
      )}
      {showThirdForm && secondCategory && (
        <Controller
          control={control}
          name='generalInformation.productCategory3'
          render={({ field }) => (
            <div>
              <label>Product Category 3:</label>
              <select {...field}>
                <option value=''>Select an option</option>
                {thirdFormOptions[
                  secondCategory as keyof typeof thirdFormOptions
                ]?.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
        />
      )}
    </>
  )
}

export default DynamicForm

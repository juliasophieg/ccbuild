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
    door: [
      'Altandörr',
      'Branddörr - glas',
      'Entréparti',
      'Innderdörr - glas',
      'Innderdörr - trä',
      'Skjutdörr',
      'Ytterdörr',
    ],
    window: [
      'Aluminiumbekklätt träfönster',
      'Aluminiumfönster',
      'Plast/PVC-fönster',
      'Plåtbeklätt träfönster',
      'Träfönster',
      'Gjutjärnsfönster',
      'Fönsterbänk',
    ],
    galler: [
      'Entregaller',
      'Fönstergaller',
      'Förrådsgaller',
      'Gallergrind',
      'Tillgänglighetsramp',
    ],
  }

  const thirdFormOptions = {
    Altandörr: ['Altandörr 1', 'Altandörr 2', 'Altandörr 3'],
    'Branddörr - glas': [
      'Branddörr - glas 1',
      'Branddörr - glas 2',
      'Branddörr - glas 3',
    ],
    Entréparti: ['Entréparti 1', 'Entréparti 2', 'Entréparti 3'],
    'Innderdörr - glas': [
      'Innderdörr - glas 1',
      'Innderdörr - glas 2',
      'Innderdörr - glas 3',
    ],
    'Innderdörr - trä': [
      'Innderdörr - trä 1',
      'Innderdörr - trä 2',
      'Innderdörr - trä 3',
    ],
    Skjutdörr: ['Skjutdörr 1', 'Skjutdörr 2', 'Skjutdörr 3'],
    Ytterdörr: ['Ytterdörr 1', 'Ytterdörr 2', 'Ytterdörr 3'],
    'Aluminiumbekklätt träfönster': [
      'Aluminiumbekklätt träfönster 1',
      'Aluminiumbekklätt träfönster 2',
      'Aluminiumbekklätt träfönster 3',
    ],
    Aluminiumfönster: [
      'Aluminiumfönster 1',
      'Aluminiumfönster 2',
      'Aluminiumfönster 3',
    ],
    'Plast/PVC-fönster': [
      'Plast/PVC-fönster 1',
      'Plast/PVC-fönster 2',
      'Plast/PVC-fönster 3',
    ],
    'Plåtbeklätt träfönster': [
      'Plåtbeklätt träfönster 1',
      'Plåtbeklätt träfönster 2',
      'Plåtbeklätt träfönster 3',
    ],
    Träfönster: ['Träfönster 1', 'Träfönster 2', 'Träfönster 3'],
    Gjutjärnsfönster: [
      'Gjutjärnsfönster 1',
      'Gjutjärnsfönster 2',
      'Gjutjärnsfönster 3',
    ],
    Fönsterbänk: ['Fönsterbänk 1', 'Fönsterbänk 2', 'Fönsterbänk 3'],
    Entregaller: ['Entregaller 1', 'Entregaller 2', 'Entregaller 3'],
    Fönstergaller: ['Fönstergaller 1', 'Fönstergaller 2', 'Fönstergaller 3'],
    Förrådsgaller: ['Förrådsgaller 1', 'Förrådsgaller 2', 'Förrådsgaller 3'],
    Gallergrind: ['Gallergrind 1', 'Gallergrind 2', 'Gallergrind 3'],
    Tillgänglighetsramp: [
      'Tillgänglighetsramp 1',
      'Tillgänglighetsramp 2',
      'Tillgänglighetsramp 3',
    ],
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
              <option value='door'>Dörr</option>
              <option value='window'>Fönster</option>
              <option value='galler'>Galleri & smide</option>
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

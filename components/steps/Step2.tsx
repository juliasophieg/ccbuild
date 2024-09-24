'use client'

import React from 'react'
import PropertiesForm from '../categories/PropertiesForm'
import DimensionsForm from '../categories/DimensionsForm'
import ProductInformationForm from '../categories/ProductInformationForm'

const Step2: React.FC = React.memo(() => {
  return (
    <div className='step'>
      <h2>Step 2: Product Info</h2>
      <PropertiesForm />
      <DimensionsForm />
      <ProductInformationForm />
    </div>
  )
})

export default Step2

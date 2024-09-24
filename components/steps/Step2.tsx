'use client'

import React from 'react'
import ProductInfoForm from '../categories/ProductInfo'
import ConditionForm from '../categories/Condition'

const Step2: React.FC = React.memo(() => {
  return (
    <div className='step'>
      <h2>Step 2: Product Info</h2>
      <ProductInfoForm />
      <ConditionForm />
    </div>
  )
})

export default Step2

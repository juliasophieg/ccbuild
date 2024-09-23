'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ProductLogisticData } from '@/schemas'

const ProductVarientForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductLogisticData>()

  return (
    <fieldset>
      <div></div>
    </fieldset>
  )
})

export default ProductVarientForm

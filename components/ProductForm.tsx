'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldPath,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProductSchema, ProductFormData } from '../schemas'
import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import { useRouter } from 'next/navigation'

const steps = [
  { id: 1, component: Step1, label: 'Location' },
  { id: 2, component: Step2, label: 'Product Info' },
  { id: 3, component: Step3, label: 'Format' },
]

const stepFields: { [key: number]: FieldPath<ProductFormData>[] } = {
  1: [
    'name',
    'locationInfo.firstLocation',
    'locationInfo.secondLocation',
    'locationInfo.thirdLocation',
    'category.mainCategory',
    'category.subCategory',
    'category.subSubCategory',
  ],
  2: [
    'productInfo.manufacturer',
    'productInfo.yearOfManufacturing',
    'productInfo.articleNumber',
    'condition',
  ],
  3: ['format.length', 'format.height', 'format.width'],
}

type ProductFormProps = {
  projectId: string
}

const ProductForm: React.FC<ProductFormProps> = ({ projectId }) => {
  const methods = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema),
    mode: 'all',
    defaultValues: {
      project: projectId,
    },
  })
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = steps.length
  const { handleSubmit, trigger } = methods
  const [productId, setProductId] = useState<string | null>(null)
  const router = useRouter()
  const isCreatingProduct = useRef(false)

  useEffect(() => {
    const existingProductId = sessionStorage.getItem('productId')

    if (existingProductId) {
      setProductId(existingProductId)
      console.log('Product ID from session storage:', existingProductId)
    } else if (!isCreatingProduct.current) {
      // Guard clause to ensure product creation is not triggered multiple times
      isCreatingProduct.current = true // Mark that the creation process is starting
      const createBlankProduct = async () => {
        try {
          const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ projectId }),
          })
          if (response.ok) {
            const data = await response.json()
            setProductId(data.product._id)
            sessionStorage.setItem('productId', data.product._id)
            console.log('Blank product created:', data.product._id)
            isCreatingProduct.current = false // Reset after creation is done
          } else {
            const errorData = await response.json()
            console.error('Error creating blank product:', errorData)
            isCreatingProduct.current = false // Reset on failure
          }
        } catch (error) {
          console.error('Network error:', error)
          isCreatingProduct.current = false // Reset on failure
        }
      }

      createBlankProduct()
    }
  }, [projectId])

  const onSubmit: SubmitHandler<ProductFormData> = async data => {
    if (!productId) {
      console.error('Product ID is not available')
      return
    }

    try {
      console.log('patch id', productId)
      const response = await fetch(`/api/products/${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        console.log('Success:', result.message)
        sessionStorage.removeItem('productId')
        router.push(`/projects/${projectId}`)
      } else {
        const errorData = await response.json()
        console.error('Server Error:', errorData)
      }
    } catch (error) {
      console.error('Network Error:', error)
    }
  }

  const nextStep = async () => {
    const currentStepFields = stepFields[currentStep]
    const isStepValid = await trigger(currentStepFields)
    if (isStepValid) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => prev - 1)
  }

  const CurrentStepComponent = steps.find(
    step => step.id === currentStep,
  )?.component

  if (!productId) {
    return <div>Loading...</div>
  }

  return (
    <FormProvider {...methods}>
      <div className='form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {CurrentStepComponent && <CurrentStepComponent />}
          <div className='navigation-buttons'>
            {currentStep > 1 && (
              <button type='button' onClick={prevStep}>
                Back
              </button>
            )}
            {currentStep < totalSteps && (
              <button type='button' onClick={nextStep}>
                Next
              </button>
            )}
            {currentStep === totalSteps && (
              <button type='submit'>Submit Product</button>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  )
}

export default ProductForm

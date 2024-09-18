// components/ProductForm.tsx
"use client";

import React, { useState } from 'react';
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldPath,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProductSchema, ProductFormData } from '../schemas';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

const steps = [
  { id: 1, component: Step1, label: 'Location' },
  { id: 2, component: Step2, label: 'Product Info' },
  { id: 3, component: Step3, label: 'Format' },

];

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

};

const ProductForm: React.FC = () => {
  const methods = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema),
    mode: 'all',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = steps.length;

  const { handleSubmit, trigger } = methods;

 
  const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
    console.log('onSubmit function called');
    console.log('Submitted Data:', data);

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result.message);
      } else {
        const errorData = await response.json();
        console.error('Server Error:', errorData);
      }
    } catch (error) {
      console.error('Network Error:', error);
    }
  };
  
  const nextStep = async () => {
    const currentStepFields = stepFields[currentStep];
    const isStepValid = await trigger(currentStepFields);
    if (isStepValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const CurrentStepComponent = steps.find((step) => step.id === currentStep)?.component;

  return (
    <FormProvider {...methods}>
      <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {CurrentStepComponent && <CurrentStepComponent />}
          <div className="navigation-buttons">
            {currentStep > 1 && (
              <button type="button" onClick={prevStep}>
                Back
              </button>
            )}
            {currentStep < totalSteps && (
              <button type="button" onClick={nextStep}>
                Next
              </button>
            )}
            {currentStep === totalSteps && <button type="submit">Submit Product</button>}
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default ProductForm;

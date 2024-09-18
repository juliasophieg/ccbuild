"use client";

import React, { useState } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema, ProductFormData } from '../schemas';
import Step1 from './steps/Step1';




const steps = [
    { id: 1, component: Step1, label: 'Location' },
   
  ];
  
  const stepFields: { [key: number]: (keyof ProductFormData)[] } = {
    1: ['firstLocation',
    'secondLocation',
    'thirdLocation',],
   
  };

const ProductForm: React.FC = () => {
    const methods = useForm<ProductFormData>({
      resolver: zodResolver(productSchema),
      mode: 'all',
    });
  
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = steps.length;
  
    const { handleSubmit, trigger } = methods;
  
    const onSubmit: SubmitHandler<ProductFormData> = (data) => {
      console.log('Submitted Data:', data);
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
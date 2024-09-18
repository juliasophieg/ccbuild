// components/categories/LocationForm.tsx
"use client";

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ProductFormData } from '@/schemas';

const LocationForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <fieldset>
      <legend>Location</legend>
      <div>
        <label htmlFor="firstLocation">First Location:</label>
        <input
          id="firstLocation"
          type="text"
          {...register('locationInfo.firstLocation')}
          aria-invalid={errors.locationInfo?.firstLocation ? 'true' : 'false'}
        />
        {errors.locationInfo?.firstLocation && (
          <p className="error">{errors.locationInfo.firstLocation.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="secondLocation">Second Location:</label>
        <input
          id="secondLocation"
          type="text"
          {...register('locationInfo.secondLocation')}
          aria-invalid={errors.locationInfo?.secondLocation ? 'true' : 'false'}
        />
        {errors.locationInfo?.secondLocation && (
          <p className="error">{errors.locationInfo.secondLocation.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="thirdLocation">Third Location:</label>
        <input
          id="thirdLocation"
          type="text"
          {...register('locationInfo.thirdLocation')}
          aria-invalid={errors.locationInfo?.thirdLocation ? 'true' : 'false'}
        />
        {errors.locationInfo?.thirdLocation && (
          <p className="error">{errors.locationInfo.thirdLocation.message}</p>
        )}
      </div>
    </fieldset>
  );
});

export default LocationForm;

// categories/LocationForm.tsx
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
          {...register('firstLocation')}
          aria-invalid={errors.firstLocation ? 'true' : 'false'}
        />
        {errors.firstLocation && <p className="error">{errors.firstLocation.message}</p>}
      </div>
      <div>
        <label htmlFor="secondLocation">Second Location:</label>
        <input
          id="secondLocation"
          type="text"
          {...register('secondLocation')}
          aria-invalid={errors.secondLocation ? 'true' : 'false'}
        />
        {errors.secondLocation && <p className="error">{errors.secondLocation.message}</p>}
      </div>
      <div>
        <label htmlFor="thirdLocation">Third Location:</label>
        <input
          id="thirdLocation"
          type="text"
          {...register('thirdLocation')}
          aria-invalid={errors.thirdLocation ? 'true' : 'false'}
        />
        {errors.thirdLocation && <p className="error">{errors.thirdLocation.message}</p>}
      </div>
    </fieldset>
  );
});

export default LocationForm;

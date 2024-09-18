"use client";

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ProductFormData } from '@/schemas';

const FormatForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <fieldset>
      <legend>Format</legend>

        <div>
            <label htmlFor="length">Length:</label>
            <input
            id="length"
            type="number"
            {...register('format.length', {
              setValueAs: value => parseInt(value, 10)
            })}
            aria-invalid={errors.format?.length ? 'true' : 'false'}
            />
            {errors.format?.length && (
            <p className="error">{errors.format.length.message}</p>
            )}
        </div>
        <div>
            <label htmlFor="height">Height:</label>
            <input
            id="height"
            type="number"
            {...register('format.height', {
              setValueAs: value => parseInt(value, 10)
            })}
            aria-invalid={errors.format?.height ? 'true' : 'false'}
            />
            {errors.format?.height && (
            <p className="error">{errors.format.height.message}</p>
            )}
        </div>
        <div>
            <label htmlFor="width">Width:</label>
            <input
            id="width"
            type="number"
            {...register('format.width', {
              setValueAs: value => parseInt(value, 10)
            })}
            aria-invalid={errors.format?.width ? 'true' : 'false'}
            />
            {errors.format?.width && (
            <p className="error">{errors.format.width.message}</p>
            )}
        </div>
        
        </fieldset>
  );
});

export default FormatForm;
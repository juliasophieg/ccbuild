"use client";

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ProductFormData } from '@/schemas';

const ProductCategoryForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

    return (

    <fieldset>
      <legend>Category</legend>
      <div>
        <label htmlFor="mainCategory">Main Category:</label>
        <input
          id="mainCategory"
          type="text"
          {...register('category.mainCategory')}
          aria-invalid={errors.category?.mainCategory ? 'true' : 'false'}
        />
        {errors.category?.mainCategory && (
          <p className="error">{errors.category.mainCategory.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="subCategory">Sub Category:</label>
        <input
          id="subCategory"
          type="text"
          {...register('category.subCategory')}
          aria-invalid={errors.category?.subCategory ? 'true' : 'false'}
        />
        {errors.category?.subCategory && (
          <p className="error">{errors.category.subCategory.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="subSubCategory">Sub Sub Category:</label>
        <input
          id="subSubCategory"
          type="text"
          {...register('category.subSubCategory')}
          aria-invalid={errors.category?.subSubCategory ? 'true' : 'false'}
        />
        {errors.category?.subSubCategory && (
          <p className="error">{errors.category.subSubCategory.message}</p>
        )}
      </div>
    </fieldset>
    );


});

export default ProductCategoryForm;
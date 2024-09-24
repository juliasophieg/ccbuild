"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { ProductFormData } from "@/schemas";
import DynamicForm from "../DynamicForm";

const GeneralForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <fieldset>
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          id="productName"
          type="text"
          {...register("generalInformation.productName")}
          aria-invalid={
            errors.generalInformation?.productName ? "true" : "false"
          }
        />
        {errors.generalInformation?.productName && (
          <p className="error">
            {errors.generalInformation.productName.message}
          </p>
        )}
      </div>

      <DynamicForm />

      <div>
        <label htmlFor="productDescription">Product Description:</label>
        <textarea
          id="productDescription"
          {...register("generalInformation.productDescription")}
          aria-invalid={
            errors.generalInformation?.productDescription ? "true" : "false"
          }
        />
        {errors.generalInformation?.productDescription && (
          <p className="error">
            {errors.generalInformation.productDescription.message}
          </p>
        )}
      </div>
    </fieldset>
  );
});

export default GeneralForm;

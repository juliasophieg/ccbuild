"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { ProductFormData } from "@/schemas";
import TextField from "@mui/material/TextField";

const ConditionForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <fieldset className="flex flex-col gap-4">
      <h3 className="text-lg">Skick</h3>
      <div className="flex gap-4 w-full">
        <TextField
          className="w-1/2"
          label="Estetiskt skick"
          required
          variant="outlined"
          size="small"
          type="number"
          id="functionalConditionNumber"
          {...register("condition.functionalCondition")}
          aria-invalid={
            errors.condition?.functionalCondition ? "true" : "false"
          }
          error={!!errors.condition?.functionalCondition}
          helperText={errors.condition?.functionalCondition?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        {/* Functional Condition - Text */}
        <TextField
          className="w-1/2"
          label="Functional Condition (Text)"
          required
          variant="outlined"
          size="small"
          type="text"
          id="functionalConditionText"
          {...register("condition.functionalCondition")}
          aria-invalid={
            errors.condition?.functionalCondition ? "true" : "false"
          }
          error={!!errors.condition?.functionalCondition}
          helperText={errors.condition?.functionalCondition?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
      </div>
    </fieldset>
  );
});

export default ConditionForm;

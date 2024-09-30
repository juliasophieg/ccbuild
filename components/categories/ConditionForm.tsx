"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { ProductFormData } from "@/schemas";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import StarSharpIcon from "@mui/icons-material/StarSharp";

const ConditionForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <fieldset className="flex flex-col gap-4">
      <h3 className="text-lg">
        <StarSharpIcon sx={{ color: "gray", mr: 0.5 }} />
        Skick
      </h3>
      <div className="flex gap-4 w-full">
        <TextField
          required
          className="w-1/2"
          select
          label="Estetiskt skick"
          variant="outlined"
          size="small"
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
        >
          <MenuItem value="1">Skada går ej att åtgärda</MenuItem>
          <MenuItem value="2">Skada svår att åtgärda</MenuItem>
          <MenuItem value="3">Skada kan åtgärdas av proffs</MenuItem>
          <MenuItem value="4">Skada kan åtgärdas av lekman</MenuItem>
          <MenuItem value="5">Inga skador</MenuItem>
        </TextField>

        {/* Dropdown for Functional Condition (Text) */}
        <TextField
          required
          className="w-1/2"
          select
          label="Funktionellt skick"
          variant="outlined"
          size="small"
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
        >
          <MenuItem value="1">Skada går ej att åtgärda</MenuItem>
          <MenuItem value="2">Skada svår att åtgärda</MenuItem>
          <MenuItem value="3">Skada kan åtgärdas av proffs</MenuItem>
          <MenuItem value="4">Skada kan åtgärdas av lekman</MenuItem>
          <MenuItem value="5">Inga skador</MenuItem>
        </TextField>
      </div>
    </fieldset>
  );
});

export default ConditionForm;

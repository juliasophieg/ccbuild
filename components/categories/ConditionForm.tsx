"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { ProductFormData } from "@/schemas";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
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
        <FormControl
          className="w-1/2"
          size="small"
          error={!!errors.condition?.functionalCondition}
          required
        >
          <InputLabel id="functionalConditionNumber-label">
            Estetiskt skick
          </InputLabel>
          <Select
            labelId="functionalConditionNumber-label"
            id="functionalConditionNumber"
            label="Estetiskt skick"
            {...register("condition.functionalCondition")}
            aria-invalid={
              errors.condition?.functionalCondition ? "true" : "false"
            }
          >
            <MenuItem value="1">Skada går ej att åtgärda</MenuItem>
            <MenuItem value="2">Skada svår att åtgärda</MenuItem>
            <MenuItem value="3">Skada kan åtgärdas av proffs</MenuItem>
            <MenuItem value="4">Skada kan åtgärdas av lekman</MenuItem>
            <MenuItem value="5">Inga skador</MenuItem>
          </Select>
          <FormHelperText>
            {errors.condition?.functionalCondition?.message}
          </FormHelperText>
        </FormControl>

        {/* Dropdown for Functional Condition (Text) */}
        <FormControl
          className="w-1/2"
          size="small"
          error={!!errors.condition?.functionalCondition}
          required
        >
          <InputLabel id="functionalConditionText-label">
            Funktionellt skick
          </InputLabel>
          <Select
            labelId="functionalConditionText-label"
            id="functionalConditionText"
            label="Functional Condition (Text)"
            {...register("condition.functionalCondition")}
            aria-invalid={
              errors.condition?.functionalCondition ? "true" : "false"
            }
          >
            <MenuItem value="1">Skada går ej att åtgärda</MenuItem>
            <MenuItem value="2">Skada svår att åtgärda</MenuItem>
            <MenuItem value="3">Skada kan åtgärdas av proffs</MenuItem>
            <MenuItem value="4">Skada kan åtgärdas av lekman</MenuItem>
            <MenuItem value="5">Inga skador</MenuItem>
          </Select>
          <FormHelperText>
            {errors.condition?.functionalCondition?.message}
          </FormHelperText>
        </FormControl>
      </div>
    </fieldset>
  );
});

export default ConditionForm;

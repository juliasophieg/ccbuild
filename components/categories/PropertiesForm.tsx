"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { ProductFormData } from "@/schemas";
import TextField from "@mui/material/TextField";

const PropertiesForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <fieldset className="flex gap-4">
      {/* Material */}
      <TextField
        className="w-1/3"
        required
        label="Material"
        variant="outlined"
        size="small"
        id="material"
        {...register("properties.material")}
        aria-invalid={errors.properties?.material ? "true" : "false"}
        error={!!errors.properties?.material}
        helperText={errors.properties?.material?.message}
        slotProps={{
          inputLabel: { shrink: true },
        }}
      />

      {/* Color */}
      <TextField
        className="w-1/3"
        required
        label="Färg"
        variant="outlined"
        size="small"
        id="color"
        {...register("properties.color")}
        aria-invalid={errors.properties?.color ? "true" : "false"}
        error={!!errors.properties?.color}
        helperText={errors.properties?.color?.message}
        slotProps={{
          inputLabel: { shrink: true },
        }}
      />

      {/* Surface Treatment */}
      <TextField
        className="w-1/3"
        required
        label="Ytbehandling"
        variant="outlined"
        size="small"
        id="surfaceTreatment"
        {...register("properties.surfaceTreatment")}
        aria-invalid={errors.properties?.surfaceTreatment ? "true" : "false"}
        error={!!errors.properties?.surfaceTreatment}
        helperText={errors.properties?.surfaceTreatment?.message}
        slotProps={{
          inputLabel: { shrink: true },
        }}
      />
    </fieldset>
  );
});

export default PropertiesForm;

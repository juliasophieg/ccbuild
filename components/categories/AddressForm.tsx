"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { ProductFormData } from "@/schemas";
import TextField from "@mui/material/TextField";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const AddressForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <fieldset className="flex flex-col gap-4">
      <h3 className="text-lg">
        {" "}
        <LocationOnIcon sx={{ color: "gray", mr: 0.5 }} />
        Adress
      </h3>
      <div className="flex gap-4 w-full">
        {/* Address Field */}
        <TextField
          className="w-1/3"
          label="Address"
          variant="outlined"
          size="small"
          id="address"
          {...register("address.address")}
          aria-invalid={errors.address?.address ? "true" : "false"}
          error={!!errors.address?.address}
          helperText={errors.address?.address?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        {/* Postal Code Field */}
        <TextField
          className="w-1/3"
          label="Postal Code"
          variant="outlined"
          size="small"
          id="postalCode"
          {...register("address.postalCode")}
          aria-invalid={errors.address?.postalCode ? "true" : "false"}
          error={!!errors.address?.postalCode}
          helperText={errors.address?.postalCode?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        {/* City Field */}
        <TextField
          className="w-1/3"
          label="City"
          variant="outlined"
          size="small"
          id="city"
          {...register("address.city")}
          aria-invalid={errors.address?.city ? "true" : "false"}
          error={!!errors.address?.city}
          helperText={errors.address?.city?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
      </div>
    </fieldset>
  );
});

export default AddressForm;

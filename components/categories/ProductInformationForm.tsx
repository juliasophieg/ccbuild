"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { ProductFormData } from "@/schemas";
import TextField from "@mui/material/TextField";

const ProductInformationForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <fieldset className="flex flex-col gap-4">
      <h3 className="text-lg">Produktinformation</h3>
      {/* First Row - Three Fields */}
      <div className="flex gap-4 w-full">
        {/* Manufacturer */}
        <TextField
          className="w-1/3"
          label="Manufacturer"
          variant="outlined"
          size="small"
          id="manufacturer"
          {...register("productInformation.manufacturer")}
          aria-invalid={
            errors.productInformation?.manufacturer ? "true" : "false"
          }
          error={!!errors.productInformation?.manufacturer}
          helperText={errors.productInformation?.manufacturer?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        {/* Article Number */}
        <TextField
          className="w-1/3"
          label="Article Number"
          variant="outlined"
          size="small"
          id="articleNumber"
          {...register("productInformation.articleNumber")}
          aria-invalid={
            errors.productInformation?.articleNumber ? "true" : "false"
          }
          error={!!errors.productInformation?.articleNumber}
          helperText={errors.productInformation?.articleNumber?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        {/* Manufacturing Year */}
        <TextField
          className="w-1/3"
          label="Manufacturing Year"
          variant="outlined"
          size="small"
          type="number"
          id="manufacturingYear"
          {...register("productInformation.manufacturingYear", {
            setValueAs: (value) => parseFloat(value),
          })}
          aria-invalid={
            errors.productInformation?.manufacturingYear ? "true" : "false"
          }
          error={!!errors.productInformation?.manufacturingYear}
          helperText={errors.productInformation?.manufacturingYear?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
      </div>

      {/* Second Row - Three Fields */}
      <div className="flex gap-4 w-full mt-4">
        {/* GTIN */}
        <TextField
          className="w-1/3"
          label="GTIN"
          variant="outlined"
          size="small"
          id="GTIN"
          {...register("productInformation.GTIN")}
          aria-invalid={errors.productInformation?.GTIN ? "true" : "false"}
          error={!!errors.productInformation?.GTIN}
          helperText={errors.productInformation?.GTIN?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        {/* RSK */}
        <TextField
          className="w-1/3"
          label="RSK"
          variant="outlined"
          size="small"
          id="RSK"
          {...register("productInformation.RSK")}
          aria-invalid={errors.productInformation?.RSK ? "true" : "false"}
          error={!!errors.productInformation?.RSK}
          helperText={errors.productInformation?.RSK?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        {/* E-NR */}
        <TextField
          className="w-1/3"
          label="E-NR"
          variant="outlined"
          size="small"
          id="ENR"
          {...register("productInformation.ENR")}
          aria-invalid={errors.productInformation?.ENR ? "true" : "false"}
          error={!!errors.productInformation?.ENR}
          helperText={errors.productInformation?.ENR?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
      </div>

      {/* Third Row - Three Fields */}
      <div className="flex gap-4 w-full mt-4">
        {/* Purchase Year */}
        <TextField
          className="w-1/3"
          label="Purchase Year"
          placeholder="YYYY"
          variant="outlined"
          size="small"
          type="number"
          id="purchaseYear"
          {...register("productInformation.purchaseYear", {
            setValueAs: (value) => parseFloat(value),
          })}
          aria-invalid={
            errors.productInformation?.purchaseYear ? "true" : "false"
          }
          error={!!errors.productInformation?.purchaseYear}
          helperText={errors.productInformation?.purchaseYear?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        {/* BSAB */}
        <TextField
          className="w-1/3"
          label="BSAB"
          variant="outlined"
          size="small"
          id="BSAB"
          {...register("productInformation.BSAB")}
          aria-invalid={errors.productInformation?.BSAB ? "true" : "false"}
          error={!!errors.productInformation?.BSAB}
          helperText={errors.productInformation?.BSAB?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        {/* BK04 */}
        <TextField
          className="w-1/3"
          label="BK04"
          variant="outlined"
          size="small"
          id="BK04"
          {...register("productInformation.BK04")}
          aria-invalid={errors.productInformation?.BK04 ? "true" : "false"}
          error={!!errors.productInformation?.BK04}
          helperText={errors.productInformation?.BK04?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
      </div>
    </fieldset>
  );
});

export default ProductInformationForm;

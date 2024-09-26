"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { ProductFormData } from "@/schemas";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const PriceForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <fieldset className="flex flex-col gap-4">
      <h3 className="text-lg">
        <AccountBalanceWalletIcon sx={{ color: "gray", mr: 0.5 }} />
        Pris
      </h3>
      {/* Internal Price */}
      <div className="flex gap-4">
        <TextField
          className="w-2/6"
          required
          label="Internt pris/styck"
          variant="outlined"
          size="small"
          type="number"
          id="internalPrice"
          {...register("price.internalPrice", {
            setValueAs: (value) => parseFloat(value),
          })}
          aria-invalid={errors.price?.internalPrice ? "true" : "false"}
          error={!!errors.price?.internalPrice}
          helperText={errors.price?.internalPrice?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        {/* External Price */}
        <TextField
          className="w-2/6"
          required
          label="Externt pris/styck"
          variant="outlined"
          size="small"
          type="number"
          id="externalPrice"
          {...register("price.externalPrice", {
            setValueAs: (value) => parseFloat(value),
          })}
          aria-invalid={errors.price?.externalPrice ? "true" : "false"}
          error={!!errors.price?.externalPrice}
          helperText={errors.price?.externalPrice?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        {/* Buyer Price as Checkbox */}
        <FormControlLabel
          className="w-2/6"
          control={
            <Checkbox
              id="buyerPrice"
              {...register("price.buyerPrice")}
              aria-invalid={errors.price?.buyerPrice ? "true" : "false"}
            />
          }
          label="Låt köparen föreslå pris"
        />
        {errors.price?.buyerPrice && (
          <p className="error">{errors.price.buyerPrice.message}</p>
        )}
      </div>
    </fieldset>
  );
});

export default PriceForm;

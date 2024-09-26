"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { ProductFormData } from "@/schemas";
import DynamicForm from "../DynamicForm";
import TextField from "@mui/material/TextField";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const GeneralForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <fieldset className="flex justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <TextField
            label="Produktnamn"
            variant="outlined"
            size="small"
            required
            id="productName outlined-required"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
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
          <TextField
            label="Projektnamn"
            variant="outlined"
            size="small"
            required
            defaultValue="Projekt" // LÄGG TILL NUVARANDE PROJEKT
            disabled
            id="projectName outlined-required"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            type="text"
          />
          <TextField
            label="Produkt-ID"
            variant="outlined"
            size="small"
            required
            defaultValue="Sparas automatiskt" // LÄGG TILL NUVARANDE PRODUKT-ID
            disabled
            id="productId outlined-required"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            type="text"
          />
        </div>
        <DynamicForm />
        <div>
          <TextField
            className="w-full"
            label="Produktbeskrivning"
            variant="outlined"
            size="small"
            id="productDescription outlined"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
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
      </div>
      <div className="flex flex-col justify-center items-center border border-dotted  w-64 p-2">
        <UploadFileIcon sx={{ color: "blue" }} />
        <p>Ladda upp eller dra hit filer</p>
        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 3MB)</p>
      </div>
    </fieldset>
  );
});

export default GeneralForm;

import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useCategoryContext } from "@/context/CategoryContext";
import { ProductFormData } from "@/schemas";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const DynamicForm: React.FC = () => {
  const { control, watch, setValue } = useFormContext<ProductFormData>();
  const { setSelectedCategory1 } = useCategoryContext();

  const [showSecondForm, setShowSecondForm] = useState(false);
  const [showThirdForm, setShowThirdForm] = useState(false);

  const firstCategory = watch("generalInformation.productCategory1");
  const secondCategory = watch("generalInformation.productCategory2");

  const secondFormOptions = {
    chair: ["Wooden Chair", "Plastic Chair", "Cushioned Chair"],
    table: ["Coffee Table", "Dining Table", "Study Table"],
    house: ["Apartment", "Villa", "Cottage"],
  };

  const thirdFormOptions = {
    "Wooden Chair": ["With Arms", "Without Arms"],
    "Plastic Chair": ["Stackable", "Non-stackable"],
    "Cushioned Chair": ["Leather Cushion", "Fabric Cushion"],
    "Coffee Table": ["Round", "Square"],
    "Dining Table": ["Wooden", "Glass"],
    "Study Table": ["Small", "Large"],
    Apartment: ["Studio", "2 Bedroom"],
    Villa: ["Single Floor", "Double Floor"],
    Cottage: ["Traditional", "Modern"],
  };

  return (
    <>
      <div className="flex gap-4">
        <Controller
          control={control}
          name="generalInformation.productCategory1"
          render={({ field }) => (
            <div className="w-1/3">
              <TextField
                className="w-full"
                size="small"
                id="outlined-select-required"
                required
                select
                label="Produktkategori 1"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  setShowSecondForm(true);
                  setShowThirdForm(false);
                  setValue("generalInformation.productCategory2", "");
                  setValue("generalInformation.productCategory3", "");
                  setSelectedCategory1(e.target.value);
                }}
              >
                <MenuItem value="">Välj en kategori</MenuItem>
                <MenuItem value="chair">Chair</MenuItem>
                <MenuItem value="table">Table</MenuItem>
                <MenuItem value="house">House</MenuItem>
              </TextField>
            </div>
          )}
        />

        {showSecondForm && firstCategory && (
          <Controller
            control={control}
            name="generalInformation.productCategory2"
            render={({ field }) => (
              <div className="w-1/3">
                <TextField
                  className="w-full"
                  size="small"
                  id="outlined-select-required"
                  required
                  select
                  label="Produktkategori 2"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setShowThirdForm(true);
                    setValue("generalInformation.productCategory3", "");
                  }}
                >
                  {/* Assert that firstCategory is a key of secondFormOptions */}
                  <MenuItem value="">Välj en kategori</MenuItem>
                  {secondFormOptions[
                    firstCategory as keyof typeof secondFormOptions
                  ]?.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            )}
          />
        )}
        {showThirdForm && secondCategory && (
          <Controller
            control={control}
            name="generalInformation.productCategory3"
            render={({ field }) => (
              <div className="w-1/3">
                <TextField
                  className="w-full"
                  size="small"
                  id="outlined-select-required"
                  required
                  select
                  label="Produktkategori 3"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                >
                  {/* Assert that secondCategory is a key of thirdFormOptions */}
                  <MenuItem value="">Välj en kategori</MenuItem>
                  {thirdFormOptions[
                    secondCategory as keyof typeof thirdFormOptions
                  ]?.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            )}
          />
        )}
      </div>
    </>
  );
};

export default DynamicForm;

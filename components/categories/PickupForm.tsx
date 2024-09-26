"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { ProductFormData } from "@/schemas";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const PickupForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <fieldset className="flex flex-col gap-4">
      <h3 className="text-lg">
        {" "}
        <CalendarTodayIcon sx={{ color: "gray", mr: 0.5 }} />
        Upphämtning
      </h3>
      {/* Available Date Field */}
      <div className="flex gap-4">
        <TextField
          className="w-1/2"
          label="Datum tillgänlig"
          type="date"
          variant="outlined"
          size="small"
          id="availableDate"
          {...register("pickup.availableDate", {
            setValueAs: (value) => new Date(value),
          })}
          aria-invalid={errors.pickup?.availableDate ? "true" : "false"}
          error={!!errors.pickup?.availableDate}
          helperText={errors.pickup?.availableDate?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        {/* First Delivery Date Field */}
        <TextField
          className="w-1/2"
          label="Datum första möjliga leverans"
          type="date"
          variant="outlined"
          size="small"
          id="firstDeliveryDate"
          {...register("pickup.firstDeliveryDate", {
            setValueAs: (value) => new Date(value),
          })}
          aria-invalid={errors.pickup?.firstDeliveryDate ? "true" : "false"}
          error={!!errors.pickup?.firstDeliveryDate}
          helperText={errors.pickup?.firstDeliveryDate?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
      </div>
      <div className="flex gap-4">
        {/* Can Be Sent Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              id="canBeSent"
              {...register("pickup.canBeSent")}
              aria-invalid={errors.pickup?.canBeSent ? "true" : "false"}
            />
          }
          label="Kan skickas"
        />
        {errors.pickup?.canBeSent && (
          <p className="error">{errors.pickup.canBeSent.message}</p>
        )}

        {/* Can Be Picked Up Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              id="canBePickedUp"
              {...register("pickup.canBePickedUp")}
              aria-invalid={errors.pickup?.canBePickedUp ? "true" : "false"}
            />
          }
          label="Kan hämtas"
        />
        {errors.pickup?.canBePickedUp && (
          <p className="error">{errors.pickup.canBePickedUp.message}</p>
        )}
      </div>
      {/* Contact Person Field */}
      <TextField
        label="Kontaktperson"
        variant="outlined"
        size="small"
        id="contactPerson"
        {...register("pickup.contactPerson")}
        aria-invalid={errors.pickup?.contactPerson ? "true" : "false"}
        error={!!errors.pickup?.contactPerson}
        helperText={errors.pickup?.contactPerson?.message}
        slotProps={{
          inputLabel: { shrink: true },
        }}
      />

      {/* Description Field */}
      <TextField
        label="Beskrivning"
        placeholder="T.ex. Ring på porttelefonen vid ankomst"
        variant="outlined"
        size="small"
        id="description"
        {...register("pickup.description")}
        aria-invalid={errors.pickup?.description ? "true" : "false"}
        error={!!errors.pickup?.description}
        helperText={errors.pickup?.description?.message}
        multiline
        rows={2}
        slotProps={{
          inputLabel: { shrink: true },
        }}
      />
    </fieldset>
  );
});

export default PickupForm;

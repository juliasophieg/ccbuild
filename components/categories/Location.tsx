"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { ProductFormData } from "@/schemas";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LocationForm: React.FC = React.memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <fieldset className="flex flex-col gap-4">
      <h3 className="text-lg">
        <LocationOnIcon sx={{ color: "gray", mr: 0.5 }} />
        Plats
      </h3>

      <div className="flex flex-row gap-4">
        <TextField
          className="w-1/3"
          label="Lokal"
          variant="outlined"
          required
          size="small"
          id="premises"
          {...register("location.premises")}
          aria-invalid={errors.location?.premises ? "true" : "false"}
          error={!!errors.location?.premises}
          helperText={errors.location?.premises?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        <TextField
          className="w-1/3"
          label="Rum"
          variant="outlined"
          required
          size="small"
          id="room"
          {...register("location.room")}
          aria-invalid={errors.location?.room ? "true" : "false"}
          error={!!errors.location?.room}
          helperText={errors.location?.room?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        <TextField
          className="w-1/3"
          label="Plats"
          variant="outlined"
          required
          size="small"
          id="place"
          {...register("location.place")}
          aria-invalid={errors.location?.place ? "true" : "false"}
          error={!!errors.location?.place}
          helperText={errors.location?.place?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
      </div>
      <div className="flex flex-row gap-4">
        <TextField
          className="w-1/2"
          select
          label="Åtkomlighet"
          variant="outlined"
          size="small"
          id="accessibility"
          {...register("location.accessibility")}
          aria-invalid={errors.location?.accessibility ? "true" : "false"}
          error={!!errors.location?.accessibility}
          helperText={errors.location?.accessibility?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        >
          <MenuItem value="">Välj åtkomlighet</MenuItem>
          <MenuItem value="Lätt Åtkomlig">Lätt Åtkomlig</MenuItem>
          <MenuItem value="Åtkomlig men planering och specialverktyg kan krävas">
            Åtkomlig men planering och specialverktyg kan krävas
          </MenuItem>
          <MenuItem value="Begränsad åtkomlighet">
            Begränsad åtkomlighet
          </MenuItem>
        </TextField>

        <TextField
          className="w-1/2"
          select
          label="Demonterbarhet"
          variant="outlined"
          size="small"
          id="dismantling"
          {...register("location.dismantling")}
          aria-invalid={errors.location?.dismantling ? "true" : "false"}
          error={!!errors.location?.dismantling}
          helperText={errors.location?.dismantling?.message}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        >
          <MenuItem value="">Välj demonterbarhet</MenuItem>
          <MenuItem value="Enkel att demontera/demontering krävs ej">
            Enkel att demontera/demontering krävs ej
          </MenuItem>
          <MenuItem value="Demonterbar men specialverktyg kan krävas">
            Demonterbar men specialverktyg kan krävas
          </MenuItem>
          <MenuItem value="Begränsad demonterbarhet">
            Begränsad demonterbarhet
          </MenuItem>
        </TextField>
      </div>
    </fieldset>
  );
});

export default LocationForm;

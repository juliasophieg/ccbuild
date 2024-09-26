import React from "react";
import { useFormContext } from "react-hook-form";
import { TextField, MenuItem } from "@mui/material";
import { useCategoryContext } from "../../context/CategoryContext";

const DoorForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <TextField
          className="w-1/3"
          select
          label="Glastyp"
          variant="outlined"
          size="small"
          id="glassType"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.glassType")}
        >
          {[
            "Ej angivet",
            "Lamellglas",
            "Härdglas",
            "Härd-/lamellglas",
            "Klar-/planglas",
          ].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className="w-1/3"
          select
          label="Glasmodell"
          variant="outlined"
          size="small"
          id="glassModel"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.glassModel")}
        >
          {[
            "Ej angivet",
            "2-glas",
            "3-glas",
            "2-glas isolerglas",
            "3-glas isolerglas",
            "Spegelglas",
          ].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className="w-1/3"
          select
          label="Glastjocklek (mm)"
          variant="outlined"
          size="small"
          id="glassThickness"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.glassThickness")}
        >
          {[
            "Ej angivet",
            "3",
            "4",
            "5",
            "6 - 6,76",
            "8 - 8,76",
            "10 - 10,76",
            "12,76",
          ].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="flex flex-row gap-4">
        <TextField
          className="w-1/3"
          select
          label="Hängning"
          variant="outlined"
          size="small"
          id="hanging"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.hanging")}
        >
          {["Ej angivet", "VH", "HH", "UVH", "UHH", "IVH", "IHH"].map(
            (option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            )
          )}
        </TextField>

        <TextField
          className="w-1/3"
          select
          label="Modulmått"
          variant="outlined"
          size="small"
          id="moduleSize"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.moduleSize")}
        >
          {[
            "Ej angivet",
            "6×21",
            "7×21",
            "8×21",
            "9×21",
            "10×21",
            "11×21",
            "12×21",
            "13×21",
            "14×21",
            "15×21",
            "16×21",
            "17×21",
            "18×21",
            "19×21",
            "20×21",
          ].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className="w-1/3"
          select
          label="Ljudreduktion (dB)"
          variant="outlined"
          size="small"
          id="soundReduction"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.soundReduction")}
        >
          {["Ej angivet", "25", "30", "35", "40", "45", "50"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="flex flex-row gap-4">
        <TextField
          className="w-1/3"
          select
          label="Brandklass"
          variant="outlined"
          size="small"
          id="fireClass"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.fireClass")}
        >
          {[
            "Ej angivet",
            "A120",
            "EI120",
            "A60",
            "EI60",
            "EI45",
            "B30",
            "EI30",
            "A90",
            "EI240",
          ].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className="w-1/3"
          select
          label="Inbrottsskydd"
          variant="outlined"
          size="small"
          id="breakProtection"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.breakProtection")}
        >
          {["Ej angivet", "RC1", "RC2", "RC3", "RC4", "RC5", "RC6"].map(
            (option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            )
          )}
        </TextField>

        <TextField
          className="w-1/3"
          select
          label="Omgivning/Klimat"
          variant="outlined"
          size="small"
          id="environmentClimate"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.environmentClimate")}
        >
          {["Ej angivet", "Inomhus", "Utomhus", "Inomhus/Utomhus"].map(
            (option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            )
          )}
        </TextField>
      </div>
      <div className="flex flex-row gap-4">
        <TextField
          className="w-1/3"
          label="Färg"
          variant="outlined"
          size="small"
          id="color"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.color")}
        />

        <TextField
          className="w-1/3"
          select
          label="Brandgastäthet Sa/S200"
          variant="outlined"
          size="small"
          id="brandgastathet"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.brandgastathet")}
        >
          {["Ej angivet", "Ja", "Nej"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className="w-1/3"
          label="Karmdjup (mm)"
          variant="outlined"
          size="small"
          id="karmdjup"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.karmdjup")}
        />
      </div>
    </div>
  );
};

const WindowForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <TextField
          className="w-1/3"
          select
          label="Hängning"
          variant="outlined"
          size="small"
          id="hanging"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.hanging")}
        >
          {["Ej angivet", "VHI", "VHU", "HHI", "HHU", "ÖVKU", "ÖVKI"].map(
            (option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            )
          )}
        </TextField>

        <TextField
          className="w-1/3"
          select
          label="Typ"
          variant="outlined"
          size="small"
          id="type"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.type")}
        >
          {[
            "Ej angivet",
            "Fast",
            "Vridfönster",
            "Sidohängt",
            "Överkantshängt",
            "Sideswing",
            "Kipp-Dreh",
            "Takfönster",
            "Skjutbar & fast",
          ].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className="w-1/3"
          select
          label="Glasmodell"
          variant="outlined"
          size="small"
          id="glassModel"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.glassModel")}
        >
          {["Ej angivet", "2-glas", "3-glas", "Isolerglas"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="flex flex-row gap-4">
        <TextField
          className="w-1/2"
          select
          label="Glastyp"
          variant="outlined"
          size="small"
          id="glassType"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.glassType")}
        >
          {["Ej angivet", "Cotswold", "Klar-/planglas"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className="w-1/2"
          select
          label="Härdat glas"
          variant="outlined"
          size="small"
          id="temperedGlass"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.temperedGlass")}
        >
          {["Ej angivet", "Ja", "Nej"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

const GallerForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <TextField
          className="w-1/4"
          select
          label="Typ"
          variant="outlined"
          size="small"
          id="type"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.type")}
        >
          {[
            "Ej angivet",
            "Galv",
            "Pulverlack",
            "Galv+Pulverlack",
            "Svart RAL 9005",
            "Vit RAL 9016",
            "Grå RAL 9006",
          ].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className="w-1/4"
          label="Dimension"
          variant="outlined"
          size="small"
          id="dimension"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.dimension")}
        />

        <TextField
          className="w-1/4"
          select
          label="Avstånd mellan reglar"
          variant="outlined"
          size="small"
          id="distanceBetweenRails"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.distanceBetweenRails")}
        >
          {["Ej angivet", "18cm", "20cm", "25cm", "30cm"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className="w-1/4"
          select
          label="Diameter"
          variant="outlined"
          size="small"
          id="diameter"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.diameter")}
        >
          {["Ej angivet", "5mm", "6mm", "8mm"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="flex flex-row gap-4">
        <TextField
          className="w-1/3"
          select
          label="Inbrottsskydd"
          variant="outlined"
          size="small"
          id="breakProtection"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.breakProtection")}
        >
          {["Ej angivet", "RC1", "RC2", "RC3", "RC4", "RC5", "RC6"].map(
            (option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            )
          )}
        </TextField>

        <TextField
          className="w-1/3"
          select
          label="Ytbehandling"
          variant="outlined"
          size="small"
          id="surfaceTreatment"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.surfaceTreatment")}
        >
          {["Ej angivet", "Pulverlack", "Målat", "Galvaniserat"].map(
            (option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            )
          )}
        </TextField>

        <TextField
          className="w-1/3"
          select
          label="Användning"
          variant="outlined"
          size="small"
          id="usage"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register("specialProperties.usage")}
        >
          {["Ej angivet", "Inomhus", "Utomhus", "Inomhus/Utomhus"].map(
            (option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            )
          )}
        </TextField>
      </div>
    </div>
  );
};

const SpecialForm: React.FC = React.memo(() => {
  const { selectedCategory1 } = useCategoryContext();

  const renderCategorySpecificForm = () => {
    switch (selectedCategory1) {
      case "door":
        return <DoorForm />;
      case "window":
        return <WindowForm />;
      case "galler":
        return <GallerForm />;
      default:
        return null;
    }
  };

  return (
    <fieldset>
      <legend>Special</legend>
      {renderCategorySpecificForm()}
    </fieldset>
  );
});

export default SpecialForm;

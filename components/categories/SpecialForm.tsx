"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { ProductFormData } from "@/schemas";
import { useCategoryContext } from "@/context/CategoryContext";

const DoorForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor="glassType">Glastyp:</label>
      <select id="glassType" {...register("specialProperties.glassType")}>
        <option value="Ej angivet">Ej angivet</option>
        <option value="Lamellglas">Lamellglas</option>
        <option value="Härdglas">Härdglas</option>
        <option value="Härd-/lamellglas">Härd-/lamellglas</option>
        <option value="Klar-/planglas">Klar-/planglas</option>
      </select>

      <label htmlFor="glassModel">Glasmodell:</label>
      <select id="glassModel" {...register("specialProperties.glassModel")}>
        <option value="Ej angivet">Ej angivet</option>
        <option value="2-glas">2-glas</option>
        <option value="3-glas">3-glas</option>
        <option value="2-glas isolerglas">2-glas isolerglas</option>
        <option value="3-glas isolerglas">3-glas isolerglas</option>
        <option value="Spegelglas">Spegelglas</option>
      </select>

      <label htmlFor="glassThickness">Glastjocklek (mm):</label>
      <select
        id="glassThickness"
        {...register("specialProperties.glassThickness")}
      >
        <option value="Ej angivet">Ej angivet</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6 - 6,76">6 - 6,76</option>
        <option value="8 - 8,76">8 - 8,76</option>
        <option value="10 - 10,76">10 - 10,76</option>
        <option value="12,76">12,76</option>
      </select>

      <label htmlFor="hanging">Hängning:</label>
      <select id="hanging" {...register("specialProperties.hanging")}>
        <option value="Ej angivet">Ej angivet</option>
        <option value="VH">VH</option>
        <option value="HH">HH</option>
        <option value="UVH">UVH</option>
        <option value="UHH">UHH</option>
        <option value="IVH">IVH</option>
        <option value="IHH">IHH</option>
      </select>

      <label htmlFor="moduleSize">Modulmått:</label>
      <select id="moduleSize" {...register("specialProperties.moduleSize")}>
        <option value="Ej angivet">Ej angivet</option>
        <option value="6×21">6×21</option>
        <option value="7×21">7×21</option>
        <option value="8×21">8×21</option>
        <option value="9×21">9×21</option>
        <option value="10×21">10×21</option>
        <option value="11×21">11×21</option>
        <option value="12×21">12×21</option>
        <option value="13×21">13×21</option>
        <option value="14×21">14×21</option>
        <option value="15×21">15×21</option>
        <option value="16×21">16×21</option>
        <option value="17×21">17×21</option>
        <option value="18×21">18×21</option>
        <option value="19×21">19×21</option>
        <option value="20×21">20×21</option>
      </select>

      <label htmlFor="soundReduction">Ljudreduktion (dB):</label>
      <select
        id="soundReduction"
        {...register("specialProperties.soundReduction")}
      >
        <option value="Ej angivet">Ej angivet</option>
        <option value="25">25</option>
        <option value="30">30</option>
        <option value="35">35</option>
        <option value="40">40</option>
        <option value="45">45</option>
        <option value="50">50</option>
      </select>

      <label htmlFor="fireClass">Brandklass:</label>
      <select id="fireClass" {...register("specialProperties.fireClass")}>
        <option value="Ej angivet">Ej angivet</option>
        <option value="A120">A120</option>
        <option value="EI120">EI120</option>
        <option value="A60">A60</option>
        <option value="EI60">EI60</option>
        <option value="EI45">EI45</option>
        <option value="B30">B30</option>
        <option value="EI30">EI30</option>
        <option value="A90">A90</option>
        <option value="EI240">EI240</option>
      </select>

      <label htmlFor="breakProtection">Inbrottsskydd:</label>
      <select
        id="breakProtection"
        {...register("specialProperties.breakProtection")}
      >
        <option value="Ej angivet">Ej angivet</option>
        <option value="RC1">RC1</option>
        <option value="RC2">RC2</option>
        <option value="RC3">RC3</option>
        <option value="RC4">RC4</option>
        <option value="RC5">RC5</option>
        <option value="RC6">RC6</option>
      </select>

      <label htmlFor="environmentClimate">Omgivning/Klimat:</label>
      <select
        id="environmentClimate"
        {...register("specialProperties.environmentClimate")}
      >
        <option value="Ej angivet">Ej angivet</option>
        <option value="Inomhus">Inomhus</option>
        <option value="Utomhus">Utomhus</option>
        <option value="Inomhus/Utomhus">Inomhus/Utomhus</option>
      </select>

      <label htmlFor="color">Färg:</label>
      <input id="color" type="text" {...register("specialProperties.color")} />

      <label htmlFor="brandgastathet">Brandgastäthet Sa/S200:</label>
      <select
        id="brandgastathet"
        {...register("specialProperties.brandgastathet")}
      >
        <option value="Ej angivet">Ej angivet</option>
        <option value="Ja">Ja</option>
        <option value="Nej">Nej</option>
      </select>

      <label htmlFor="karmdjup">Karmdjup (mm):</label>
      <input
        id="karmdjup"
        type="text"
        {...register("specialProperties.karmdjup")}
      />
    </div>
  );
};

const WindowForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor="hanging">Hängning:</label>
      <select id="hanging" {...register("specialProperties.hanging")}>
        <option value="Ej angivet">Ej angivet</option>
        <option value="VHI">VHI</option>
        <option value="VHU">VHU</option>
        <option value="HHI">HHI</option>
        <option value="HHU">HHU</option>
        <option value="ÖVKU">ÖVKU</option>
        <option value="ÖVKI">ÖVKI</option>
      </select>

      <label htmlFor="type">Typ:</label>
      <select id="type" {...register("specialProperties.type")}>
        <option value="Ej angivet">Ej angivet</option>
        <option value="Fast">Fast</option>
        <option value="Vridfönster">Vridfönster</option>
        <option value="Sidohängt">Sidohängt</option>
        <option value="Överkantshängt">Överkantshängt</option>
        <option value="Sideswing">Sideswing</option>
        <option value="Kipp-Dreh">Kipp-Dreh</option>
        <option value="Takfönster">Takfönster</option>
        <option value="Skjutbar & fast">Skjutbar & fast</option>
      </select>

      <label htmlFor="glassModel">Glasmodell:</label>
      <select id="glassModel" {...register("specialProperties.glassModel")}>
        <option value="Ej angivet">Ej angivet</option>
        <option value="2-glas">2-glas</option>
        <option value="3-glas">3-glas</option>
        <option value="Isolerglas">Isolerglas</option>
      </select>

      <label htmlFor="glassType">Glastyp:</label>
      <select id="glassType" {...register("specialProperties.glassType")}>
        <option value="Ej angivet">Ej angivet</option>
        <option value="Cotswold">Cotswold</option>
        <option value="Klar-/planglas">Klar-/planglas</option>
      </select>

      <label htmlFor="temperedGlass">Härdat glas:</label>
      <select
        id="temperedGlass"
        {...register("specialProperties.temperedGlass")}
      >
        <option value="Ej angivet">Ej angivet</option>
        <option value="Ja">Ja</option>
        <option value="Nej">Nej</option>
      </select>
    </div>
  );
};

const GallerForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor="godstjocklek">Godstjocklek (mm):</label>
      <input
        id="godstjocklek"
        type="text"
        {...register("specialProperties.godstjocklek")}
      />

      <label htmlFor="hanging">Hängning:</label>
      <select id="hanging" {...register("specialProperties.hanging")}>
        <option value="Ej angivet">Ej angivet</option>
        <option value="VH">VH</option>
        <option value="HH">HH</option>
        <option value="UVH">UVH</option>
        <option value="UHH">UHH</option>
        <option value="IVH">IVH</option>
        <option value="IHH">IHH</option>
      </select>

      <label htmlFor="openable">Öppningsbart:</label>
      <select id="openable" {...register("specialProperties.openable")}>
        <option value="Ej angivet">Ej angivet</option>
        <option value="Ja">Ja</option>
        <option value="Nej">Nej</option>
      </select>
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

"use client";

import React from "react";
import PropertiesForm from "../categories/PropertiesForm";
import DimensionsForm from "../categories/DimensionsForm";
import ProductInformationForm from "../categories/ProductInformationForm";
import SpecialForm from "../categories/SpecialForm";

const Step2: React.FC = React.memo(() => {
  return (
    <div className="step flex flex-col gap-8">
      <PropertiesForm />
      <SpecialForm />
      <DimensionsForm />
      <SpecialForm />
      <ProductInformationForm />
    </div>
  );
});

export default Step2;

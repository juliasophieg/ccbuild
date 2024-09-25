"use client";

import React from "react";
import LocationForm from "../categories/Location";
import GeneralForm from "../categories/ProductName";
import ConditionForm from "../categories/ConditionForm";

const Step1: React.FC = React.memo(() => {
  return (
    <div className="step">
      <h2>Step 1: Location</h2>
      <GeneralForm />
      <LocationForm />
      <ConditionForm />
    </div>
  );
});

export default Step1;

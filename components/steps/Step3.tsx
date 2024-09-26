"use client";

import React from "react";
import PriceForm from "../categories/PriceForm";
import AddressForm from "../categories/AddressForm";
import PickupForm from "../categories/PickupForm";

const Step3: React.FC = React.memo(() => {
  return (
    <div className="step flex flex-col gap-8">
      <PriceForm />
      <AddressForm />
      <PickupForm />
    </div>
  );
});

export default Step3;

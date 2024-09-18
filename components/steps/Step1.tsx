"use client";

import React from 'react';
import LocationForm from '../categories/Location';
import NameForm from '../categories/ProductName';
import CategoryForm from '../categories/ProductCategory';

const Step1: React.FC = React.memo(() => {
  return (
    <div className="step">
      <h2>Step 1: Location</h2>
      <NameForm />
      <LocationForm />
      <CategoryForm />
    </div>
  );
});

export default Step1;

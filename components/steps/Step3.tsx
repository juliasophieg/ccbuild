"use client";

import React from 'react';
import FormatForm from '../categories/FormatForm';

const Step3: React.FC = React.memo(() => {
  return (
    <div className="step">
      <h2>Step 3</h2>
      <FormatForm />
    </div>
  );
});

export default Step3;
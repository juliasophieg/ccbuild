import React from 'react';
import LocationForm from '../categories/Location';

const Step1: React.FC = React.memo(() => {
  return (
    <div className="step">
      <h2>Location</h2>
        <LocationForm />
    </div>
  );
});

export default Step1;
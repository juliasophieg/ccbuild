"use client";

import React from "react";
import { useCategoryContext } from "@/context/CategoryContext";

const ProgressBar: React.FC = () => {
  const { selectedStep } = useCategoryContext();

  const steps = [
    "Generell information",
    "Egenskaper",
    "Marknadsplats",
    "Plats/Status/Antal",
    "Överblick",
  ];

  const currentStepIndex = steps.indexOf(selectedStep);

  return (
    <div className="flex flex-col gap-4 px-16">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full ${
              index <= currentStepIndex
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            {index + 1}
          </div>
          <div
            className={`${
              index <= currentStepIndex
                ? "font-bold text-black"
                : "text-gray-500"
            }`}
          >
            {step}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;

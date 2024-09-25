"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type CategoryContextType = {
  selectedCategory1: string;
  setSelectedCategory1: (value: string) => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedCategory1, setSelectedCategory1] = useState<string>("");

  return (
    <CategoryContext.Provider
      value={{
        selectedCategory1,
        setSelectedCategory1,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error(
      "useCategoryContext must be used within a CategoryProvider"
    );
  }
  return context;
};

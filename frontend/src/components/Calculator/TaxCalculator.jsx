import React, { useState } from "react";
import LocalTaxCalculator from "./LocalTaxCalculator";
import ForeignTaxCalculator from "./ForeignTaxCalculator";

const TaxCalculator = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center p-4 mt-10">
        TAX CALCULATOR
      </h1>

      {/* Salary input section */}
      <div className="mb-5">
        <label htmlFor="salaryRate" className="block text-gray-600">
          Salary Tax Rate (%)
        </label>
        <input
          type="number"
          className="w-full mt-2 p-3 border rounded-lg bg-gray-700 text-white"
          placeholder="Enter tax rate"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="businessRate" className="block text-gray-600">
          Business Tax Rate (%)
        </label>
        <input
          type="number"
          className="w-full mt-2 p-3 border rounded-lg bg-gray-700 text-white"
          placeholder="Enter tax rate"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-7 mb-5 mt-10">
        <LocalTaxCalculator />
        <ForeignTaxCalculator />
      </div>
    </div>
  );
};

export default TaxCalculator;

import React, { useState, useEffect } from "react";
import axios from "axios";
import LocalTaxCalculator from "./LocalTaxCalculator";
import ForeignTaxCalculator from "./ForeignTaxCalculator";

const TaxCalculator = () => {
  const [income, setincome] = useState({
    salary: 0,
    business_income: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const currency = "Rs:";

  useEffect(() => {
    const fetchTaxRates = async () => {
      try {
        // Get token from localStorage or your auth context
        const token = localStorage.getItem("token");

        if (token) {
          const response = await axios.get(
            "http://localhost:5000/api/auth/user-profile",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setincome({
            salary: response.data.salary || 0,
            business_income: response.data.business_income || 0,
          });
        } else {
          setincome({
            salary: 0,
            business_income: 0,
          });
        }
      } catch (err) {
        setError("Failed to fetch tax rates");
        console.error("Error fetching tax rates:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTaxRates();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto my-20"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center p-4 mt-10">
        TAX CALCULATOR
      </h1>

      {/* Salary input section */}
      <div className="mb-5">
        <label htmlFor="salary" className="block text-gray-600">
          Salary
        </label>
        <input
          type="number"
          id="salary"
          value={income.salary.toFixed(2)}
          readOnly
          className="w-full mt-2 p-3 border rounded-lg bg-gray-700 text-white"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="business" className="block text-gray-600">
          Business Income
        </label>
        <input
          type="number"
          id="business"
          value={income.business_income.toFixed(2)}
          readOnly
          className="w-full mt-2 p-3 border rounded-lg bg-gray-700 text-white"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-5 mt-10">
        <LocalTaxCalculator
          salaryTaxRate={income.salaryTaxRate}
          businessTaxRate={income.businessTaxRate}
        />
        <ForeignTaxCalculator
          salaryTaxRate={income.salaryTaxRate}
          businessTaxRate={income.businessTaxRate}
        />
      </div>
    </div>
  );
};

export default TaxCalculator;

import React, { useState } from "react";

const foreignTaxBrackets = [
  { limit: 150000, rate: 0, tax: 0 }, // Relief for the first 150,000 LKR
  { limit: 83333, rate: 6, tax: 0 }, // Next 83,333 LKR at 6%
  { limit: Infinity, rate: 15, tax: 0 }, // Remaining amount at 15%
];

const ForeignTaxCalculator = () => {
  const [monthlyProfitUSD, setMonthlyProfitUSD] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(300);
  const [convertedMonthlyProfitLKR, setConvertedMonthlyProfitLKR] = useState(0);
  const [monthlyTax, setMonthlyTax] = useState(0);
  const [annualIncome, setAnnualIncome] = useState(0);
  const [annualTax, setAnnualTax] = useState(0);
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [isRemitted, setIsRemitted] = useState(true);
  const [taxDetails, setTaxDetails] = useState([]);

  const calculateForeignTax = (income, remitted) => {
    let remainingIncome = income;
    let totalTax = 0;
    const details = foreignTaxBrackets.map((bracket) => {
      if (remainingIncome <= 0) return { ...bracket, tax: 0 };

      const taxableAmount = Math.min(remainingIncome, bracket.limit);
      const tax = (taxableAmount * bracket.rate) / 100;
      totalTax += tax;
      remainingIncome -= taxableAmount;

      return { ...bracket, tax };
    });

    setTaxDetails(details);
    return totalTax;
  };

  const handleProfitChange = (e) => {
    const profit = parseFloat(e.target.value) || 0;
    setMonthlyProfitUSD(profit);
    const convertedProfit = profit * exchangeRate;
    setConvertedMonthlyProfitLKR(convertedProfit);
    setAnnualIncome(convertedProfit * 12);

    const tax = calculateForeignTax(convertedProfit, isRemitted);
    setMonthlyTax(tax);
    setAnnualTax(tax * 12);
    setMonthlyTotal(convertedProfit - tax);
  };

  const handleExchangeRateChange = (e) => {
    const rate = parseFloat(e.target.value) || 300;
    setExchangeRate(rate);
    const convertedProfit = monthlyProfitUSD * rate;
    setConvertedMonthlyProfitLKR(convertedProfit);
    setAnnualIncome(convertedProfit * 12);

    const tax = calculateForeignTax(convertedProfit, isRemitted);
    setMonthlyTax(tax);
    setAnnualTax(tax * 12);
    setMonthlyTotal(convertedProfit - tax);
  };

  const handleRemittanceChange = (e) => {
    setIsRemitted(e.target.checked);
    const tax = calculateForeignTax(
      convertedMonthlyProfitLKR,
      e.target.checked
    );
    setMonthlyTax(tax);
    setAnnualTax(tax * 12);
    setMonthlyTotal(convertedMonthlyProfitLKR - tax);
  };

  const resetCalculator = () => {
    setMonthlyProfitUSD(0);
    setExchangeRate(300);
    setConvertedMonthlyProfitLKR(0);
    setMonthlyTax(0);
    setAnnualIncome(0);
    setAnnualTax(0);
    setMonthlyTotal(0);
    setTaxDetails([]);
    setIsRemitted(true);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Foreign Tax Calculator
      </h2>
      <form>
        <div className="mb-4">
          <label htmlFor="monthlyProfitUSD" className="block text-gray-300">
            Monthly Profit (USD)
          </label>

          <div>
            <div className="mt-2">
              <div className="flex items-center border rounded-md bg-gray-700 pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="shrink-0 text-base text-white  select-none sm:text-sm/6">
                  ${" "}
                </div>
                <input
                  type="number"
                  id="monthlyProfitUSD"
                  className="block rounded-md min-w-0 grow py-1.5 pr-3 pl-1  text-base bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder="Enter amount in USD"
                  value={monthlyProfitUSD}
                  onChange={handleProfitChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="exchangeRate" className="block text-gray-300">
            Exchange Rate (1 USD = LKR)
          </label>
          <input
            type="number"
            id="exchangeRate"
            className="w-full mt-2 p-2 border rounded-lg bg-gray-700 text-white"
            placeholder="Enter exchange rate"
            value={exchangeRate}
            onChange={handleExchangeRateChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="convertedMonthlyProfitLKR"
            className="block text-gray-300"
          >
            Converted Monthly Profit (LKR)
          </label>

          <div>
            <div className="mt-2">
              <div className="flex items-center border rounded-md bg-gray-700 pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="shrink-0 text-base text-white  select-none sm:text-sm/6">
                  Rs.
                </div>
                <input
                  type="number"
                  id="convertedMonthlyProfitLKR"
                  className="block rounded-md min-w-0 grow py-1.5 pr-3 pl-1  text-base bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  disabled
                  value={convertedMonthlyProfitLKR}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="monthlyIncomeLKR" className="block text-gray-300">
              Monthly Income (LKR)
            </label>
            <div>
              <div className="mt-2">
                <div className="flex items-center border rounded-md bg-gray-700 pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                  <div className="shrink-0 text-base text-white  select-none sm:text-sm/6">
                    Rs.
                  </div>
                  <input
                    type="number"
                    id="monthlyIncomeLKR"
                    className="block rounded-md min-w-0 grow py-1.5 pr-3 pl-1  text-base bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    disabled
                    value={convertedMonthlyProfitLKR}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="monthlyTaxLKR" className="block text-gray-300">
              Monthly Tax (LKR)
            </label>

            <div>
              <div className="mt-2">
                <div className="flex items-center border rounded-md bg-gray-700 pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                  <div className="shrink-0 text-base text-white  select-none sm:text-sm/6">
                    Rs.
                  </div>
                  <input
                    type="number"
                    id="monthlyTaxLKR"
                    className="block rounded-md min-w-0 grow py-1.5 pr-3 pl-1  text-base bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    disabled
                    value={monthlyTax}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="annualIncome" className="block text-gray-300">
              Annual Income (LKR)
            </label>
            <div>
              <div className="mt-2">
                <div className="flex items-center border rounded-md bg-gray-700 pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                  <div className="shrink-0 text-base text-white  select-none sm:text-sm/6">
                    Rs.
                  </div>
                  <input
                    type="number"
                    id="annualIncome"
                    className="block rounded-md min-w-0 grow py-1.5 pr-3 pl-1  text-base bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    disabled
                    value={annualIncome}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="annualTax" className="block text-gray-300">
              Annual Tax (LKR)
            </label>
            <div>
              <div className="mt-2">
                <div className="flex items-center border rounded-md bg-gray-700 pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                  <div className="shrink-0 text-base text-white  select-none sm:text-sm/6">
                    Rs.
                  </div>
                  <input
                    type="number"
                    id="annualTax"
                    className="block rounded-md min-w-0 grow py-1.5 pr-3 pl-1  text-base bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    disabled
                    value={annualTax}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-gray-700 text-white rounded-lg">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4">
                  Monthly Salary (Annual Salary / 12)
                </th>
                <th className="py-2 px-4">Rate (%)</th>
                <th className="py-2 px-4">Tax</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {taxDetails.map((detail, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">
                    {index === 0
                      ? "Up to 150,000"
                      : index === 1
                      ? "First 83,333 LKR"
                      : `Next ${detail.limit.toLocaleString()} LKR`}
                  </td>
                  <td className="py-2 px-4">{detail.rate}</td>
                  <td className="py-2 px-4">
                    {"Rs. " + detail.tax.toFixed(2)}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="py-2 px-4">Effective Tax Rate</td>
                <td className="py-2 px-4">15.00%</td>
                <td className="py-2 px-4">{"Rs. " + monthlyTax.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          type="button"
          onClick={resetCalculator}
          className="w-full py-2 bg-blue-500 text-white rounded-lg mt-8"
        >
          Reset Calculator
        </button>
      </form>
    </div>
  );
};

export default ForeignTaxCalculator;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(20000);
  const [loanTerm, setLoanTerm] = useState(5); // years
  const [interestRateClean, setInterestRateClean] = useState(5.5);
  const [interestRateDefault, setInterestRateDefault] = useState(9.5);

  // IDs for labels/inputs
  const idLoanType = "loan-type";
  const idLoanAmount = "loan-amount";
  const idLoanTerm = "loan-term";
  const idRateClean = "rate-clean";
  const idRateDefault = "rate-default";

  const calculateInterest = (principal, rate, years) => {
    const monthlyRate = rate / 100 / 12;
    const payments = years * 12;
    const monthlyPayment =
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments));
    return monthlyPayment * payments - principal;
  };

  const calculateMonthlyPayment = (principal, rate, years) => {
    const monthlyRate = rate / 100 / 12;
    const payments = years * 12;
    return (
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments))
    );
  };

  const cleanCreditInterest = calculateInterest(
    loanAmount,
    interestRateClean,
    loanTerm
  );
  const defaultCreditInterest = calculateInterest(
    loanAmount,
    interestRateDefault,
    loanTerm
  );
  const cleanCreditMonthly = calculateMonthlyPayment(
    loanAmount,
    interestRateClean,
    loanTerm
  );
  const defaultCreditMonthly = calculateMonthlyPayment(
    loanAmount,
    interestRateDefault,
    loanTerm
  );

  return (
    <section
      id="loancalculator"
      className="py-14 bg-gradient-to-br from-blue-50 to-blue-100"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Loan Comparison{" "}
            <span className="text-transparent bg-clip-text bg-blue">
              Calculator
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            See how much you could save with clean credit versus default credit.
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row gap-0">
            {/* Left: Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-blue-100">
              <form className="space-y-5">
                {/* Loan Type */}
                <div>
                  <label
                    htmlFor={idLoanType}
                    className="block text-base font-medium text-blue-900 mb-1"
                  >
                    Loan Type
                  </label>
                  <select
                    id={idLoanType}
                    name="loanType"
                    className="w-full px-4 py-2 rounded-lg border border-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 bg-blue-50"
                  >
                    <option>Home Loan</option>
                    <option>Personal Loan</option>
                    <option>Auto Loan</option>
                    <option>Business Loan</option>
                  </select>
                </div>

                {/* Loan Amount */}
                <div>
                  <label
                    htmlFor={idLoanAmount}
                    className="block text-base font-medium text-blue-900 mb-1"
                  >
                    Loan Amount ($)
                  </label>
                  <div className="relative">
                    <span
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400"
                      aria-hidden="true"
                    >
                      $
                    </span>
                    <input
                      id={idLoanAmount}
                      name="loanAmount"
                      type="number"
                      inputMode="decimal"
                      min={0}
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-2 rounded-lg border border-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 bg-white"
                    />
                  </div>
                </div>

                {/* Loan Term */}
                <div>
                  <label
                    htmlFor={idLoanTerm}
                    className="block text-base font-medium text-blue-900 mb-1"
                  >
                    Loan Term (years)
                  </label>
                  <select
                    id={idLoanTerm}
                    name="loanTerm"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full px-4 py-2 rounded-lg border border-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 bg-blue-50"
                  >
                    {[1, 2, 3, 5, 7, 10, 15, 20, 25, 30].map((year) => (
                      <option key={year} value={year}>
                        {year} years
                      </option>
                    ))}
                  </select>
                </div>

                {/* Rates */}
                <fieldset>
                  <legend className="block text-base font-medium text-blue-900 mb-2">
                    Interest rates (%)
                  </legend>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor={idRateClean}
                        className="block text-base text-blue-900 mb-1"
                      >
                        Clean Credit Rate
                      </label>
                      <input
                        id={idRateClean}
                        name="cleanRate"
                        type="number"
                        step="0.1"
                        inputMode="decimal"
                        min={0}
                        value={interestRateClean}
                        onChange={(e) =>
                          setInterestRateClean(Number(e.target.value))
                        }
                        className="w-full px-4 py-2 rounded-lg border border-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 bg-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={idRateDefault}
                        className="block text-base text-blue-900 mb-1"
                      >
                        Default Credit Rate
                      </label>
                      <input
                        id={idRateDefault}
                        name="defaultRate"
                        type="number"
                        step="0.1"
                        inputMode="decimal"
                        min={0}
                        value={interestRateDefault}
                        onChange={(e) =>
                          setInterestRateDefault(Number(e.target.value))
                        }
                        className="w-full px-4 py-2 rounded-lg border border-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 bg-white"
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>

            {/* Right: Results */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-8 bg-blue-50">
              {/* Live region so screen readers announce changes */}
              <div
                className="flex flex-col gap-4 h-full justify-center"
                aria-live="polite"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-base font-semibold text-blue">
                      Clean Credit
                    </div>
                    <div className="text-base text-blue-900">Interest</div>
                  </div>
                  <div className="text-2xl font-bold text-blue text-right">
                    ${cleanCreditInterest.toFixed(2)}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-base font-semibold text-blue-800">
                      Default Credit
                    </div>
                    <div className="text-base text-blue-900">Interest</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-800 text-right">
                    ${defaultCreditInterest.toFixed(2)}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-base text-blue">Clean Monthly</div>
                  <div className="text-lg text-blue font-semibold">
                    ${cleanCreditMonthly.toFixed(2)}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-base text-blue-800">Default Monthly</div>
                  <div className="text-lg text-blue-800 font-semibold">
                    ${defaultCreditMonthly.toFixed(2)}
                  </div>
                </div>
                <div className="rounded-lg bg-blue text-white py-3 px-4 mt-2 flex flex-col items-center">
                  <div className="font-semibold text-base">
                    Potential Savings
                  </div>
                  <div className="text-xl font-bold">
                    ${(defaultCreditInterest - cleanCreditInterest).toFixed(2)}
                  </div>
                  <div className="text-base font-semibold">
                    {defaultCreditInterest > 0
                      ? `${(
                          ((defaultCreditInterest - cleanCreditInterest) /
                            defaultCreditInterest) *
                          100
                        ).toFixed(1)}% less interest`
                      : "—"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-gray-600 text-base md:text-base">
              *. A one-off $330 administration fee applies regardless of the
              result. In the past year, more than 98% of our disputes have
              achieved a successful resolution.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default LoanCalculator;

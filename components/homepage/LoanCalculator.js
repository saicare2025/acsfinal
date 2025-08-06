import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(20000);
  const [loanTerm, setLoanTerm] = useState(5); // years
  const [interestRateClean, setInterestRateClean] = useState(5.5);
  const [interestRateDefault, setInterestRateDefault] = useState(9.5);

  // Calculate total interest and monthly payment (amortization formula)
  const calculateInterest = (principal, rate, years) => {
    const monthlyRate = rate / 100 / 12;
    const payments = years * 12;
    const monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -payments));
    return monthlyPayment * payments - principal;
  };

  const calculateMonthlyPayment = (principal, rate, years) => {
    const monthlyRate = rate / 100 / 12;
    const payments = years * 12;
    return principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -payments));
  };

  const cleanCreditInterest = calculateInterest(loanAmount, interestRateClean, loanTerm);
  const defaultCreditInterest = calculateInterest(loanAmount, interestRateDefault, loanTerm);
  const cleanCreditMonthly = calculateMonthlyPayment(loanAmount, interestRateClean, loanTerm);
  const defaultCreditMonthly = calculateMonthlyPayment(loanAmount, interestRateDefault, loanTerm);

  return (
    <section className="py-14 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Loan Comparison <span className="text-transparent bg-clip-text bg-blue">Calculator</span>
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
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">Loan Type</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 bg-blue-50">
                    <option>Home Loan</option>
                    <option>Personal Loan</option>
                    <option>Auto Loan</option>
                    <option>Business Loan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">Loan Amount ($)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">$</span>
                    <input 
                      type="number" 
                      value={loanAmount}
                      min={0}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-2 rounded-lg border border-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">Loan Term (years)</label>
                  <select 
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full px-4 py-2 rounded-lg border border-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 bg-blue-50"
                  >
                    {[1, 2, 3, 5, 7, 10, 15, 20, 25, 30].map(year => (
                      <option key={year} value={year}>{year} years</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-1">Clean Credit Rate (%)</label>
                    <input 
                      type="number" 
                      step="0.1"
                      value={interestRateClean}
                      min={0}
                      onChange={(e) => setInterestRateClean(Number(e.target.value))}
                      className="w-full px-4 py-2 rounded-lg border border-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-1">Default Credit Rate (%)</label>
                    <input 
                      type="number" 
                      step="0.1"
                      value={interestRateDefault}
                      min={0}
                      onChange={(e) => setInterestRateDefault(Number(e.target.value))}
                      className="w-full px-4 py-2 rounded-lg border border-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 bg-white"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Right: Results */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-8 bg-blue-50">
              <div className="flex flex-col gap-4 h-full justify-center">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-blue">Clean Credit</div>
                    <div className="text-base text-blue-900">Interest</div>
                  </div>
                  <div className="text-2xl font-bold text-blue text-right">
                    ${cleanCreditInterest.toFixed(2)}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-blue-800">Default Credit</div>
                    <div className="text-base text-blue-900">Interest</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-800 text-right">
                    ${defaultCreditInterest.toFixed(2)}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm text-blue">Clean Monthly</div>
                  <div className="text-lg text-blue font-semibold">${cleanCreditMonthly.toFixed(2)}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-blue-800">Default Monthly</div>
                  <div className="text-lg text-blue-800 font-semibold">${defaultCreditMonthly.toFixed(2)}</div>
                </div>
                <div className="rounded-lg bg-blue text-white py-3 px-4 mt-2 flex flex-col items-center">
                  <div className="font-semibold text-sm">Potential Savings</div>
                  <div className="text-xl font-bold">
                    ${(defaultCreditInterest - cleanCreditInterest).toFixed(2)}
                  </div>
                  <div className="text-xs opacity-80">
                    {defaultCreditInterest > 0
                      ? `${((defaultCreditInterest - cleanCreditInterest) / defaultCreditInterest * 100).toFixed(1)}% less interest`
                      : '—'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default LoanCalculator;

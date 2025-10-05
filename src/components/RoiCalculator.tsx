// jcaisystems/jcai-website/src/components/RoiCalculator.tsx
import { useState } from "react";

export const RoiCalculator = () => {
  const [employees, setEmployees] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [hoursSavedPerWeek, setHoursSavedPerWeek] = useState(10);
  const [calculationPeriod, setCalculationPeriod] = useState<'monthly' | 'yearly'>('yearly');
  const [results, setResults] = useState<{ time: number; money: number } | null>(null);

  const calculateSavings = () => {
    const weeklyMoneySaved = employees * hourlyRate * hoursSavedPerWeek;
    const weeklyTimeSaved = employees * hoursSavedPerWeek;

    if (calculationPeriod === 'monthly') {
      setResults({
        time: weeklyTimeSaved * 4.33,
        money: weeklyMoneySaved * 4.33,
      });
    } else {
      setResults({
        time: weeklyTimeSaved * 52,
        money: weeklyMoneySaved * 52,
      });
    }
  };

  const ToggleButton = ({ value, children }: { value: 'monthly' | 'yearly', children: React.ReactNode }) => (
    <button
      onClick={() => setCalculationPeriod(value)}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        calculationPeriod === value
          ? 'bg-primary-accent text-background-dark'
          : 'bg-input-field-bg hover:bg-input-field-bg/80'
      }`}
      style={{
        backgroundColor: calculationPeriod === value ? 'var(--primary-accent)' : '#111827',
        color: calculationPeriod === value ? 'var(--background-dark)' : 'var(--text-primary)',
        border: '1px solid var(--border-input)'
      }}
    >
      {children}
    </button>
  );

  return (
    <section>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            Calculate Your Potential ROI
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            See how much time and money you can save with automation.
          </p>
        </div>
        <div className="card max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="employees" className="block mb-2 font-medium">Number of Employees</label>
                <input
                  id="employees"
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value) || 0)}
                  className="input-field w-full"
                />
              </div>
              <div>
                <label htmlFor="hourlyRate" className="block mb-2 font-medium">Average Hourly Rate ($)</label>
                <input
                  id="hourlyRate"
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value) || 0)}
                  className="input-field w-full"
                />
              </div>
            </div>
            <div>
              <label htmlFor="hoursSavedPerWeek" className="block mb-2 font-medium">Hours Saved Per Employee Per Week</label>
              <input
                id="hoursSavedPerWeek"
                type="number"
                value={hoursSavedPerWeek}
                onChange={(e) => setHoursSavedPerWeek(parseInt(e.target.value) || 0)}
                className="input-field w-full"
              />
            </div>
            <div className="flex flex-col items-center space-y-2">
              <label className="font-medium">Calculation Period</label>
              <div className="flex gap-2">
                <ToggleButton value="monthly">Monthly</ToggleButton>
                <ToggleButton value="yearly">Yearly</ToggleButton>
              </div>
            </div>
            <button onClick={calculateSavings} className="cta-button w-full">
              Calculate Savings
            </button>
            {results && (
              <div className="text-center pt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold">Time Saved</p>
                    <p className="text-4xl font-bold" style={{ color: 'var(--primary-accent)' }}>
                      {Math.round(results.time).toLocaleString()} hrs
                    </p>
                    <p>per {calculationPeriod === 'monthly' ? 'month' : 'year'}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Money Saved</p>
                    <p className="text-4xl font-bold" style={{ color: 'var(--primary-accent)' }}>
                      ${Math.round(results.money).toLocaleString()}
                    </p>
                     <p>per {calculationPeriod === 'monthly' ? 'month' : 'year'}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
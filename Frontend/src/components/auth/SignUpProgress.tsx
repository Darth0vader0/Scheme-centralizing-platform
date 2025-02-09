import React from 'react';
import { Check } from 'lucide-react';

interface SignUpProgressProps {
  currentStep: number;
}

export const SignUpProgress: React.FC<SignUpProgressProps> = ({ currentStep }) => {
  const steps = [
    { number: 1, title: 'Basic Info' },
    { number: 2, title: 'Personal Details' },
    { number: 3, title: 'Education' },
  ];

  return (
    <div className="w-full py-6">
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="relative flex flex-col items-center space-y-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 shadow-md ${
                step.number <= currentStep
                  ? 'bg-orange-600 border-orange-600'
                  : 'border-gray-300'
              }`}
            >
              {step.number < currentStep ? (
                <Check className="w-6 h-6 text-white" />
              ) : (
                <span
                  className={`text-sm font-bold ${
                    step.number === currentStep ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {step.number}
                </span>
              )}
            </div>
            <div className="text-sm font-medium text-gray-500 text-center">
              {step.title}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="text-orange-600 text-xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  step.number < currentStep ? 'text-orange-600' : 'text-gray-300'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
  
  );
};
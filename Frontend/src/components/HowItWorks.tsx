import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: "Enter your details",
    description: "Tell us about yourself and your requirements"
  },
  {
    step: 2,
    title: "Get recommendations",
    description: "Receive personalized scheme suggestions"
  },
  {
    step: 3,
    title: "Search manually",
    description: "Browse through available schemes"
  },
  {
    step: 4,
    title: "Easy application",
    description: "Apply with official links and guidance"
  }
];

export const HowItWorks = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold">Simple Process</span>
          <h2 className="text-3xl font-bold mt-2 text-gray-900">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
                {index < 3 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-8 text-orange-600 transform translate-x-1/2" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold inline-flex items-center gap-2">
            Start Your Journey
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
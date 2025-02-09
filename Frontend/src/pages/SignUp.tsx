import React, { useState } from 'react';
import { SignUpProgress } from '../components/auth/SignUpProgress';
import { BasicInfo } from '../components/auth/SignUpSteps/BasicInfo';
import { PersonalDetails } from '../components/auth/SignUpSteps/PersonalDetails';
import { EducationDetails } from '../components/auth/SignUpSteps/EducationDetails';

export const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    // Personal Details
    state: '',
    city: '',
    annualIncome: '',
    category: '',
    // Education Details
    educationLevel: '',
    fieldOfStudy: '',
    employmentStatus: '',
    institute: '',
    sector: '',
  });

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-orange-600 hover:text-orange-500">
            Sign in
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SignUpProgress currentStep={currentStep} />
          
          <div className="mt-8">
            {currentStep === 1 && (
              <BasicInfo
                formData={formData}
                setFormData={setFormData}
                onNext={handleNext}
              />
            )}
            {currentStep === 2 && (
              <PersonalDetails
                formData={formData}
                setFormData={setFormData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {currentStep === 3 && (
              <EducationDetails
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleSubmit}
                onBack={handleBack}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp
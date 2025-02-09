import React, { useState } from 'react';
import { IndianStates } from '../../../data/IndianStates';

interface PersonalDetailsProps {
  formData: {
    state: string;
    city: string;
    annualIncome: string;
    category: string;
  };
  setFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  formData,
  setFormData,
  onNext,
  onBack,
}) => {
  const [errors, setErrors] = useState({
    state: '',
    city: '',
    annualIncome: '',
    category: '',
  });

  const categories = ['General', 'SC', 'ST', 'OBC'];

  const validateForm = () => {
    const newErrors = {
      state: !formData.state ? 'Please select a state' : '',
      city: !formData.city ? 'Please enter your city' : '',
      annualIncome: !formData.annualIncome ? 'Please enter your annual income' : '',
      category: !formData.category ? 'Please select your category' : '',
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
          State
        </label>
        <select
          id="state"
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="">Select State</option>
          {IndianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          City/District
        </label>
        <input
          type="text"
          id="city"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
          placeholder="Enter your city"
        />
        {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
      </div>

      <div>
        <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700">
          Annual Family Income
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">₹</span>
          </div>
          <input
            type="number"
            id="annualIncome"
            value={formData.annualIncome}
            onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
            className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            placeholder="0.00"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">/year</span>
          </div>
        </div>
        {errors.annualIncome && (
          <p className="mt-1 text-sm text-red-600">{errors.annualIncome}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <div className="mt-2 space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                id={category}
                type="radio"
                name="category"
                value={category}
                checked={formData.category === category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
              />
              <label htmlFor={category} className="ml-3 block text-sm text-gray-700">
                {category}
              </label>
            </div>
          ))}
        </div>
        {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Next
        </button>
      </div>
    </form>
  );
};
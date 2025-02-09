import React, { useState } from 'react';

interface EducationDetailsProps {
  formData: {
    educationLevel: string;
    fieldOfStudy: string;
    employmentStatus: string;
    institute: string;
    sector: string;
  };
  setFormData: (data: any) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export const EducationDetails: React.FC<EducationDetailsProps> = ({
  formData,
  setFormData,
  onSubmit,
  onBack,
}) => {
  const [errors, setErrors] = useState({
    educationLevel: '',
    fieldOfStudy: '',
    employmentStatus: '',
  });

  const educationLevels = ['School', 'Diploma', 'Undergraduate', 'Postgraduate', 'PhD'];
  const fieldsOfStudy = [
    'Engineering',
    'Medicine',
    'Arts',
    'Science',
    'Commerce',
    'Law',
    'Other',
  ];
  const employmentStatuses = [
    'Student',
    'Self-Employed',
    'Govt Employee',
    'Private Employee',
    'Unemployed',
  ];
  const sectors = [
    'Agriculture',
    'IT',
    'Manufacturing',
    'Healthcare',
    'Education',
    'Finance',
    'Other',
  ];

  const validateForm = () => {
    const newErrors = {
      educationLevel: !formData.educationLevel ? 'Please select your education level' : '',
      fieldOfStudy: !formData.fieldOfStudy ? 'Please select your field of study' : '',
      employmentStatus: !formData.employmentStatus ? 'Please select your employment status' : '',
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  const isEmployed = ['Self-Employed', 'Govt Employee', 'Private Employee'].includes(
    formData.employmentStatus
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700">
          Current Education Level
        </label>
        <select
          id="educationLevel"
          value={formData.educationLevel}
          onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="">Select Education Level</option>
          {educationLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
        {errors.educationLevel && (
          <p className="mt-1 text-sm text-red-600">{errors.educationLevel}</p>
        )}
      </div>

      <div>
        <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700">
          Field of Study
        </label>
        <select
          id="fieldOfStudy"
          value={formData.fieldOfStudy}
          onChange={(e) => setFormData({ ...formData, fieldOfStudy: e.target.value })}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="">Select Field of Study</option>
          {fieldsOfStudy.map((field) => (
            <option key={field} value={field}>
              {field}
            </option>
          ))}
        </select>
        {errors.fieldOfStudy && (
          <p className="mt-1 text-sm text-red-600">{errors.fieldOfStudy}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Employment Status</label>
        <div className="mt-2 space-y-2">
          {employmentStatuses.map((status) => (
            <div key={status} className="flex items-center">
              <input
                id={status}
                type="radio"
                name="employmentStatus"
                value={status}
                checked={formData.employmentStatus === status}
                onChange={(e) => setFormData({ ...formData, employmentStatus: e.target.value })}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
              />
              <label htmlFor={status} className="ml-3 block text-sm text-gray-700">
                {status}
              </label>
            </div>
          ))}
        </div>
        {errors.employmentStatus && (
          <p className="mt-1 text-sm text-red-600">{errors.employmentStatus}</p>
        )}
      </div>

      <div>
        <label htmlFor="institute" className="block text-sm font-medium text-gray-700">
          University/Institute Name (Optional)
        </label>
        <input
          type="text"
          id="institute"
          value={formData.institute}
          onChange={(e) => setFormData({ ...formData, institute: e.target.value })}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
          placeholder="Enter your institute name"
        />
      </div>

      {isEmployed && (
        <div>
          <label htmlFor="sector" className="block text-sm font-medium text-gray-700">
            Sector
          </label>
          <select
            id="sector"
            value={formData.sector}
            onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="">Select Sector</option>
            {sectors.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>
        </div>
      )}

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
          Submit
        </button>
      </div>
    </form>
  );
};
import React, { useState } from 'react';
import { Plus, Loader2, FileText } from 'lucide-react';

interface SchemeFormData {
  title: string;
  description: string;
  eligibility: string;
  benefits: string;
  deadline: string;
  maxBenefit: string;
  category: string;
  state: string;
  pdfDescription: File | null;
}

export const SchemeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<SchemeFormData>({
    title: '',
    description: '',
    eligibility: '',
    benefits: '',
    deadline: '',
    maxBenefit: '',
    category: '',
    state: '',
    pdfDescription: null,
  });
  const [pdfPreview, setPdfPreview] = useState<string>('');

  const categories = ['Agriculture', 'Education', 'Healthcare', 'Housing'];
  const states = ['All States', 'Maharashtra', 'Gujarat', 'Punjab', 'Uttar Pradesh'];

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setFormData({ ...formData, pdfDescription: file });
      setPdfPreview(file.name);
    } else {
      alert('Please upload a PDF file');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Scheme submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      eligibility: '',
      benefits: '',
      deadline: '',
      maxBenefit: '',
      category: '',
      state: '',
      pdfDescription: null,
    });
    setPdfPreview('');
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Scheme</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Scheme Title
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label htmlFor="pdfDescription" className="block text-sm font-medium text-gray-700">
            Detailed Description (PDF)
          </label>
          <div className="mt-1 flex items-center">
            <label className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500">
              <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <FileText className="w-5 h-5" />
                <span>Upload PDF</span>
              </div>
              <input
                id="pdfDescription"
                name="pdfDescription"
                type="file"
                accept=".pdf"
                className="sr-only"
                onChange={handlePdfChange}
                required
              />
            </label>
            {pdfPreview && (
              <span className="ml-3 text-sm text-gray-600">{pdfPreview}</span>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Upload a detailed PDF description of the scheme (max 10MB)
          </p>
        </div>

        <div>
          <label htmlFor="eligibility" className="block text-sm font-medium text-gray-700">
            Eligibility Criteria
          </label>
          <textarea
            id="eligibility"
            rows={2}
            value={formData.eligibility}
            onChange={(e) => setFormData({ ...formData, eligibility: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label htmlFor="benefits" className="block text-sm font-medium text-gray-700">
            Benefits
          </label>
          <textarea
            id="benefits"
            rows={2}
            value={formData.benefits}
            onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
              Application Deadline
            </label>
            <input
              type="date"
              id="deadline"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label htmlFor="maxBenefit" className="block text-sm font-medium text-gray-700">
              Maximum Benefit Amount
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">₹</span>
              </div>
              <input
                type="text"
                id="maxBenefit"
                value={formData.maxBenefit}
                onChange={(e) => setFormData({ ...formData, maxBenefit: e.target.value })}
                className="block w-full pl-7 pr-12 rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                placeholder="0.00"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State
            </label>
            <select
              id="state"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state.toLowerCase()}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Plus className="w-4 h-4 mr-2" />
              Add Scheme
            </>
          )}
        </button>
      </form>
    </div>
  );
};
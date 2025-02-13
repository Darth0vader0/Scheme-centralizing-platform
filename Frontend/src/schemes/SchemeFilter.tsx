import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SchemeFiltersProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: any) => void;
}

export const SchemeFilters: React.FC<SchemeFiltersProps> = ({ onSearch, onFilterChange }) => {
  const categories = ['Agriculture', 'Education', 'Healthcare', 'Housing', 'All'];
  const states = ['All States', 'Maharashtra', 'Gujarat', 'Punjab', 'Uttar Pradesh'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search schemes..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex gap-4">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            onChange={(e) => onFilterChange({ category: e.target.value })}
          >
            {categories.map((category) => (
              <option key={category} value={category.toLowerCase()}>
                {category}
              </option>
            ))}
          </select>
          
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            onChange={(e) => onFilterChange({ state: e.target.value })}
          >
            {states.map((state) => (
              <option key={state} value={state.toLowerCase()}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="flex gap-2 mt-4">
        <button className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm hover:bg-orange-200">
          <Filter className="w-4 h-4 mr-1" />
          Income: Below 2.5L
        </button>
        <button className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm hover:bg-orange-200">
          Active Schemes
        </button>
        <button className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm hover:bg-orange-200">
          Deadline: This Month
        </button>
      </div>
    </div>
  );
};
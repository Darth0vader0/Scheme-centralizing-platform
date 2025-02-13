import React, { useState } from 'react';
import { SchemeCard } from '../schemes/SchemeCard';
import { SchemeFilters } from '../schemes/SchemeFilter'
import { schemes, Scheme } from '../data/schemes';
import { Footer } from '../components/Footer';

export const SuggestedSchemes = () => {
  const [filteredSchemes, setFilteredSchemes] = useState<Scheme[]>(schemes);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    category: 'all',
    state: 'all states',
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterSchemes(query, activeFilters);
  };

  const handleFilterChange = (filters: any) => {
    const newFilters = { ...activeFilters, ...filters };
    setActiveFilters(newFilters);
    filterSchemes(searchQuery, newFilters);
  };

  const filterSchemes = (query: string, filters: any) => {
    let filtered = schemes;

    // Search filter
    if (query) {
      filtered = filtered.filter((scheme) =>
        scheme.title.toLowerCase().includes(query.toLowerCase()) ||
        scheme.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter((scheme) =>
        scheme.category.toLowerCase() === filters.category
      );
    }

    // State filter
    if (filters.state !== 'all states') {
      filtered = filtered.filter((scheme) =>
        scheme.state === 'all states' || scheme.state === filters.state
      );
    }

    setFilteredSchemes(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Suggested Schemes</h1>
          <p className="text-gray-600">Discover government schemes tailored for you</p>
        </div>

        <SchemeFilters onSearch={handleSearch} onFilterChange={handleFilterChange} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredSchemes.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              title={scheme.title}
              description={scheme.description}
              eligibility={scheme.eligibility}
              benefits={scheme.benefits}
              deadline={scheme.deadline}
              maxBenefit={scheme.maxBenefit}
              beneficiaries={scheme.beneficiaries}
              applyLink={scheme.applyLink}
            />
          ))}
        </div>

        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No schemes found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
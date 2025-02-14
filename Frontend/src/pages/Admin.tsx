import React from 'react';
import { SchemeForm } from '../components/admin/SchemeForm';
import { SchemeList } from '../components/admin/SchemeList';
import { AdminHeader } from '../components/admin/AdminHeader';

export const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Scheme Form */}
          <div className="lg:col-span-1">
            <SchemeForm />
          </div>
          
          {/* Scheme List */}
          <div className="lg:col-span-2">
            <SchemeList />
          </div>
        </div>
      </div>
    </div>
  );
};
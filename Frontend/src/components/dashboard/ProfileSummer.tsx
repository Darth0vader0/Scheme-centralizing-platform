import React from 'react';
import { User, MapPin, GraduationCap, Users } from 'lucide-react';

const ProfileSummary = () => {
  const profileCompletion = 75;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Profile Summary</h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
            <User size={18} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Name</p>
            <p className="font-medium">Rahul Kumar</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
            <MapPin size={18} />
          </div>
          <div>
            <p className="text-sm text-gray-600">State</p>
            <p className="font-medium">Maharashtra</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
            <GraduationCap size={18} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Education</p>
            <p className="font-medium">Bachelor's Degree</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
            <Users size={18} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Category</p>
            <p className="font-medium">General</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Profile Completion</span>
            <span className="text-sm font-medium">{profileCompletion}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-orange-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${profileCompletion}%` }}
            />
          </div>
          {profileCompletion < 100 && (
            <p className="text-sm text-orange-600 mt-2 font-medium">
              Complete your profile for better recommendations
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
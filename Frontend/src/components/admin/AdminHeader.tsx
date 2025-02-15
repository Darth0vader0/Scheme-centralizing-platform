import React from 'react';
import { Bell, Settings, LogOut } from 'lucide-react';

export const AdminHeader = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
              <Settings className="w-5 h-5" />
            </button>
            <div className="border-l border-gray-200 h-6 mx-2"></div>
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <img
                src="https://ih0.redbubble.net/image.4702490221.5192/raf,360x360,075,t,fafafa:ca443f4786.jpg"
                alt="Admin"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:block font-medium">Admin User</span>
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
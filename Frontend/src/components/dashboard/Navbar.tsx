import React from 'react';
import { 
  Search, 
  Bell, 
  User,
  LogOut,
  Settings as SettingsIcon,
  
} from 'lucide-react';

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);
  const [notifications] = React.useState(3);

  return (
    <nav className="bg-white shadow-lg px-4 md:px-6 py-4 fixed w-full top-0 z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1">
          <h1 className="text-2xl font-bold text-orange-600 mr-12">GovSchemes</h1>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-orange-600 font-medium">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Schemes</a>
            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Scholarships</a>
          </div>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search schemes..."
              className="w-64 px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>

          <button className="relative">
            <Bell size={24} className="text-gray-600 hover:text-orange-600 transition-colors" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shadow-md">
                <User size={20} className="text-orange-600" />
              </div>
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 transition-colors">
                  <User size={16} className="mr-3 text-orange-600" />
                  Profile
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 transition-colors">
                  <SettingsIcon size={16} className="mr-3 text-orange-600" />
                  Settings
                </a>
                <hr className="my-2" />
                <a href="#" className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut size={16} className="mr-3" />
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
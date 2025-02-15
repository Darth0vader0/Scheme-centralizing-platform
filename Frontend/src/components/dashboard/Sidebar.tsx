import React from 'react';
import { 
  Home, 
  BookMarked, 
  ClipboardList, 
  Settings,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  toggleSidebar: () => void;
  onMobileClose: () => void;
  profileInfo: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isCollapsed, 
  isMobileOpen,
  toggleSidebar,
  onMobileClose,
  profileInfo
}) => {
  const menuItems = [
    { icon: Home, label: 'My Recommended Schemes', count: 12 },
    { icon: BookMarked, label: 'Saved Schemes', count: 5 },
    { icon: ClipboardList, label: 'Application Status', count: 3 },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className=" inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <aside className={` left-0 top-0 h-screen bg-white shadow-xl transition-all duration-300 ease-in-out z-40
        ${isCollapsed ? 'w-20' : 'w-64'} 
        md:translate-x-0 pt-20
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isCollapsed && !isMobileOpen ? 'md:-translate-x-0' : ''}
        overflow-y-auto
      `}>
        {/* Mobile Close Button */}
        <button 
          onClick={onMobileClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 md:hidden"
        >
          <X size={24} />
        </button>

        {/* Desktop Toggle Button */}
        <div className="hidden md:block absolute -right-3 top-24">
          <button 
            onClick={toggleSidebar}
            className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-orange-600 hover:text-orange-700"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Profile Info - Only visible on mobile when sidebar is expanded */}
        <div className={`md:hidden ${!isCollapsed || isMobileOpen ? 'block' : 'hidden'} px-4 mb-6`}>
          {profileInfo}
        </div>

        <nav className="px-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center px-4 py-3 my-1 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 group relative"
            >
              <div className="relative">
                <item.icon size={20} className="flex-shrink-0 transition-transform group-hover:scale-110" />
                {isCollapsed && item.count && (
                  <span className="absolute -top-2 -right-2 bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded-full text-xs">
                    {item.count}
                  </span>
                )}
              </div>
              {(!isCollapsed || isMobileOpen) && (
                <>
                  <span className="ml-4 flex-grow font-medium">{item.label}</span>
                  {item.count && (
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs">
                      {item.count}
                    </span>
                  )}
                </>
              )}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
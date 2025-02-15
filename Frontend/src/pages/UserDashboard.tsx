import React, { useState } from 'react';
import { GraduationCap, Briefcase, Home, Heart, Building2, Menu } from 'lucide-react';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import SchemeCard from '../components/dashboard/SchemeCard';
import ProfileSummary from '../components/dashboard/ProfileSummer';
import DeadlineCalendar from '../components/dashboard/DeadlineCalendar';

export  function UserDashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const schemes = [
    {
      title: "PM Kisan Samman Nidhi",
      category: "Agriculture",
      eligibility: "Small and marginal farmers",
      deadline: "2024-03-31",
      icon: <Building2 size={24} />
    },
    {
      title: "National Scholarship Portal",
      category: "Education",
      eligibility: "Students with family income < 8 LPA",
      deadline: "2024-04-15",
      icon: <GraduationCap size={24} />
    },
    {
      title: "PM-SVANIDHI",
      category: "Business",
      eligibility: "Street vendors and micro entrepreneurs",
      deadline: "2024-04-30",
      icon: <Briefcase size={24} />
    },
    {
      title: "PM Awas Yojana",
      category: "Housing",
      eligibility: "Low and middle-income families",
      deadline: "2024-05-01",
      icon: <Home size={24} />
    },
    {
      title: "Ayushman Bharat",
      category: "Healthcare",
      eligibility: "Families below poverty line",
      deadline: "2024-12-31",
      icon: <Heart size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex pt-16 relative">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="md:hidden fixed bottom-4 right-4 z-50 bg-orange-600 text-white p-3 rounded-full shadow-lg"
        >
          <Menu size={24} />
        </button>

        <Sidebar 
          isCollapsed={isSidebarCollapsed}
          isMobileOpen={showMobileMenu}
          toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          onMobileClose={() => setShowMobileMenu(false)}
          profileInfo={<ProfileSummary />}
        />

        <main className={`flex-1 p-4 md:p-6 transition-all duration-300 
          ${isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'}
          ${showMobileMenu ? 'overflow-hidden' : ''}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Schemes</h2>
                <div className="space-y-6 max-h-[calc(100vh-12rem)] overflow-y-auto pr-2 scrollbar-thin">
                  {schemes.map((scheme, index) => (
                    <SchemeCard key={index} {...scheme} />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar Content - Hidden on mobile */}
            <div className="hidden lg:block space-y-6">
              <ProfileSummary />
              <DeadlineCalendar schemes={schemes} />
            </div>

            {/* Calendar Only - Visible on mobile */}
            <div className="block lg:hidden">
              <DeadlineCalendar schemes={schemes} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


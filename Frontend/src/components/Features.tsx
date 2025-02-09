import React from 'react';
import { Search, Target, Bell, FileText, Users, IndianRupee, GraduationCap, Building } from 'lucide-react';

const features = [
  {
    icon: <Search className="w-8 h-8 text-orange-600" />,
    title: "Smart Search & Filter",
    description: "Find schemes easily based on your eligibility criteria"
  },
  {
    icon: <Target className="w-8 h-8 text-orange-600" />,
    title: "Personalized Recommendations",
    description: "Get schemes based on your profile and requirements"
  },
  {
    icon: <Bell className="w-8 h-8 text-orange-600" />,
    title: "Real-time Notifications",
    description: "Stay updated on new schemes and deadlines"
  },
  {
    icon: <FileText className="w-8 h-8 text-orange-600" />,
    title: "Easy Application Guidance",
    description: "Step-by-step guidance for scheme applications"
  }
];

const categories = [
  { icon: <Users />, label: "Social Welfare" },
  { icon: <IndianRupee />, label: "Financial Aid" },
  { icon: <GraduationCap />, label: "Education" },
  { icon: <Building />, label: "Housing" },
];

export const Features = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold">Our Features</span>
          <h2 className="text-3xl font-bold mt-2 text-gray-900">
            Everything you need to access government schemes
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3 bg-orange-50 rounded-full hover:bg-orange-100 transition-colors cursor-pointer"
            >
              <span className="text-orange-600">{category.icon}</span>
              <span className="font-medium">{category.label}</span>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200"
            >
              <div className="inline-block p-3 bg-orange-100 rounded-full mb-4 group-hover:bg-orange-200 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
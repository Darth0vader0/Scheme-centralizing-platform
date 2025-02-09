import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const redirectToSignUp = () => {
    window.location.href = '/signup';
  };
  return (
    <div 
      className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-orange-50 to-orange-100"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 backdrop-blur-[2px]" />
      <div className="container mx-auto px-6 text-center relative">
        <div className="animate-fade-in-up">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Empowering India's Future
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Find the Right Government Schemes & <span className="text-orange-600">Scholarships</span> for You
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore schemes based on your location, education, and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2" onClick={redirectToSignUp}>
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 bg-white text-orange-600 rounded-lg border-2 border-orange-600 hover:bg-orange-50 transition-colors font-semibold">
              Browse Schemes
            </button>
          </div>
          <div className="mt-12 flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">1000+</div>
              <div className="text-gray-600">Active Schemes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">50L+</div>
              <div className="text-gray-600">Beneficiaries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">28</div>
              <div className="text-gray-600">States Covered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin as LinkedIn, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated with New Schemes</h3>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest updates on government schemes and opportunities.</p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500"
              />
              <button className="px-6 py-2 bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Schemes Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Education</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Healthcare</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Agriculture</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Small Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-5 h-5" />
                  support@schemesportal.in
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-5 h-5" />
                  1800-XXX-XXXX
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  New Delhi, India
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <LinkedIn className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-8 text-center text-gray-400">
          <p>&copy; 2024 Government Schemes Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
import React, { useState } from 'react';
import { Calendar, Users, IndianRupee, ArrowRight, HelpCircle } from 'lucide-react';
import { Chatbot } from '../chat/Chatbot';

interface SchemeCardProps {
  title: string;
  description: string;
  eligibility: string;
  benefits: string;
  deadline: string;
  maxBenefit: string;
  beneficiaries: string;
  applyLink: string;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({
  title,
  description,
  eligibility,
  benefits,
  deadline,
  maxBenefit,
  beneficiaries,
  applyLink,
}) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 mt-1 rounded-full bg-orange-100 flex items-center justify-center">
                <Users className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <p className="font-medium text-gray-700">Eligibility</p>
                <p className="text-gray-600">{eligibility}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 mt-1 rounded-full bg-orange-100 flex items-center justify-center">
                <IndianRupee className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <p className="font-medium text-gray-700">Benefits</p>
                <p className="text-gray-600">{benefits}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6 text-sm">
            <div className="flex items-center gap-1 bg-orange-50 text-orange-700 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4" />
              <span>Deadline: {deadline}</span>
            </div>
            <div className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full">
              <IndianRupee className="w-4 h-4" />
              <span>Max Benefit: {maxBenefit}</span>
            </div>
            <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
              <Users className="w-4 h-4" />
              <span>{beneficiaries} Beneficiaries</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={applyLink}
              className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300 gap-2"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsChatOpen(true)}
              className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white text-orange-600 border-2 border-orange-600 rounded-lg hover:bg-orange-50 transition-colors duration-300 gap-2"
            >
              How to Apply
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <Chatbot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        schemeName={title}
      />
    </>
  );
};
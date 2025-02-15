import React from 'react';
import { BookmarkPlus, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

interface SchemeCardProps {
  title: string;
  category: string;
  eligibility: string;
  deadline: string;
  icon: React.ReactNode;
}

const SchemeCard: React.FC<SchemeCardProps> = ({
  title,
  category,
  eligibility,
  deadline,
  icon,
}) => {
  const formattedDeadline = format(new Date(deadline), 'MMM d, yyyy');

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
            <span className="inline-block text-sm text-orange-600 bg-orange-50 px-2 py-1 rounded-full mt-1">
              {category}
            </span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-orange-600 transition-colors md:ml-auto">
          <BookmarkPlus size={20} />
        </button>
      </div>

      <div className="mt-4">
        <p className="text-gray-600 text-sm">
          <span className="font-medium">Eligibility:</span> {eligibility}
        </p>
        <p className="text-gray-600 text-sm mt-1">
          <span className="font-medium">Deadline:</span>{' '}
          <span className="text-orange-600 font-medium">{formattedDeadline}</span>
        </p>
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between md:items-center">
        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2 shadow-md hover:shadow-lg w-full md:w-auto">
          <span>Apply Now</span>
          <ArrowRight size={16} />
        </button>
        <a href="#" className="text-orange-600 hover:text-orange-700 text-sm font-medium text-center md:text-left">
          View Details
        </a>
      </div>
    </div>
  );
};

export default SchemeCard;
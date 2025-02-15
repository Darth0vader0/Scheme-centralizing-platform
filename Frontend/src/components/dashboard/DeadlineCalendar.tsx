import React from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

interface Scheme {
  title: string;
  deadline: string;
  category: string;
}

interface DeadlineCalendarProps {
  schemes: Scheme[];
}

const DeadlineCalendar: React.FC<DeadlineCalendarProps> = ({ schemes }) => {
  const deadlineDates = schemes.map(scheme => new Date(scheme.deadline));
  const today = new Date();

  const getSchemeForDate = (date: Date) => {
    return schemes.find(scheme => {
      const deadlineDate = new Date(scheme.deadline);
      return (
        deadlineDate.getDate() === date.getDate() &&
        deadlineDate.getMonth() === date.getMonth() &&
        deadlineDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const footer = (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-600 mb-2">Upcoming Deadlines</h3>
      <div className="space-y-2">
        {schemes
          .filter(scheme => new Date(scheme.deadline) >= today)
          .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
          .slice(0, 3)
          .map((scheme, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-gray-700">{scheme.title}</span>
              <span className="text-orange-600 font-medium">
                {format(new Date(scheme.deadline), 'MMM d, yyyy')}
              </span>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Deadline Calendar</h2>
      <style>
        {`
          .rdp {
            --rdp-cell-size: 40px;
            --rdp-accent-color: #ea580c;
            --rdp-background-color: #fff7ed;
            margin: 0;
          }
          .rdp-day_today {
            font-weight: bold;
            border: 2px solid #ea580c;
          }
          .rdp-day_selected {
            background-color: var(--rdp-accent-color);
          }
          .rdp-day_selected:hover {
            background-color: #c2410c;
          }
        `}
      </style>
      <DayPicker
        mode="multiple"
        selected={deadlineDates}
        modifiers={{
          deadline: deadlineDates
        }}
        modifiersStyles={{
          deadline: {
            fontWeight: 'bold',
            backgroundColor: '#fff7ed',
            color: '#ea580c'
          }
        }}
        onDayClick={(date) => {
          const scheme = getSchemeForDate(date);
          if (scheme) {
            alert(`Deadline for ${scheme.title} (${scheme.category})`);
          }
        }}
        footer={footer}
      />
    </div>
  );
};

export default DeadlineCalendar;
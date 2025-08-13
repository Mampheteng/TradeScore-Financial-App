import React from 'react';
import { useApp } from '../context/AppContext';
import Header from '../components/layout/Header';

interface FAQPageProps {
  title: string;
  content: string;
}

const FAQPage: React.FC<FAQPageProps> = ({ title, content }) => {
  const { darkMode } = useApp();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} pb-20`}>
      <Header title={title} showBackButton  />
      
      <div className="p-4">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-sm border`}>
          <div className="prose prose-gray max-w-none">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index} className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
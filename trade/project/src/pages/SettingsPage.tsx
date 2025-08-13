import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Header from '../components/layout/Header';

const SettingsPage: React.FC = () => {
  const { userSettings, setUserSettings, darkMode } = useApp();
  const navigate = useNavigate(); // <-- add this

  const handleSettingChange = (key: keyof typeof userSettings, value: any) => {
    setUserSettings({ ...userSettings, [key]: value });

    if (key === 'pushNotifications') {
      if (value) {
        alert('Push notifications enabled! You will now receive real-time updates.');
      } else {
        alert('Push notifications disabled.');
      }
    }
  };

  const aboutItems = [
    { label: 'Terms of Service', page: '/terms-of-service' },
    { label: 'Privacy Policy', page: '/privacy-policy' },
    { label: 'Help Center', page: '/help-center' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} pb-20`}>
      <Header title="Settings" showBackButton />
      
      <div className="p-4 space-y-4">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-sm border`}>
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-3`}>
            App Preferences
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Dark mode
              </span>
              <input 
                type="checkbox" 
                checked={userSettings.darkMode}
                onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
                className="rounded" 
              />
            </div>
            <div className="flex items-center justify-between">
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Push notifications
              </span>
              <input 
                type="checkbox" 
                checked={userSettings.pushNotifications}
                onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
                className="rounded" 
              />
            </div>
            <div>
              <label className={`block text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                Language
              </label>
              <select 
                value={userSettings.language}
                onChange={(e) => handleSettingChange('language', e.target.value)}
                className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:border-teal-500`}
              >
                <option value="English">English</option>
                <option value="Sesotho">Sesotho</option>
                <option value="Afrikaans">Afrikaans</option>
              </select>
            </div>
          </div>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-sm border`}>
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-3`}>
            About
          </h3>
          <div className="space-y-2">
            {aboutItems.map((item, index) => (
              <button 
                key={index}
                onClick={() => navigate(item.page)} // <-- use navigate instead of setCurrentPage
                className={`w-full text-left p-2 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'} rounded transition-colors`}
              >
                {item.label}
              </button>
            ))}
            <div className={`p-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'} text-sm`}>
              Version 1.0.0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

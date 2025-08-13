import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Header from '../components/layout/Header';
import Button from '../components/ui/Button';

const AccountSettingsPage: React.FC = () => {
  const { userProfile, setUserProfile, userSettings, setUserSettings, darkMode } = useApp();
  const [formData, setFormData] = useState(userProfile);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: keyof typeof userSettings, value: boolean) => {
    setUserSettings({ ...userSettings, [field]: value });
  };

  const handleSave = () => {
    setUserProfile(formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} pb-20`}>
      <Header title="Account Settings" showBackButton  />
      
      <div className="p-4 space-y-4">
        {showSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Settings saved successfully!
          </div>
        )}

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-sm border`}>
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-3`}>
            Personal Information
          </h3>
          <div className="space-y-3">
            <div>
              <label className={`block text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                Full Name
              </label>
              <input 
                type="text" 
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:border-teal-500`}
              />
            </div>
            <div>
              <label className={`block text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                Email
              </label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:border-teal-500`}
              />
            </div>
            <div>
              <label className={`block text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                Phone
              </label>
              <input 
                type="tel" 
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:border-teal-500`}
              />
            </div>
          </div>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-sm border`}>
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-3`}>
            Preferences
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email notifications
              </span>
              <input 
                type="checkbox" 
                checked={userSettings.emailNotifications}
                onChange={(e) => handleCheckboxChange('emailNotifications', e.target.checked)}
                className="rounded" 
              />
            </div>
            <div className="flex items-center justify-between">
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                SMS notifications
              </span>
              <input 
                type="checkbox" 
                checked={userSettings.smsNotifications}
                onChange={(e) => handleCheckboxChange('smsNotifications', e.target.checked)}
                className="rounded" 
              />
            </div>
            <div className="flex items-center justify-between">
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Marketing communications
              </span>
              <input 
                type="checkbox" 
                checked={userSettings.marketingCommunications}
                onChange={(e) => handleCheckboxChange('marketingCommunications', e.target.checked)}
                className="rounded" 
              />
            </div>
          </div>
        </div>

        <Button onClick={handleSave} fullWidth>
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Header from '../components/layout/Header';
import Button from '../components/ui/Button';

const PrivacySecurityPage: React.FC = () => {
  const { darkMode } = useApp();
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);
  const [analyticsTracking, setAnalyticsTracking] = useState(true);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const enableTwoFactor = () => {
    setTwoFactorEnabled(true);
    alert('Two-factor authentication has been enabled! You will receive a setup code via SMS.');
  };

  const handlePasswordChange = () => {
    if (passwordData.new !== passwordData.confirm) {
      alert('New passwords do not match!');
      return;
    }
    if (passwordData.new.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }
    alert('Password changed successfully!');
    setShowPasswordForm(false);
    setPasswordData({ current: '', new: '', confirm: '' });
  };

  const downloadData = () => {
    alert('Your data export has been initiated. You will receive an email with download instructions within 24 hours.');
  };

  const deleteAccount = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone.'
    );
    if (confirmed) {
      alert('Account deletion request submitted. You will receive a confirmation email.');
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} pb-20`}>
      <Header title="Privacy & Security" showBackButton />
      
      <div className="p-4 space-y-4">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-sm border`}>
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-3`}>
            Security Settings
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Two-factor authentication
              </span>
              {twoFactorEnabled ? (
                <span className="text-green-600 text-sm font-medium">Enabled</span>
              ) : (
                <button 
                  onClick={enableTwoFactor}
                  className="text-teal-600 text-sm font-medium hover:text-teal-700"
                >
                  Enable
                </button>
              )}
            </div>
            <div className="flex items-center justify-between">
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Biometric login
              </span>
              <input 
                type="checkbox" 
                checked={biometricEnabled}
                onChange={(e) => setBiometricEnabled(e.target.checked)}
                className="rounded" 
              />
            </div>
            <button 
              onClick={() => setShowPasswordForm(true)}
              className={`w-full text-left p-3 ${darkMode ? 'text-gray-300 hover:bg-gray-700 border-gray-700' : 'text-gray-700 hover:bg-gray-50 border-gray-200'} rounded-lg border transition-colors`}
            >
              Change Password
            </button>
          </div>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-sm border`}>
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-3`}>
            Privacy Controls
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Data sharing
              </span>
              <input 
                type="checkbox" 
                checked={dataSharing}
                onChange={(e) => setDataSharing(e.target.checked)}
                className="rounded" 
              />
            </div>
            <div className="flex items-center justify-between">
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Analytics tracking
              </span>
              <input 
                type="checkbox" 
                checked={analyticsTracking}
                onChange={(e) => setAnalyticsTracking(e.target.checked)}
                className="rounded" 
              />
            </div>
            <button 
              onClick={downloadData}
              className={`w-full text-left p-3 ${darkMode ? 'text-gray-300 hover:bg-gray-700 border-gray-700' : 'text-gray-700 hover:bg-gray-50 border-gray-200'} rounded-lg border transition-colors`}
            >
              Download my data
            </button>
            <button 
              onClick={deleteAccount}
              className={`w-full text-left p-3 text-red-600 hover:bg-red-50 rounded-lg border border-red-200 transition-colors`}
            >
              Delete account
            </button>
          </div>
        </div>

        {showPasswordForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 w-full max-w-md`}>
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
                Change Password
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className={`block text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    Current Password
                  </label>
                  <input 
                    type="password" 
                    value={passwordData.current}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, current: e.target.value }))}
                    className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} rounded-lg px-3 py-2`}
                  />
                </div>
                <div>
                  <label className={`block text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    New Password
                  </label>
                  <input 
                    type="password" 
                    value={passwordData.new}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, new: e.target.value }))}
                    className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} rounded-lg px-3 py-2`}
                  />
                </div>
                <div>
                  <label className={`block text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    Confirm New Password
                  </label>
                  <input 
                    type="password" 
                    value={passwordData.confirm}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, confirm: e.target.value }))}
                    className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} rounded-lg px-3 py-2`}
                  />
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <Button onClick={handlePasswordChange} fullWidth>
                  Change Password
                </Button>
                <Button 
                  onClick={() => setShowPasswordForm(false)}
                  variant="secondary"
                  fullWidth
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacySecurityPage;
import React from 'react';
import { useApp } from '../context/AppContext';
import Button from '../components/ui/Button';

const NotificationsPage: React.FC = () => {
  const { notifications, setNotifications, darkMode } = useApp();

  const markAllAsRead = () => {
    setNotifications([]); // Clears all notifications
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} pb-20`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Notifications
          </h2>
          <Button 
            onClick={markAllAsRead}
            variant="outline"
            size="sm"
          >
            Mark all as read
          </Button>
        </div>

        <div className="space-y-4">
          {notifications.length === 0 ? (
            <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              No notifications
            </p>
          ) : (
            notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-sm border ${notification.read ? 'opacity-60' : ''}`}
              >
                <div className="flex items-start space-x-3">
                  {notification.icon}
                  <div className="flex-1">
                    <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-1`}>
                      {notification.title}
                    </h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-2`}>
                      {notification.message}
                    </p>
                    <p className={`${darkMode ? 'text-gray-500' : 'text-gray-400'} text-xs`}>
                      {notification.time}
                    </p>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;

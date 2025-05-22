import { Bell, CreditCard, TrendingUp, AlertCircle } from 'lucide-react';

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      title: 'Credit Score Update',
      message: 'Your credit score has increased by 15 points',
      icon: TrendingUp,
      time: '2 hours ago',
      type: 'success'
    },
    {
      id: 2,
      title: 'New Transaction',
      message: 'Payment of M15,000 to Supermarket',
      icon: CreditCard,
      time: '5 hours ago',
      type: 'info'
    },
    {
      id: 3,
      title: 'Security Alert',
      message: 'New device logged into your account',
      icon: AlertCircle,
      time: '1 day ago',
      type: 'warning'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-16">
      <div className="p-4">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium text-gray-800">Notifications</h2>
            <button className="text-sm text-teal-600">Mark all as read</button>
          </div>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            const bgColor = {
              success: 'bg-green-100',
              info: 'bg-blue-100',
              warning: 'bg-yellow-100'
            }[notification.type];
            const iconColor = {
              success: 'text-green-600',
              info: 'text-blue-600',
              warning: 'text-yellow-600'
            }[notification.type];

            return (
              <div key={notification.id} className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-start">
                  <div className={`p-2 rounded-full ${bgColor} mr-3`}>
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{notification.title}</h3>
                    <p className="text-sm text-gray-500 mb-1">{notification.message}</p>
                    <p className="text-xs text-gray-400">{notification.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
import { Home, MessageSquare, Search, LayoutGrid, User, Bell } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavItemProps {
  icon: typeof Home;
  isActive: boolean;
  onClick: () => void;
  badge?: number;
}

const NavItem = ({ icon: Icon, isActive, onClick, badge }: NavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-1 flex-col items-center justify-center py-2 relative ${
        isActive ? 'text-teal-600' : 'text-gray-500'
      }`}
    >
      <Icon className="w-6 h-6" />
      {badge !== undefined && badge > 0 && (
        <span className="absolute top-1 right-6 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );
};

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { 
      path: '/', 
      icon: Home 
    },
    { 
      path: '/contact', 
      icon: MessageSquare 
    },
    { 
      path: '/search', 
      icon: Search 
    },
    { 
      path: '/transactions', 
      icon: LayoutGrid 
    },
    { 
      path: '/notifications', 
      icon: Bell,
      badge: 3
    },
    { 
      path: '/account', 
      icon: User 
    }
  ];
  
  return (
    <nav className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 z-10 max-w-md mx-auto">
      <div className="flex items-center justify-between h-16">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            icon={item.icon}
            isActive={location.pathname === item.path}
            onClick={() => navigate(item.path)}
            badge={item.badge}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
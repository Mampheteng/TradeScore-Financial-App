import { ChevronLeft, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showOptionsButton?: boolean;
}

const Header = ({ 
  title, 
  showBackButton = false,
  showOptionsButton = false
}: HeaderProps) => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <header className="bg-teal-600 text-white p-4 flex items-center sticky top-0 z-10">
      {showBackButton && (
        <button 
          onClick={handleBack}
          className="mr-2 p-1 rounded-full hover:bg-teal-500 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      
      <h1 className="text-xl font-semibold flex-1">{title}</h1>
      
      {showOptionsButton && (
        <button className="p-1 rounded-full hover:bg-teal-500 transition-colors">
          <MoreVertical className="w-6 h-6" />
        </button>
      )}
    </header>
  );
};

export default Header;
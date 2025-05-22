import { ReactNode } from 'react';

interface QuickStatsCardProps {
  title: string;
  value?: string;
  subtitle?: string;
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  bgColor?: string;
}

const QuickStatsCard = ({
  title,
  value,
  subtitle,
  icon,
  label,
  onClick,
  bgColor = 'bg-gray-50'
}: QuickStatsCardProps) => {
  return (
    <div 
      className={`${bgColor} p-4 rounded-lg ${onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
      onClick={onClick}
    >
      <div className="flex flex-col h-full">
        <div className="text-sm text-gray-500 mb-1">{title}</div>
        
        {value && (
          <div className="text-lg font-medium text-gray-800 mb-1">{value}</div>
        )}
        
        {subtitle && (
          <div className="text-xs text-gray-500">{subtitle}</div>
        )}
        
        {label && (
          <div className="flex items-center justify-between mt-auto">
            <span className="text-sm text-teal-600">{label}</span>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickStatsCard;
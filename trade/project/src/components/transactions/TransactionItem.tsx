import { ReactNode } from 'react';

interface TransactionItemProps {
  icon: ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
  amount: string;
  date: string;
}

const TransactionItem = ({
  icon,
  iconBg,
  title,
  subtitle,
  amount,
  date
}: TransactionItemProps) => {
  return (
    <div className="flex items-center p-4 border border-gray-200 rounded-lg bg-white">
      <div className={`${iconBg} w-10 h-10 rounded-md flex items-center justify-center mr-4`}>
        {icon}
      </div>
      
      <div className="flex-1">
        <h4 className="font-medium text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      
      <div className="text-right">
        <p className="font-medium text-gray-800">{amount}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default TransactionItem;
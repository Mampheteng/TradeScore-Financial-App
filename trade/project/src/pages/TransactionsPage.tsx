import { useState } from 'react';
import { CreditCard, Phone, ShoppingBag } from 'lucide-react';
import TransactionItem from '../components/transactions/TransactionItem';
import TabGroup from '../components/ui/TabGroup';

const TransactionsPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = [
    { id: 'All', label: 'All' },
    { id: 'CPay', label: 'CPay' },
    { id: 'SMS', label: 'SMS' },
  ];

  const transactions = [
    {
      id: 1,
      title: 'CPay',
      subtitle: 'Supermarket',
      amount: 'M15,000',
      date: 'May 06',
      icon: <ShoppingBag className="w-5 h-5 text-white" />,
      iconBg: 'bg-teal-700',
      type: 'CPay'
    },
    {
      id: 2,
      title: 'Airtime',
      subtitle: 'SMS',
      amount: 'M1,000',
      date: 'July 01',
      icon: <Phone className="w-5 h-5 text-white" />,
      iconBg: 'bg-teal-700',
      type: 'SMS'
    },
    {
      id: 3,
      title: 'C2 Pay',
      subtitle: 'Supermarket',
      amount: 'M45,000',
      date: 'April 07',
      icon: <CreditCard className="w-5 h-5 text-white" />,
      iconBg: 'bg-green-700',
      type: 'CPay'
    },
  ];

  const filteredTransactions = activeTab === 'All' 
    ? transactions 
    : transactions.filter(t => t.type === activeTab);

  return (
    <div className="flex-1 overflow-y-auto pb-16">
      <div className="p-4">
        <div className="mb-4">
          <TabGroup 
            tabs={tabs} 
            activeTab={activeTab} 
            onChange={setActiveTab} 
          />
        </div>
        
        <div className="space-y-4">
          {filteredTransactions.map(transaction => (
            <TransactionItem
              key={transaction.id}
              icon={transaction.icon}
              iconBg={transaction.iconBg}
              title={transaction.title}
              subtitle={transaction.subtitle}
              amount={transaction.amount}
              date={transaction.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
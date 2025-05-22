interface Tab {
  id: string;
  label: string;
}

interface TabGroupProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

const TabGroup = ({ tabs, activeTab, onChange }: TabGroupProps) => {
  return (
    <div className="flex bg-gray-100 p-1 rounded-md">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
            activeTab === tab.id
              ? 'bg-white text-teal-700 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabGroup;
interface InstitutionItemProps {
  name: string;
  logo: string;
  isLinked: boolean;
  lastSync?: string;
}

const InstitutionItem = ({
  name,
  logo,
  isLinked,
  lastSync
}: InstitutionItemProps) => {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
      <div className="flex items-center">
        <div className="w-10 h-10 mr-4 flex items-center justify-center">
          <img 
            src={`https://images.pexels.com/photos/bank-logos/${name.toLowerCase().replace(/\s+/g, '-')}-logo.jpg`}
            alt={`${name} logo`} 
            className="w-8 h-8 object-contain"
          />
        </div>
        
        <div>
          <h4 className="font-medium text-gray-800">{name}</h4>
          {isLinked && lastSync && (
            <p className="text-xs text-gray-500">Last sync: {lastSync}</p>
          )}
        </div>
      </div>
      
      <button
        className={`text-xs font-medium px-3 py-1 rounded ${
          isLinked
            ? 'bg-teal-100 text-teal-800'
            : 'bg-gray-100 text-gray-800 hover:bg-teal-50 hover:text-teal-700'
        }`}
      >
        {isLinked ? 'Linked' : 'Link'}
      </button>
    </div>
  );
};

export default InstitutionItem;
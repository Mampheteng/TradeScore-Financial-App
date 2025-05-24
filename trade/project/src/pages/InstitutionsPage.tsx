import { useState } from 'react';
import { Search } from 'lucide-react';
import InstitutionItem from '../components/institutions/InstitutionItem';
import logo from '../public/images/nedbank.jpg'
import logo4 from '../public/images/standard.jpeg'
import logo5 from '../public/images/postbank.png'
import logo6 from '../public/images/fnb.jpeg'

const InstitutionsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const institutions = [
    {
      id: 1,
      name: 'Nedbank',
      logo: logo,
      isLinked: true,
      lastSync: 'May 08 2023',
    },
    {
      id: 2,
      name: 'Standard Bank',
      logo: logo4,
      isLinked: false,
    },
    {
      id: 3,
      name: 'Post Bank',
      logo: logo5,
      isLinked: false,
    },
    {
      id: 4,
      name: 'First National Bank',
      logo: logo6,
      isLinked: false,
    },
  ];

  const filteredInstitutions = searchQuery
    ? institutions.filter(inst => 
        inst.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : institutions;

  return (
    <div className="flex-1 overflow-y-auto pb-6">
      <div className="p-4">
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-base font-medium text-gray-700 mb-3">
            Linked Institutions
          </h3>
          <div className="space-y-4">
            {filteredInstitutions
              .filter(inst => inst.isLinked)
              .map(institution => (
                <InstitutionItem
                  key={institution.id}
                  name={institution.name}
                  logo={institution.logo}
                  isLinked={institution.isLinked}
                  lastSync={institution.lastSync}
                />
              ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-base font-medium text-gray-700 mb-3">
            Browse & Link Institutions
          </h3>
          <div className="space-y-4">
            {filteredInstitutions
              .filter(inst => !inst.isLinked)
              .map(institution => (
                <InstitutionItem
                  key={institution.id}
                  name={institution.name}
                  logo={institution.logo}
                  isLinked={institution.isLinked}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionsPage;
import { DollarSign, TrendingUp } from 'lucide-react';

const Logo = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center text-teal-500">
      <div className="absolute w-32 h-32 bg-teal-900 rounded-full opacity-10"></div>
      
      <div className="relative flex flex-col items-center">
        <div className="flex items-end mb-3">
          <div className="relative w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mr-2">
            <DollarSign className="w-10 h-10 text-teal-600" />
          </div>
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-2">
            <TrendingUp className="w-7 h-7 text-teal-600" />
          </div>
          <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center ml-2">
            <DollarSign className="w-8 h-8 text-teal-600" />
          </div>
        </div>
        <div className="flex h-2 mb-2">
          <div className="w-2 h-full bg-teal-500 mx-0.5"></div>
          <div className="w-2 h-full bg-teal-500 mx-0.5"></div>
          <div className="w-2 h-full bg-teal-500 mx-0.5"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
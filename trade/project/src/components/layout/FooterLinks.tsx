// components/layout/FooterLinks.tsx
import { useNavigate } from 'react-router-dom';

export default function FooterLinks() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-around p-2 border-t border-gray-200 bg-gray-50 text-xs text-gray-600">
      <button onClick={() => navigate('/terms-of-service')} className="hover:underline">
        Terms of Service
      </button>
      <button onClick={() => navigate('/privacy-policy')} className="hover:underline">
        Privacy Policy
      </button>
      <button onClick={() => navigate('/help-center')} className="hover:underline">
        Help Center
      </button>
    </div>
  );
}

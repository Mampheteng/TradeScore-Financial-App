import React, { useState } from 'react';
import { CreditCard, Plus, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Header from '../components/layout/Header';
import Button from '../components/ui/Button';

const PaymentMethodsPage: React.FC = () => {
  const { paymentMethods, setPaymentMethods, darkMode } = useApp();
  const [showAddCard, setShowAddCard] = useState(false);
  const [verifyingId, setVerifyingId] = useState<string | null>(null);
  const [showVerifyForm, setShowVerifyForm] = useState<string | null>(null);
  const [verificationData, setVerificationData] = useState({ amount1: '', amount2: '' });

  const removePaymentMethod = (id: string) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
  };

  const handleVerify = (id: string) => {
    setShowVerifyForm(id);
  };

  const submitVerification = (id: string) => {
    setVerifyingId(id);
    setTimeout(() => {
      setPaymentMethods(paymentMethods.map(method => 
        method.id === id ? { ...method, verified: true } : method
      ));
      setVerifyingId(null);
      setShowVerifyForm(null);
      setVerificationData({ amount1: '', amount2: '' });
      alert('Account verified successfully!');
    }, 2000);
  };

  const addNewCard = () => {
    const newCard = {
      id: Date.now().toString(),
      type: 'card' as const,
      last4: '9999',
      expiry: '12/28',
      verified: true
    };
    setPaymentMethods([...paymentMethods, newCard]);
    setShowAddCard(false);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} pb-20`}>
      <Header title="Payment Methods" showBackButton  />
      
      <div className="p-4 space-y-4">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-sm border`}>
          <div className="flex items-center justify-between mb-3">
            <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Saved Cards
            </h3>
            <button 
              onClick={() => setShowAddCard(true)}
              className="text-teal-600 text-sm font-medium hover:text-teal-700 flex items-center space-x-1"
            >
              <Plus className="w-4 h-4" />
              <span>Add New</span>
            </button>
          </div>
          
          <div className="space-y-3">
            {paymentMethods.filter(method => method.type === 'card').map((method) => (
              <div key={method.id} className={`border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg p-3`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        •••• •••• •••• {method.last4}
                      </p>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Expires {method.expiry}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => removePaymentMethod(method.id)}
                    className="text-red-600 text-sm hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-sm border`}>
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-3`}>
            Bank Accounts
          </h3>
          {paymentMethods.filter(method => method.type === 'bank').map((method) => (
            <div key={method.id} className={`border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg p-3`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {method.bankName}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    ••••••••{method.last4}
                  </p>
                  {method.verified && (
                    <p className="text-sm text-green-600">✓ Verified</p>
                  )}
                </div>
                {!method.verified && (
                  <button 
                    onClick={() => handleVerify(method.id)}
                    className="text-teal-600 text-sm font-medium hover:text-teal-700"
                    disabled={verifyingId === method.id}
                  >
                    {verifyingId === method.id ? 'Verifying...' : 'Verify'}
                  </button>
                )}
              </div>
              
              {showVerifyForm === method.id && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-3">
                    Enter the two small amounts we deposited into your account:
                  </p>
                  <div className="flex space-x-2 mb-3">
                    <input
                      type="text"
                      placeholder="0.01"
                      value={verificationData.amount1}
                      onChange={(e) => setVerificationData(prev => ({ ...prev, amount1: e.target.value }))}
                      className="w-20 border border-gray-300 rounded px-1 py-1 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="0.02"
                      value={verificationData.amount2}
                      onChange={(e) => setVerificationData(prev => ({ ...prev, amount2: e.target.value }))}
                      className="w-20 border border-gray-300 rounded px-2 py-1 text-sm"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      onClick={() => submitVerification(method.id)}
                      size="sm"
                      disabled={!verificationData.amount1 || !verificationData.amount2}
                    >
                      Verify
                    </Button>
                    <Button 
                      onClick={() => setShowVerifyForm(null)}
                      variant="secondary"
                      size="sm"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {showAddCard && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 w-full max-w-md`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Add New Card
                </h3>
                <button 
                  onClick={() => setShowAddCard(false)}
                  className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} hover:text-gray-700`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className={`block text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    Card Number
                  </label>
                  <input 
                    type="text" 
                    placeholder="1234 5678 9012 3456"
                    className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} rounded-lg px-3 py-2`}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                      Expiry Date
                    </label>
                    <input 
                      type="text" 
                      placeholder="MM/YY"
                      className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} rounded-lg px-3 py-2`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                      CVV
                    </label>
                    <input 
                      type="text" 
                      placeholder="123"
                      className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} rounded-lg px-3 py-2`}
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    Cardholder Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} rounded-lg px-3 py-2`}
                  />
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <Button onClick={addNewCard} fullWidth>
                  Add Card
                </Button>
                <Button 
                  onClick={() => setShowAddCard(false)}
                  variant="secondary"
                  fullWidth
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethodsPage;
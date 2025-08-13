import React, { useState } from 'react';
import { User } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Button from '../components/ui/Button';

// Define ChatMessage type so TypeScript knows the shape
type ChatMessage = {
  id: string;
  text: string;
  sender: 'user' | 'support';
  timestamp: string;
};

const LiveChatPage: React.FC = () => {
  const { chatMessages, setChatMessages, darkMode } = useApp() as {
    chatMessages: ChatMessage[];
    setChatMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
    darkMode: boolean;
  };

  const [chatInput, setChatInput] = useState('');

  const sendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text: chatInput,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages((prev) => [...prev, newMessage]);
    setChatInput('');

    // Simulate support response
    setTimeout(() => {
      const supportResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for your message. I\'ll help you with that right away!',
        sender: 'support',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages((prev) => [...prev, supportResponse]);
    }, 1000);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} flex flex-col`}>
      <div className={`${darkMode ? 'bg-teal-700' : 'bg-teal-600'} text-white p-4 flex items-center`}>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Support Agent</h1>
            <p className="text-sm text-teal-100">Online</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto pb-20">
        <div className="space-y-4">
          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-teal-600 text-white'
                    : darkMode
                      ? 'bg-gray-800 border text-white'
                      : 'bg-white border shadow-sm'
                }`}
              >
                <p>{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === 'user'
                      ? 'text-teal-100'
                      : darkMode
                        ? 'text-gray-400'
                        : 'text-gray-500'
                  }`}
                >
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border-t p-4 pb-24`}
      >
        <form onSubmit={sendChatMessage} className="flex space-x-2">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Type your message..."
            className={`flex-1 border ${
              darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'
            } rounded-lg px-3 py-2 focus:outline-none focus:border-teal-500`}
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default LiveChatPage;

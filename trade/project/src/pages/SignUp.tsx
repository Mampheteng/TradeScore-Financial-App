import { useState } from 'react';

interface SignUpPageProps {
  switchToLogin: () => void;
  goBack: () => void;
}
export default function SignUpPage({ switchToLogin, }: SignUpPageProps)
 {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <input
        className="border rounded p-2 w-full max-w-xs mb-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border rounded p-2 w-full max-w-xs mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border rounded p-2 w-full max-w-xs mb-2"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-teal-600 text-white px-6 py-2 rounded w-full max-w-xs mt-2"
        onClick={switchToLogin}
      >
        Sign Up
      </button>
      <p className="mt-4 text-sm">
        Already have an account?{' '}
        <button className="text-teal-600 underline" onClick={switchToLogin}>
          Log In
        </button>
      </p>
    </div>
  );
}

import { useState } from 'react';
import { Page } from '../App';

interface LoginProps {
  onNavigate: (page: Page) => void;
}

export default function Login({ onNavigate }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-300 to-cyan-200 flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full">
        <button
          onClick={() => onNavigate('home')}
          className="text-white font-semibold text-lg hover:text-gray-100 transition-colors mb-8 drop-shadow"
        >
          ← Back to Home
        </button>

        <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg text-center mb-16 tracking-tight">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block text-white font-semibold text-lg mb-3 drop-shadow">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-6 py-4 text-lg rounded-xl border-2 border-white bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white font-semibold text-lg mb-3 drop-shadow">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-6 py-4 text-lg rounded-xl border-2 border-white bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="pt-8">
            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-50 text-blue-600 font-bold text-xl py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

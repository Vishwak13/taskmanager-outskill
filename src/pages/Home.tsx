import { Page } from '../App';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-300 to-cyan-200 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full text-center space-y-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-lg tracking-tight">
          Welcome to My Task Manager
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <button
            onClick={() => onNavigate('login')}
            className="bg-white hover:bg-gray-50 text-blue-600 font-semibold text-xl py-6 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Login
          </button>

          <button
            onClick={() => onNavigate('signup')}
            className="bg-white hover:bg-gray-50 text-blue-600 font-semibold text-xl py-6 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Signup
          </button>

          <button
            onClick={() => onNavigate('dashboard')}
            className="bg-white hover:bg-gray-50 text-blue-600 font-semibold text-xl py-6 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Dashboard
          </button>
        </div>

        <button
          onClick={() => onNavigate('createTask')}
          className="bg-white hover:bg-gray-50 text-blue-600 font-semibold text-xl py-6 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
        >
          New Task
        </button>
      </div>
    </div>
  );
}

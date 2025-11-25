import { useState } from 'react';
import { Page } from '../App';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const [tasks, setTasks] = useState([
    'Finish homework',
    'Call John',
    'Buy groceries',
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-300 to-cyan-200 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg tracking-tight">
            Your Tasks
          </h1>
          <button
            onClick={() => onNavigate('home')}
            className="text-white font-semibold text-lg hover:text-gray-100 transition-colors drop-shadow"
          >
            ← Back
          </button>
        </div>

        <div className="bg-white bg-opacity-95 rounded-2xl shadow-xl p-8 space-y-8">
          <div>
            <ul className="space-y-4">
              {tasks.map((task, index) => (
                <li key={index} className="text-lg text-gray-800 font-medium flex items-start">
                  <span className="text-blue-600 font-bold mr-4">{index + 1}.</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex gap-4 mb-8">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add a new task..."
                className="flex-1 px-6 py-4 text-lg rounded-xl border-2 border-blue-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
              <button
                onClick={handleAddTask}
                className="bg-white border-2 border-blue-600 hover:bg-blue-50 text-blue-600 font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Add Task
              </button>
            </div>

            <button
              onClick={() => onNavigate('home')}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

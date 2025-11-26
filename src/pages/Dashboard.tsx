import { useState } from 'react';
import { Page } from '../App';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'todo' | 'done' | 'delegated'>('todo');

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-300 to-cyan-200 px-6 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <button
              onClick={() => onNavigate('home')}
              className="text-white font-semibold text-lg hover:text-gray-100 transition-colors mb-4 drop-shadow"
            >
              ← Back to Home
            </button>
            <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg tracking-tight">
              Dashboard
            </h1>
          </div>
          <button
            onClick={() => onNavigate('createTask')}
            className="bg-white hover:bg-gray-50 text-blue-600 font-semibold text-lg py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 h-fit"
          >
            New Task
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recents Card */}
          <div className="bg-white bg-opacity-95 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recents</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <p className="text-gray-800 font-semibold">Design homepage mockup</p>
                  <p className="text-sm text-gray-600 mt-1">Last viewed 2 hours ago</p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-800 font-semibold">Update project documentation</p>
                <p className="text-sm text-gray-600 mt-1">Last viewed 5 hours ago</p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-800 font-semibold">Review team feedback</p>
                <p className="text-sm text-gray-600 mt-1">Last viewed 1 day ago</p>
              </div>
            </div>
          </div>

          {/* Agenda Card */}
          <div className="bg-white bg-opacity-95 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Agenda</h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-blue-600 uppercase">Today</p>
                <p className="text-gray-600 text-sm mt-1">
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                <p className="text-gray-800 font-semibold">Team standup meeting</p>
                <p className="text-sm text-gray-600 mt-2">10:00 AM - 10:30 AM</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-800 font-semibold">Complete task review</p>
                <p className="text-sm text-gray-600 mt-2">2:00 PM - 3:00 PM</p>
              </div>
            </div>
          </div>

          {/* My Work Card */}
          <div className="bg-white bg-opacity-95 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">My Work</h2>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('todo')}
                className={`pb-4 font-semibold transition-colors ${
                  activeTab === 'todo'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                To Do
              </button>
              <button
                onClick={() => setActiveTab('done')}
                className={`pb-4 font-semibold transition-colors ${
                  activeTab === 'done'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Done
              </button>
              <button
                onClick={() => setActiveTab('delegated')}
                className={`pb-4 font-semibold transition-colors ${
                  activeTab === 'delegated'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Delegated
              </button>
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              {activeTab === 'todo' && (
                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-gray-800 font-semibold">Implement new feature</p>
                      <p className="text-sm text-gray-600 mt-1">Due: Nov 28</p>
                    </div>
                    <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                      In Progress
                    </span>
                  </div>
                </div>
              )}
              {activeTab === 'done' && (
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-gray-800 font-semibold">Code review for API</p>
                      <p className="text-sm text-gray-600 mt-1">Completed: Nov 20</p>
                    </div>
                    <span className="bg-green-200 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Done
                    </span>
                  </div>
                </div>
              )}
              {activeTab === 'delegated' && (
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-gray-800 font-semibold">Design UI mockups</p>
                      <p className="text-sm text-gray-600 mt-1">Assigned to: Sarah</p>
                    </div>
                    <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      To Do
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Assigned to Me Card */}
          <div className="bg-white bg-opacity-95 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Assigned to Me</h2>
            <div className="space-y-4">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-800 font-semibold">Critical bug fix</p>
                    <p className="text-sm text-gray-600 mt-1">Due: Nov 25</p>
                  </div>
                  <span className="bg-red-200 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                    High
                  </span>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-800 font-semibold">Update dependencies</p>
                    <p className="text-sm text-gray-600 mt-1">Due: Nov 30</p>
                  </div>
                  <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Medium
                  </span>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-800 font-semibold">Documentation review</p>
                    <p className="text-sm text-gray-600 mt-1">Due: Dec 5</p>
                  </div>
                  <span className="bg-green-200 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Low
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Page } from '../App';

interface CreateTaskProps {
  onNavigate: (page: Page) => void;
}

export default function CreateTask({ onNavigate }: CreateTaskProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    dueDate: '',
    assignee: '',
    priority: 'Medium',
    time: '',
    status: 'To Do',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Task created:', formData);
    setFormData({
      title: '',
      description: '',
      startDate: '',
      dueDate: '',
      assignee: '',
      priority: 'Medium',
      time: '',
      status: 'To Do',
      comments: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-300 to-cyan-200 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => onNavigate('home')}
          className="text-white font-semibold text-lg hover:text-gray-100 transition-colors mb-8 drop-shadow"
        >
          ← Back to Home
        </button>

        <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg text-center mb-16 tracking-tight">
          Create a Task
        </h1>

        <div className="bg-white bg-opacity-95 rounded-2xl shadow-xl p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Task Title */}
            <div>
              <label htmlFor="title" className="block text-gray-800 font-semibold text-lg mb-3">
                Task Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter task title"
                className="w-full px-6 py-4 text-lg rounded-xl border-2 border-blue-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-gray-800 font-semibold text-lg mb-3">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter task description"
                rows={4}
                className="w-full px-6 py-4 text-lg rounded-xl border-2 border-blue-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Start Date and Due Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="startDate" className="block text-gray-800 font-semibold text-lg mb-3">
                  Start Date
                </label>
                <input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-6 py-4 text-lg rounded-xl border-2 border-blue-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="dueDate" className="block text-gray-800 font-semibold text-lg mb-3">
                  Due Date
                </label>
                <input
                  id="dueDate"
                  name="dueDate"
                  type="date"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="w-full px-6 py-4 text-lg rounded-xl border-2 border-blue-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Assignee */}
            <div>
              <label htmlFor="assignee" className="block text-gray-800 font-semibold text-lg mb-3">
                Assignee
              </label>
              <input
                id="assignee"
                name="assignee"
                type="text"
                value={formData.assignee}
                onChange={handleChange}
                placeholder="Enter assignee name"
                className="w-full px-6 py-4 text-lg rounded-xl border-2 border-blue-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
            </div>

            {/* Priority, Time, and Status */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <label htmlFor="priority" className="block text-gray-800 font-semibold text-lg mb-3">
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-6 py-4 text-lg rounded-xl border-2 border-blue-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
              <div>
                <label htmlFor="time" className="block text-gray-800 font-semibold text-lg mb-3">
                  Time (hours)
                </label>
                <input
                  id="time"
                  name="time"
                  type="number"
                  min="0"
                  step="0.5"
                  value={formData.time}
                  onChange={handleChange}
                  placeholder="0"
                  className="w-full px-6 py-4 text-lg rounded-xl border-2 border-blue-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="status" className="block text-gray-800 font-semibold text-lg mb-3">
                  Task Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-6 py-4 text-lg rounded-xl border-2 border-blue-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                >
                  <option>To Do</option>
                  <option>In Progress</option>
                  <option>Done</option>
                </select>
              </div>
            </div>

            {/* Comments */}
            <div>
              <label htmlFor="comments" className="block text-gray-800 font-semibold text-lg mb-3">
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Add any additional comments"
                rows={4}
                className="w-full px-6 py-4 text-lg rounded-xl border-2 border-blue-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                className="w-full bg-white border-2 border-blue-600 hover:bg-blue-50 text-blue-600 font-bold text-xl py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Save Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

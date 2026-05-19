'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavbarProCompact from '@/components/NavbarProCompact';
import {
  IoCheckmarkCircle,
  IoBook,
  IoCalendar,
  IoPerson,
  IoDocuments,
  IoBarChart,
  IoNotifications,
  IoFitness,
  IoAdd,
  IoTrash,
  IoCheckmark,
} from 'react-icons/io5';

interface Task {
  id: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
}

interface Subject {
  id: string;
  name: string;
  code?: string;
  instructor?: string;
}

export default function Dashboard() {
  const [studentId, setStudentId] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [newTask, setNewTask] = useState({ title: '', dueDate: '', priority: 'medium' });

  useEffect(() => {
    const id = localStorage.getItem('studentId');
    if (!id) {
      window.location.href = '/login';
      return;
    }
    setStudentId(id);
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    // Mock data for now
    setTasks([
      {
        id: '1',
        title: 'Math Assignment Chapter 5',
        dueDate: '2026-05-25',
        status: 'pending',
        priority: 'high',
      },
      {
        id: '2',
        title: 'Physics Lab Report',
        dueDate: '2026-05-30',
        status: 'in-progress',
        priority: 'medium',
      },
      {
        id: '3',
        title: 'English Essay',
        dueDate: '2026-05-20',
        status: 'completed',
        priority: 'low',
      },
    ]);

    setSubjects([
      { id: '1', name: 'Mathematics', code: 'MATH101', instructor: 'Dr. Ahmed' },
      { id: '2', name: 'Physics', code: 'PHY101', instructor: 'Prof. Smith' },
      { id: '3', name: 'English', code: 'ENG101', instructor: 'Ms. Johnson' },
      { id: '4', name: 'Chemistry', code: 'CHEM101', instructor: 'Dr. Williams' },
    ]);
  };

  const addTask = () => {
    if (newTask.title) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          title: newTask.title,
          dueDate: newTask.dueDate,
          status: 'pending',
          priority: newTask.priority as 'low' | 'medium' | 'high',
        },
      ]);
      setNewTask({ title: '', dueDate: '', priority: 'medium' });
    }
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTaskStatus = (id: string) => {
    setTasks(
      tasks.map((t) =>
        t.id === id
          ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' }
          : t
      )
    );
  };

  const getTaskStats = () => {
    return {
      total: tasks.length,
      completed: tasks.filter((t) => t.status === 'completed').length,
      pending: tasks.filter((t) => t.status === 'pending').length,
    };
  };

  const taskStats = getTaskStats();
  const completionRate = taskStats.total > 0 ? (taskStats.completed / taskStats.total) * 100 : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarProCompact />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-xs text-gray-600 mt-1">Welcome back! Here's your academic overview.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <IoCheckmarkCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-xs text-gray-600">Completed</p>
                  <p className="text-lg font-bold text-gray-900">{taskStats.completed}</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <IoNotifications className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-xs text-gray-600">Pending</p>
                  <p className="text-lg font-bold text-gray-900">{taskStats.pending}</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <IoBook className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-600">Subjects</p>
                  <p className="text-lg font-bold text-gray-900">{subjects.length}</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <IoBarChart className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="text-xs text-gray-600">Completion</p>
                  <p className="text-lg font-bold text-gray-900">{Math.round(completionRate)}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Tasks and Subjects */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tasks Section */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-gray-900">Tasks & Assignments</h2>
                  <button
                    onClick={() => setActiveTab('add-task')}
                    className="p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-1 text-xs"
                  >
                    <IoAdd className="w-3 h-3" /> Add
                  </button>
                </div>

                {activeTab === 'add-task' && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <input
                      type="text"
                      placeholder="Task title"
                      value={newTask.title}
                      onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded-lg mb-2"
                    />
                    <input
                      type="date"
                      value={newTask.dueDate}
                      onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded-lg mb-2"
                    />
                    <select
                      value={newTask.priority}
                      onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded-lg mb-2"
                    >
                      <option>low</option>
                      <option>medium</option>
                      <option>high</option>
                    </select>
                    <button
                      onClick={addTask}
                      className="w-full px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700"
                    >
                      Add Task
                    </button>
                  </div>
                )}

                <div className="space-y-2">
                  {tasks.length === 0 ? (
                    <p className="text-xs text-gray-500">No tasks yet. Add one to get started!</p>
                  ) : (
                    tasks.map((task) => (
                      <div
                        key={task.id}
                        className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between hover:bg-gray-100"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <button
                            onClick={() => toggleTaskStatus(task.id)}
                            className={`p-1 rounded-full flex-shrink-0 ${
                              task.status === 'completed'
                                ? 'bg-green-100 text-green-600'
                                : 'bg-gray-200 text-gray-400'
                            }`}
                          >
                            <IoCheckmark className="w-3 h-3" />
                          </button>
                          <div>
                            <p
                              className={`text-xs font-medium ${
                                task.status === 'completed'
                                  ? 'line-through text-gray-500'
                                  : 'text-gray-900'
                              }`}
                            >
                              {task.title}
                            </p>
                            <p className="text-xs text-gray-500">{task.dueDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              task.priority === 'high'
                                ? 'bg-red-100 text-red-700'
                                : task.priority === 'medium'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-green-100 text-green-700'
                            }`}
                          >
                            {task.priority}
                          </span>
                          <button
                            onClick={() => deleteTask(task.id)}
                            className="p-1 text-red-600 hover:bg-red-50 rounded"
                          >
                            <IoTrash className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Subjects Section */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h2 className="text-sm font-bold text-gray-900 mb-4">My Subjects</h2>
                <div className="grid grid-cols-2 gap-3">
                  {subjects.map((subject) => (
                    <div
                      key={subject.id}
                      className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
                    >
                      <p className="text-xs font-semibold text-gray-900">{subject.name}</p>
                      <p className="text-xs text-gray-600">{subject.code}</p>
                      <p className="text-xs text-gray-500">{subject.instructor}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Progress & Info */}
            <div className="space-y-6">
              {/* Progress Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Weekly Progress</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium text-gray-700">Overall</span>
                      <span className="text-xs font-bold text-gray-900">{Math.round(completionRate)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${completionRate}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Link
                    href="/dashboard/attendance"
                    className="block p-2 text-xs text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-200"
                  >
                    📍 Mark Attendance
                  </Link>
                  <Link
                    href="/dashboard/grades"
                    className="block p-2 text-xs text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-200"
                  >
                    📊 View Grades
                  </Link>
                  <Link
                    href="/dashboard/notes"
                    className="block p-2 text-xs text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-200"
                  >
                    📝 Add Notes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

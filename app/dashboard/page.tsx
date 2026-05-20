'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import DashboardLayout from '@/components/DashboardLayout';

import {
  IoAdd,
  IoCheckmark,
  IoTrash,
} from 'react-icons/io5';

interface Task {
  _id: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
}

interface Subject {
  _id: string;
  name: string;
  code: string;
  instructor: string;
  credits: number;
}

interface Exam {
  _id: string;
  title: string;
  subject: string;
  date: string;
  time: string;
}

export default function Dashboard() {
  const router = useRouter();

  const [studentId, setStudentId] = useState<string | null>(null);
  const [student, setStudent] = useState<any>(null);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [exams, setExams] = useState<Exam[]>([]);

  const [loading, setLoading] = useState(true);

  const [showTaskForm, setShowTaskForm] = useState(false);

  const [newTask, setNewTask] = useState<{
    title: string;
    dueDate: string;
    priority: 'low' | 'medium' | 'high';
  }>({
    title: '',
    dueDate: '',
    priority: 'medium',
  });

  useEffect(() => {
    const studentData = localStorage.getItem('student');

    if (!studentData) {
      router.push('/login');
      return;
    }

    const parsedStudent = JSON.parse(studentData);

    setStudent(parsedStudent);
    setStudentId(parsedStudent._id);

    loadDashboardData(parsedStudent._id);
  }, [router]);

  const loadDashboardData = async (id: string) => {
    try {
      const [tasksRes, subjectsRes, examsRes] = await Promise.all([
        axios.get(`/api/tasks?studentId=${id}`),
        axios.get(`/api/subjects?studentId=${id}`),
        axios.get(`/api/exams?studentId=${id}`),
      ]);

      setTasks(tasksRes.data.tasks || []);
      setSubjects(subjectsRes.data.subjects || []);
      setExams(examsRes.data.exams || []);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async () => {
    if (!newTask.title || !newTask.dueDate || !studentId) {
      return;
    }

    try {
      const res = await axios.post('/api/tasks', {
        studentId,
        title: newTask.title,
        dueDate: newTask.dueDate,
        priority: newTask.priority,
        status: 'pending',
      });

      setTasks((prev) => [...prev, res.data.task]);

      setNewTask({
        title: '',
        dueDate: '',
        priority: 'medium',
      });

      setShowTaskForm(false);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await axios.delete(`/api/tasks/${taskId}`);

      setTasks((prev) =>
        prev.filter((task) => task._id !== taskId)
      );
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleUpdateTaskStatus = async (
    taskId: string,
    newStatus: 'pending' | 'completed'
  ) => {
    try {
      const res = await axios.put(`/api/tasks/${taskId}`, {
        status: newStatus,
      });

      setTasks((prev) =>
        prev.map((task) =>
          task._id === taskId ? res.data.task : task
        )
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  if (loading) {
    return (
      <DashboardLayout activeSection="dashboard">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-gray-500 text-lg font-medium">
            Loading...
          </div>
        </div>
      </DashboardLayout>
    );
  }

  const pendingTasks = tasks.filter(
    (task) => task.status === 'pending'
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === 'completed'
  ).length;

  const completionRate =
    tasks.length > 0
      ? (completedTasks / tasks.length) * 100
      : 0;

  return (
    <DashboardLayout activeSection="dashboard">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {student?.name}!
          </h1>

          <p className="text-gray-600 mt-2">
            Here&apos;s your academic overview
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Pending Tasks
            </p>

            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              {pendingTasks}
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Completed Tasks
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-2">
              {completedTasks}
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Subjects
            </p>

            <h2 className="text-3xl font-bold text-purple-600 mt-2">
              {subjects.length}
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Upcoming Exams
            </p>

            <h2 className="text-3xl font-bold text-orange-600 mt-2">
              {exams.length}
            </h2>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tasks Section */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  My Tasks
                </h2>

                <button
                  onClick={() =>
                    setShowTaskForm(!showTaskForm)
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition"
                >
                  <IoAdd className="w-4 h-4" />
                  Add Task
                </button>
              </div>

              {/* Form */}
              {showTaskForm && (
                <div className="p-6 border-b border-gray-200 bg-gray-50">
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Task title"
                      value={newTask.title}
                      onChange={(e) =>
                        setNewTask({
                          ...newTask,
                          title: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                      type="date"
                      value={newTask.dueDate}
                      onChange={(e) =>
                        setNewTask({
                          ...newTask,
                          dueDate: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <select
                      value={newTask.priority}
                      onChange={(e) =>
                        setNewTask({
                          ...newTask,
                          priority: e.target.value as
                            | 'low'
                            | 'medium'
                            | 'high',
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="low">
                        Low Priority
                      </option>

                      <option value="medium">
                        Medium Priority
                      </option>

                      <option value="high">
                        High Priority
                      </option>
                    </select>

                    <div className="flex gap-3">
                      <button
                        onClick={handleAddTask}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
                      >
                        Add Task
                      </button>

                      <button
                        onClick={() =>
                          setShowTaskForm(false)
                        }
                        className="flex-1 border border-gray-300 hover:bg-gray-100 py-3 rounded-xl transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Tasks */}
              <div className="p-6">
                {tasks.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500">
                      No tasks found.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <div
                        key={task._id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl hover:bg-gray-50 transition"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <button
                            onClick={() =>
                              handleUpdateTaskStatus(
                                task._id,
                                task.status === 'completed'
                                  ? 'pending'
                                  : 'completed'
                              )
                            }
                            className={`p-2 rounded-full transition ${
                              task.status === 'completed'
                                ? 'bg-green-100 text-green-600'
                                : 'bg-gray-100 text-gray-500'
                            }`}
                          >
                            <IoCheckmark className="w-4 h-4" />
                          </button>

                          <div>
                            <h3
                              className={`font-medium ${
                                task.status === 'completed'
                                  ? 'line-through text-gray-400'
                                  : 'text-gray-900'
                              }`}
                            >
                              {task.title}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                              Due:{' '}
                              {new Date(
                                task.dueDate
                              ).toLocaleDateString()}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span
                            className={`text-xs px-3 py-1 rounded-full font-medium ${
                              task.priority === 'high'
                                ? 'bg-red-100 text-red-600'
                                : task.priority === 'medium'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-green-100 text-green-600'
                            }`}
                          >
                            {task.priority}
                          </span>

                          <button
                            onClick={() =>
                              handleDeleteTask(task._id)
                            }
                            className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition"
                          >
                            <IoTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Progress
              </h3>

              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">
                  Completion Rate
                </span>

                <span className="font-semibold text-gray-900">
                  {Math.round(completionRate)}%
                </span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-500"
                  style={{
                    width: `${completionRate}%`,
                  }}
                />
              </div>
            </div>

            {/* Subjects */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Subjects
              </h3>

              {subjects.length === 0 ? (
                <p className="text-sm text-gray-500">
                  No subjects found.
                </p>
              ) : (
                <div className="space-y-3">
                  {subjects.map((subject) => (
                    <div
                      key={subject._id}
                      className="p-4 rounded-xl bg-blue-50 border border-blue-100"
                    >
                      <h4 className="font-medium text-gray-900">
                        {subject.name}
                      </h4>

                      <p className="text-sm text-gray-500 mt-1">
                        {subject.code}
                      </p>

                      <p className="text-sm text-gray-500">
                        {subject.instructor}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Exams */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Upcoming Exams
              </h3>

              {exams.length === 0 ? (
                <p className="text-sm text-gray-500">
                  No exams scheduled.
                </p>
              ) : (
                <div className="space-y-3">
                  {exams.map((exam) => (
                    <div
                      key={exam._id}
                      className="p-4 rounded-xl bg-orange-50 border border-orange-100"
                    >
                      <h4 className="font-medium text-gray-900">
                        {exam.title}
                      </h4>

                      <p className="text-sm text-gray-500 mt-1">
                        {exam.subject}
                      </p>

                      <p className="text-sm text-gray-500">
                        {exam.date} at {exam.time}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
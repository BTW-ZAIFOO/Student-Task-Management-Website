'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

import {
  IoAdd,
  IoBarChart,
  IoBook,
  IoCalendar,
  IoCheckmark,
  IoCheckmarkCircle,
  IoClose,
  IoDocuments,
  IoNotifications,
  IoPerson,
  IoTime,
  IoTrash,
} from 'react-icons/io5';

type TaskStatus = 'pending' | 'in-progress' | 'completed';
type TaskPriority = 'low' | 'medium' | 'high';

interface Task {
  id: string;
  title: string;
  dueDate: string;
  status: TaskStatus;
  priority: TaskPriority;
  description?: string;
}

interface Subject {
  id: string;
  name: string;
  code?: string;
  instructor?: string;
  credits?: number;
}

interface Exam {
  id: string;
  title: string;
  date: string;
  time: string;
  subject: string;
}

export default function Dashboard() {
  const [studentId, setStudentId] = useState<string | null>(null);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [exams, setExams] = useState<Exam[]>([]);

  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showSubjectForm, setShowSubjectForm] = useState(false);
  const [showExamForm, setShowExamForm] = useState(false);

  const [newTask, setNewTask] = useState<{
    title: string;
    dueDate: string;
    priority: TaskPriority;
    description: string;
  }>({
    title: '',
    dueDate: '',
    priority: 'medium',
    description: '',
  });

  const [newSubject, setNewSubject] = useState({
    name: '',
    code: '',
    instructor: '',
    credits: '',
  });

  const [newExam, setNewExam] = useState({
    title: '',
    date: '',
    time: '',
    subject: '',
  });

  useEffect(() => {
    const id = localStorage.getItem('studentId');

    if (!id) {
      window.location.href = '/login';
      return;
    }

    setStudentId(id);
    loadDashboardData();
  }, []);

  const loadDashboardData = () => {
    const savedTasks = localStorage.getItem('dashboardTasks');
    const savedSubjects = localStorage.getItem('dashboardSubjects');
    const savedExams = localStorage.getItem('dashboardExams');

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks) as Task[]);
    } else {
      const defaultTasks: Task[] = [
        {
          id: '1',
          title: 'Math Assignment Chapter 5',
          dueDate: '2026-05-25',
          status: 'pending',
          priority: 'high',
          description: 'Complete exercises 1-50',
        },
        {
          id: '2',
          title: 'Physics Lab Report',
          dueDate: '2026-05-30',
          status: 'in-progress',
          priority: 'medium',
          description: 'Submit lab findings',
        },
      ];

      setTasks(defaultTasks);
    }

    if (savedSubjects) {
      setSubjects(JSON.parse(savedSubjects) as Subject[]);
    } else {
      const defaultSubjects: Subject[] = [
        {
          id: '1',
          name: 'Mathematics',
          code: 'MATH101',
          instructor: 'Dr. Ahmed',
          credits: 3,
        },
        {
          id: '2',
          name: 'Physics',
          code: 'PHY101',
          instructor: 'Prof. Smith',
          credits: 4,
        },
        {
          id: '3',
          name: 'English',
          code: 'ENG101',
          instructor: 'Ms. Johnson',
          credits: 3,
        },
        {
          id: '4',
          name: 'Chemistry',
          code: 'CHEM101',
          instructor: 'Dr. Williams',
          credits: 4,
        },
      ];

      setSubjects(defaultSubjects);
    }

    if (savedExams) {
      setExams(JSON.parse(savedExams) as Exam[]);
    } else {
      const defaultExams: Exam[] = [
        {
          id: '1',
          title: 'Midterm Exam',
          date: '2026-06-10',
          time: '10:00',
          subject: 'MATH101',
        },
      ];

      setExams(defaultExams);
    }
  };

  const addTask = () => {
    if (!newTask.title || !newTask.dueDate) return;

    const updatedTasks: Task[] = [
      ...tasks,
      {
        id: Date.now().toString(),
        title: newTask.title,
        dueDate: newTask.dueDate,
        status: 'pending',
        priority: newTask.priority,
        description: newTask.description,
      },
    ];

    setTasks(updatedTasks);

    localStorage.setItem(
      'dashboardTasks',
      JSON.stringify(updatedTasks)
    );

    setNewTask({
      title: '',
      dueDate: '',
      priority: 'medium',
      description: '',
    });

    setShowTaskForm(false);
  };

  const addSubject = () => {
    if (!newSubject.name || !newSubject.code) return;

    const updatedSubjects: Subject[] = [
      ...subjects,
      {
        id: Date.now().toString(),
        name: newSubject.name,
        code: newSubject.code,
        instructor: newSubject.instructor,
        credits: parseInt(newSubject.credits) || 3,
      },
    ];

    setSubjects(updatedSubjects);

    localStorage.setItem(
      'dashboardSubjects',
      JSON.stringify(updatedSubjects)
    );

    setNewSubject({
      name: '',
      code: '',
      instructor: '',
      credits: '',
    });

    setShowSubjectForm(false);
  };

  const addExam = () => {
    if (!newExam.title || !newExam.date || !newExam.time) return;

    const updatedExams: Exam[] = [
      ...exams,
      {
        id: Date.now().toString(),
        title: newExam.title,
        date: newExam.date,
        time: newExam.time,
        subject: newExam.subject,
      },
    ];

    setExams(updatedExams);

    localStorage.setItem(
      'dashboardExams',
      JSON.stringify(updatedExams)
    );

    setNewExam({
      title: '',
      date: '',
      time: '',
      subject: '',
    });

    setShowExamForm(false);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);

    localStorage.setItem(
      'dashboardTasks',
      JSON.stringify(updatedTasks)
    );
  };

  const deleteSubject = (id: string) => {
    const updatedSubjects = subjects.filter(
      (subject) => subject.id !== id
    );

    setSubjects(updatedSubjects);

    localStorage.setItem(
      'dashboardSubjects',
      JSON.stringify(updatedSubjects)
    );
  };

  const deleteExam = (id: string) => {
    const updatedExams = exams.filter((exam) => exam.id !== id);

    setExams(updatedExams);

    localStorage.setItem(
      'dashboardExams',
      JSON.stringify(updatedExams)
    );
  };

  const toggleTaskStatus = (id: string) => {
    const updatedTasks: Task[] = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status:
            task.status === 'completed'
              ? 'pending'
              : 'completed',
        };
      }

      return task;
    });

    setTasks(updatedTasks);

    localStorage.setItem(
      'dashboardTasks',
      JSON.stringify(updatedTasks)
    );
  };

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(
      (task) => task.status === 'completed'
    ).length,
    pending: tasks.filter(
      (task) => task.status === 'pending'
    ).length,
  };

  const completionRate =
    taskStats.total > 0
      ? (taskStats.completed / taskStats.total) * 100
      : 0;

  return (
    <PageLayout>
      <div className="min-h-screen bg-white dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h1>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Welcome! Here&apos;s your complete academic overview.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-gray-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <IoCheckmarkCircle className="w-5 h-5 text-green-600 dark:text-green-400" />

                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Completed
                  </p>

                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {taskStats.completed}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-gray-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <IoNotifications className="w-5 h-5 text-orange-600 dark:text-orange-400" />

                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Pending
                  </p>

                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {taskStats.pending}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-gray-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <IoBook className="w-5 h-5 text-blue-600 dark:text-blue-400" />

                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Subjects
                  </p>

                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {subjects.length}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-gray-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <IoBarChart className="w-5 h-5 text-purple-600 dark:text-purple-400" />

                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Progress
                  </p>

                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {Math.round(completionRate)}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tasks */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Tasks & Assignments
                  </h2>

                  <button
                    onClick={() =>
                      setShowTaskForm(!showTaskForm)
                    }
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 text-sm"
                  >
                    <IoAdd className="w-4 h-4" />
                    Add Task
                  </button>
                </div>

                {showTaskForm && (
                  <div className="mb-6 p-4 bg-gray-50 dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-700">
                    <div className="space-y-3">
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
                        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                      />

                      <textarea
                        rows={2}
                        placeholder="Description"
                        value={newTask.description}
                        onChange={(e) =>
                          setNewTask({
                            ...newTask,
                            description: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <input
                          type="date"
                          value={newTask.dueDate}
                          onChange={(e) =>
                            setNewTask({
                              ...newTask,
                              dueDate: e.target.value,
                            })
                          }
                          className="px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                        />

                        <select
                          value={newTask.priority}
                          onChange={(e) =>
                            setNewTask({
                              ...newTask,
                              priority:
                                e.target.value as TaskPriority,
                            })
                          }
                          className="px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </select>

                        <button
                          onClick={addTask}
                          className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="p-4 bg-gray-50 dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 flex items-start justify-between"
                    >
                      <div className="flex gap-3 flex-1">
                        <button
                          onClick={() =>
                            toggleTaskStatus(task.id)
                          }
                          className={`mt-1 p-1.5 rounded-full ${
                            task.status === 'completed'
                              ? 'bg-green-100 text-green-600'
                              : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          <IoCheckmark className="w-4 h-4" />
                        </button>

                        <div className="flex-1">
                          <p
                            className={`text-sm font-semibold ${
                              task.status === 'completed'
                                ? 'line-through text-gray-500'
                                : 'text-gray-900 dark:text-white'
                            }`}
                          >
                            {task.title}
                          </p>

                          {task.description && (
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              {task.description}
                            </p>
                          )}

                          <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                            <IoCalendar className="w-3 h-3" />

                            {new Date(
                              task.dueDate
                            ).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 ml-3">
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
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
                          onClick={() =>
                            deleteTask(task.id)
                          }
                          className="p-1 text-red-600 hover:bg-red-50 rounded"
                        >
                          <IoTrash className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 p-6 h-fit">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                My Subjects
              </h2>

              <div className="space-y-3">
                {subjects.map((subject) => (
                  <div
                    key={subject.id}
                    className="p-3 bg-linear-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800"
                  >
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {subject.name}
                    </p>

                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {subject.code}
                    </p>

                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {subject.instructor}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/dashboard/attendance"
              className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 text-center"
            >
              <IoPerson className="w-6 h-6 mx-auto mb-2 text-blue-600" />

              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Attendance
              </p>
            </Link>

            <Link
              href="/dashboard/grades"
              className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 text-center"
            >
              <IoBarChart className="w-6 h-6 mx-auto mb-2 text-purple-600" />

              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Grades
              </p>
            </Link>

            <Link
              href="/dashboard/notes"
              className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 text-center"
            >
              <IoDocuments className="w-6 h-6 mx-auto mb-2 text-green-600" />

              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Notes
              </p>
            </Link>

            <Link
              href="/profile"
              className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 text-center"
            >
              <IoPerson className="w-6 h-6 mx-auto mb-2 text-indigo-600" />

              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Profile
              </p>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
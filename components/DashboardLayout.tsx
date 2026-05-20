'use client';

import React from 'react';
import Link from 'next/link';
import NavbarProCompact from './NavbarProCompact';
import {
  IoHome,
  IoCheckmark,
  IoBook,
  IoCalendar,
  IoBarChart,
  IoDocuments,
  IoSettings,
  IoLogOut,
} from 'react-icons/io5';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeSection?: string;
}

export default function DashboardLayout({ children, activeSection = 'dashboard' }: DashboardLayoutProps) {
  const handleLogout = () => {
    localStorage.removeItem('student');
    localStorage.removeItem('studentId');
    window.location.href = '/';
  };

  const menuItems = [
    { label: 'Dashboard', href: '/dashboard', icon: IoHome, id: 'dashboard' },
    { label: 'Tasks', href: '/dashboard/tasks', icon: IoCheckmark, id: 'tasks' },
    { label: 'Subjects', href: '/dashboard/subjects', icon: IoBook, id: 'subjects' },
    { label: 'Exams', href: '/dashboard/exams', icon: IoCalendar, id: 'exams' },
    { label: 'Attendance', href: '/dashboard/attendance', icon: IoBarChart, id: 'attendance' },
    { label: 'Grades', href: '/dashboard/grades', icon: IoDocuments, id: 'grades' },
    { label: 'Notes', href: '/dashboard/notes', icon: IoBook, id: 'notes' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarProCompact />

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen fixed left-0 top-16 overflow-y-auto">
          <nav className="p-6 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}

            <hr className="my-4" />

            <Link
              href="/profile"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-700 hover:bg-gray-50`}
            >
              <IoSettings className="w-5 h-5" />
              <span className="text-sm">Profile & Settings</span>
            </Link>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
            >
              <IoLogOut className="w-5 h-5" />
              <span className="text-sm">Logout</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

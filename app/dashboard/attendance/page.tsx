'use client';
import { useState } from 'react';
import NavbarProCompact from '@/components/NavbarProCompact';
import { IoCheckmark, IoClose } from 'react-icons/io5';

interface AttendanceRecord {
  id: string;
  date: string;
  subject: string;
  present: boolean;
}

export default function AttendancePage() {
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([
    { id: '1', date: '2026-05-19', subject: 'Mathematics', present: true },
    { id: '2', date: '2026-05-19', subject: 'Physics', present: true },
    { id: '3', date: '2026-05-18', subject: 'Chemistry', present: false },
    { id: '4', date: '2026-05-18', subject: 'English', present: true },
  ]);

  const toggleAttendance = (id: string) => {
    setAttendance(attendance.map((a) => (a.id === id ? { ...a, present: !a.present } : a)));
  };

  const getTotalAttendance = () => {
    const total = attendance.length;
    const present = attendance.filter((a) => a.present).length;
    return Math.round((present / total) * 100);
  };

  const getSubjectAttendance = (subject: string) => {
    const records = attendance.filter((a) => a.subject === subject);
    const present = records.filter((a) => a.present).length;
    return records.length > 0 ? Math.round((present / records.length) * 100) : 0;
  };

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'English'];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarProCompact />

      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Attendance Tracker</h1>
          <p className="text-xs text-gray-600 mb-8">Track your attendance across all subjects</p>

          {/* Overall Attendance */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-gray-900">Overall Attendance</h2>
              <span className="text-2xl font-bold text-blue-600">{getTotalAttendance()}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${getTotalAttendance()}%` }} />
            </div>
          </div>

          {/* Subject Wise Attendance */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {subjects.map((subject) => (
              <div key={subject} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <p className="text-xs font-semibold text-gray-900 mb-2">{subject}</p>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mr-3">
                    <div
                      className="bg-green-600 h-1.5 rounded-full"
                      style={{ width: `${getSubjectAttendance(subject)}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-gray-900">{getSubjectAttendance(subject)}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Attendance Records */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-sm font-bold text-gray-900 mb-4">Recent Records</h2>
            <div className="space-y-2">
              {attendance.map((record) => (
                <div
                  key={record.id}
                  className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between hover:bg-gray-100"
                >
                  <div>
                    <p className="text-xs font-medium text-gray-900">{record.subject}</p>
                    <p className="text-xs text-gray-500">{record.date}</p>
                  </div>
                  <button
                    onClick={() => toggleAttendance(record.id)}
                    className={`p-2 rounded-lg flex-shrink-0 ${
                      record.present
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {record.present ? <IoCheckmark className="w-4 h-4" /> : <IoClose className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

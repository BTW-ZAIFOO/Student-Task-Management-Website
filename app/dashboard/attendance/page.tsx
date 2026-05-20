'use client';
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { IoCheckmark, IoClose, IoAdd, IoTrash, IoTrendingUp } from 'react-icons/io5';

interface AttendanceRecord {
  id: string;
  date: string;
  subject: string;
  present: boolean;
}

export default function AttendancePage() {
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAttendance, setNewAttendance] = useState({ date: '', subject: '', present: true });

  useEffect(() => {
    const saved = localStorage.getItem('attendanceRecords');
    if (saved) {
      setAttendance(JSON.parse(saved));
    } else {
      const defaultRecords: AttendanceRecord[] = [
        { id: '1', date: '2026-05-19', subject: 'Mathematics', present: true },
        { id: '2', date: '2026-05-19', subject: 'Physics', present: true },
        { id: '3', date: '2026-05-18', subject: 'Chemistry', present: false },
        { id: '4', date: '2026-05-18', subject: 'English', present: true },
        { id: '5', date: '2026-05-17', subject: 'Mathematics', present: true },
        { id: '6', date: '2026-05-17', subject: 'Physics', present: false },
      ];
      setAttendance(defaultRecords);
      localStorage.setItem('attendanceRecords', JSON.stringify(defaultRecords));
    }
  }, []);

  const saveAttendance = (data: AttendanceRecord[]) => {
    setAttendance(data);
    localStorage.setItem('attendanceRecords', JSON.stringify(data));
  };

  const toggleAttendance = (id: string) => {
    const updated = attendance.map((a) => (a.id === id ? { ...a, present: !a.present } : a));
    saveAttendance(updated);
  };

  const deleteRecord = (id: string) => {
    const updated = attendance.filter((a) => a.id !== id);
    saveAttendance(updated);
  };

  const addAttendance = () => {
    if (newAttendance.date && newAttendance.subject) {
      const updated = [
        ...attendance,
        {
          id: Date.now().toString(),
          ...newAttendance,
        },
      ];
      saveAttendance(updated);
      setNewAttendance({ date: '', subject: '', present: true });
      setShowAddForm(false);
    }
  };

  const getTotalAttendance = () => {
    const total = attendance.length;
    const present = attendance.filter((a) => a.present).length;
    return total > 0 ? Math.round((present / total) * 100) : 0;
  };

  const getSubjectAttendance = (subject: string) => {
    const records = attendance.filter((a) => a.subject === subject);
    const present = records.filter((a) => a.present).length;
    return records.length > 0 ? Math.round((present / records.length) * 100) : 0;
  };

  const subjects = Array.from(new Set(attendance.map((a) => a.subject)));

  return (
    <PageLayout>
      <div className="min-h-screen bg-white dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Attendance Tracker</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Monitor your attendance across all subjects</p>
          </div>

          {/* Overall Attendance Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 p-6 mb-6 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <IoTrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Overall Attendance
              </h2>
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{getTotalAttendance()}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all"
                style={{ width: `${getTotalAttendance()}%` }}
              />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
              {attendance.filter((a) => a.present).length} present out of {attendance.length} classes
            </p>
          </div>

          {/* Subject Wise Attendance */}
          {subjects.length > 0 && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 p-6 mb-6 transition-colors">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Subject-wise Attendance</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {subjects.map((subject) => (
                  <div key={subject} className="p-4 bg-gray-50 dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">{subject}</p>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-full bg-gray-300 dark:bg-slate-700 rounded-full h-2 mr-3">
                        <div
                          className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all"
                          style={{ width: `${getSubjectAttendance(subject)}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-gray-900 dark:text-white flex-shrink-0">
                        {getSubjectAttendance(subject)}%
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {attendance.filter((a) => a.subject === subject && a.present).length}/
                      {attendance.filter((a) => a.subject === subject).length} classes
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add Attendance Button */}
          <div className="mb-6 flex justify-end">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2 bg-green-600 dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-800 text-white rounded-lg flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <IoAdd className="w-4 h-4" />
              Mark Attendance
            </button>
          </div>

          {showAddForm && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 p-6 mb-6 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Add Attendance Record</h3>
              <div className="space-y-4">
                <input
                  type="date"
                  value={newAttendance.date}
                  onChange={(e) => setNewAttendance({ ...newAttendance, date: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Subject name"
                  value={newAttendance.subject}
                  onChange={(e) => setNewAttendance({ ...newAttendance, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={newAttendance.present}
                      onChange={() => setNewAttendance({ ...newAttendance, present: true })}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-gray-900 dark:text-white">Present</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={!newAttendance.present}
                      onChange={() => setNewAttendance({ ...newAttendance, present: false })}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-gray-900 dark:text-white">Absent</span>
                  </label>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={addAttendance}
                    className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Save Record
                  </button>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 px-4 py-2 bg-gray-300 dark:bg-slate-700 hover:bg-gray-400 dark:hover:bg-slate-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Attendance Records */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 p-6 transition-colors">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recent Records</h2>
            <div className="space-y-2">
              {attendance.length === 0 ? (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-8">No attendance records yet. Add one to get started!</p>
              ) : (
                [...attendance].reverse().map((record) => (
                  <div
                    key={record.id}
                    className="p-4 bg-gray-50 dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{record.subject}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {new Date(record.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleAttendance(record.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          record.present
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                            : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                        }`}
                      >
                        {record.present ? <IoCheckmark className="w-4 h-4" /> : <IoClose className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => deleteRecord(record.id)}
                        className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <IoTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
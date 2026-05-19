'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NavbarProCompact from '@/components/NavbarProCompact';
import {
  IoDownload,
  IoCreate,
  IoPerson,
  IoMail,
  IoLocation,
} from 'react-icons/io5';

interface StudentProfile {
  id: string;
  name: string;
  email: string;
  academicLevel: string;
  enrollDate: string;
  avatar?: string;
}

export default function ProfilePage() {
  const router = useRouter();

  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem('studentId');
    const email = localStorage.getItem('studentEmail');
    const name = localStorage.getItem('studentName');
    const level = localStorage.getItem('academicLevel');

    if (!id) {
      router.push('/login');
      return;
    }

    setStudent({
      id,
      name: name || 'Student Name',
      email: email || 'student@example.com',
      academicLevel: level || 'University',
      enrollDate: new Date().toISOString().split('T')[0],
    });
  }, [router]);

  const downloadIDCard = () => {
    const card = document.getElementById('idCard');

    if (!card) return;

    alert(
      'For real image download functionality, use html2canvas package.'
    );
  };

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-sm text-gray-600">Loading Profile...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <NavbarProCompact />

      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Student Profile
              </h1>

              <p className="text-xs text-gray-600 mt-1">
                Manage your StudentSphere account
              </p>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="w-fit p-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 text-xs font-medium"
            >
              <IoCreate className="w-4 h-4" />
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Profile Information */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-sm font-bold text-gray-900 mb-5">
                Profile Information
              </h2>

              <div className="space-y-5">
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
                    {student.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Full Name</p>

                    <p className="text-sm font-semibold text-gray-900">
                      {student.name}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="border-t border-gray-100 pt-5 space-y-4">
                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <IoMail className="w-4 h-4 text-blue-600" />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Email Address
                      </p>

                      <p className="text-sm font-medium text-gray-900 break-all">
                        {student.email}
                      </p>
                    </div>
                  </div>

                  {/* Academic Level */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-50">
                      <IoPerson className="w-4 h-4 text-indigo-600" />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Academic Level
                      </p>

                      <p className="text-sm font-medium text-gray-900">
                        {student.academicLevel}
                      </p>
                    </div>
                  </div>

                  {/* Enrollment Date */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-50">
                      <IoLocation className="w-4 h-4 text-green-600" />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Enrollment Date
                      </p>

                      <p className="text-sm font-medium text-gray-900">
                        {student.enrollDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Student ID Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-sm font-bold text-gray-900">
                  Student ID Card
                </h2>

                <button
                  onClick={downloadIDCard}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 flex items-center gap-1 text-xs font-medium"
                >
                  <IoDownload className="w-3.5 h-3.5" />
                  Download
                </button>
              </div>

              {/* ID Card */}
              <div
                id="idCard"
                className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"
              >
                {/* Glow Effects */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />

                <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl" />

                {/* Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 text-white text-7xl">
                    ✦
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                  {/* Top */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-wide">
                      StudentSphere
                    </h3>

                    <p className="text-xs opacity-80 mt-1">
                      Official Student ID Card
                    </p>
                  </div>

                  {/* Middle */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 flex items-center justify-center text-2xl font-bold">
                      {student.name.charAt(0).toUpperCase()}
                    </div>

                    <div className="overflow-hidden">
                      <p className="text-sm font-semibold truncate">
                        {student.name}
                      </p>

                      <p className="text-xs opacity-80">
                        {student.academicLevel}
                      </p>
                    </div>
                  </div>

                  {/* Bottom */}
                  <div>
                    <div className="flex items-center justify-between text-[10px] sm:text-xs mb-2">
                      <span>
                        ID:{' '}
                        {student.id.slice(0, 8).toUpperCase()}
                      </span>

                      <span>Valid Since: 2026</span>
                    </div>

                    <div className="h-px bg-white/20" />

                    <p className="text-[10px] sm:text-xs opacity-70 mt-2">
                      www.studentsphere.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Statistics */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Subjects */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <p className="text-xs text-gray-500 mb-1">
                Total Subjects
              </p>

              <p className="text-3xl font-bold text-gray-900">
                4
              </p>
            </div>

            {/* GPA */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <p className="text-xs text-gray-500 mb-1">
                Current GPA
              </p>

              <p className="text-3xl font-bold text-gray-900">
                3.8
              </p>
            </div>

            {/* Attendance */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <p className="text-xs text-gray-500 mb-1">
                Attendance
              </p>

              <p className="text-3xl font-bold text-gray-900">
                95%
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import StudentIDCard from '@/components/StudentIDCard';
import {
  IoCreate,
  IoPerson,
  IoMail,
  IoSchool,
  IoCalendar,
  IoStar,
  IoShieldCheckmark,
  IoCheckmarkCircle,
} from 'react-icons/io5';

interface StudentProfile {
  id: string;
  name: string;
  email: string;
  academicLevel: string;
  enrollDate: string;
  gpa?: string;
  major?: string;
  credits?: number;
}

export default function ProfilePage() {
  const router = useRouter();
  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<StudentProfile | null>(null);

  useEffect(() => {
    const id = localStorage.getItem('studentId');
    const email = localStorage.getItem('studentEmail');
    const name = localStorage.getItem('studentName');
    const level = localStorage.getItem('academicLevel');

    if (!id) {
      router.push('/login');
      return;
    }

    const studentData: StudentProfile = {
      id,
      name: name || 'Student Name',
      email: email || 'student@example.com',
      academicLevel: level || 'University',
      enrollDate: new Date().toISOString().split('T')[0],
      gpa: '3.8',
      major: 'Computer Science',
      credits: 45,
    };

    setStudent(studentData);
    setFormData(studentData);
  }, [router]);

  const handleSaveProfile = () => {
    if (formData) {
      setStudent(formData);
      localStorage.setItem('studentName', formData.name);
      localStorage.setItem('studentEmail', formData.email);
      localStorage.setItem('academicLevel', formData.academicLevel);
      setIsEditing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  if (!student) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">Loading Profile...</div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-white dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Student Profile
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Manage your StudentSphere account and view your academic information
              </p>
            </div>

            <button
              onClick={() => {
                if (isEditing) {
                  handleSaveProfile();
                } else {
                  setIsEditing(true);
                }
              }}
              className="w-fit px-4 py-2 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <IoCreate className="w-4 h-4" />
              {isEditing ? 'Save Profile' : 'Edit Profile'}
            </button>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Profile Information Card */}
            <div className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 p-6 transition-colors">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                Personal Information
              </h2>

              <div className="space-y-6">
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {student.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      Student Account
                    </p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      {student.name}
                    </p>
                    <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1 mt-1">
                      <IoCheckmarkCircle className="w-3 h-3" />
                      Verified
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-slate-700 pt-6 space-y-4">
                  {/* Email */}
                  <div>
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 flex items-center gap-2 mb-2">
                      <IoMail className="w-4 h-4" />
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={formData?.email || ''}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="text-sm text-gray-900 dark:text-gray-300 font-medium break-all">
                        {student.email}
                      </p>
                    )}
                  </div>

                  {/* Academic Level */}
                  <div>
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 flex items-center gap-2 mb-2">
                      <IoSchool className="w-4 h-4" />
                      Academic Level
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="academicLevel"
                        value={formData?.academicLevel || ''}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="text-sm text-gray-900 dark:text-gray-300 font-medium">
                        {student.academicLevel}
                      </p>
                    )}
                  </div>

                  {/* Enrollment Date */}
                  <div>
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 flex items-center gap-2 mb-2">
                      <IoCalendar className="w-4 h-4" />
                      Enrollment Date
                    </label>
                    <p className="text-sm text-gray-900 dark:text-gray-300 font-medium">
                      {new Date(student.enrollDate).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Student ID */}
                  <div>
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 flex items-center gap-2 mb-2">
                      <IoShieldCheckmark className="w-4 h-4" />
                      Student ID
                    </label>
                    <p className="text-sm text-gray-900 dark:text-gray-300 font-mono font-bold">
                      {student.id}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Stats */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {/* Academic Overview Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 p-6 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <IoStar className="w-5 h-5 text-yellow-500" />
                  Academic Standing
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-end justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">GPA</span>
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {student.gpa}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                        style={{ width: `${(parseFloat(student.gpa || '0') / 4) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Credits Completed
                      </span>
                      <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        {student.credits}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                        style={{ width: `${(student.credits! / 120) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      {student.credits} / 120 credits toward degree
                    </p>
                  </div>
                </div>
              </div>

              {/* Academic Details Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 p-6 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <IoSchool className="w-5 h-5 text-indigo-500" />
                  Academic Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                      Major
                    </p>
                    <p className="text-sm text-gray-900 dark:text-gray-300 font-medium">
                      {student.major}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                      Academic Status
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <IoCheckmarkCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm text-green-700 dark:text-green-300 font-medium">
                        Good Standing
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      Current Semester
                    </p>
                    <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                      Spring 2026
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Student ID Card Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 p-8 transition-colors">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Official Student ID Card
            </h2>

            <div className="p-8 bg-gray-50 dark:bg-slate-900 rounded-xl">
              <StudentIDCard
                studentName={student.name}
                studentId={student.id}
                academicLevel={student.academicLevel}
                enrollmentDate={new Date(student.enrollDate).toLocaleDateString()}
                avatarInitials={student.name.charAt(0).toUpperCase()}
                email={student.email}
                major={student.major}
                gpa={student.gpa}
              />
            </div>

            <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 text-center">
              Your official StudentSphere ID card. Click to flip for security features and QR code.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
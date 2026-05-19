'use client';
import { useState } from 'react';
import NavbarProCompact from '@/components/NavbarProCompact';
import { IoBarChart } from 'react-icons/io5';

interface Grade {
  id: string;
  subject: string;
  assignment: string;
  marks: number;
  maxMarks: number;
  percentage: number;
}

export default function GradesPage() {
  const [grades] = useState<Grade[]>([
    { id: '1', subject: 'Mathematics', assignment: 'Assignment 1', marks: 45, maxMarks: 50, percentage: 90 },
    { id: '2', subject: 'Mathematics', assignment: 'Midterm', marks: 38, maxMarks: 40, percentage: 95 },
    { id: '3', subject: 'Physics', assignment: 'Lab Report', marks: 28, maxMarks: 30, percentage: 93 },
    { id: '4', subject: 'Chemistry', assignment: 'Quiz', marks: 16, maxMarks: 20, percentage: 80 },
    { id: '5', subject: 'English', assignment: 'Essay', marks: 34, maxMarks: 40, percentage: 85 },
  ]);

  const getAverageGrade = () => {
    const avg = grades.reduce((sum, g) => sum + g.percentage, 0) / grades.length;
    return Math.round(avg);
  };

  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-50';
    if (percentage >= 80) return 'text-blue-600 bg-blue-50';
    if (percentage >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getGradeLabel = (percentage: number) => {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    return 'D';
  };

  const subjectGrades = Array.from(new Set(grades.map((g) => g.subject))).map((subject) => {
    const subjectGradesForSubject = grades.filter((g) => g.subject === subject);
    const avg = subjectGradesForSubject.reduce((sum, g) => sum + g.percentage, 0) / subjectGradesForSubject.length;
    return { subject, average: Math.round(avg) };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarProCompact />

      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Grades</h1>
          <p className="text-xs text-gray-600 mb-8">Track your academic performance</p>

          {/* Overall GPA */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex items-center gap-4">
              <IoBarChart className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-xs text-gray-600">Overall Average</p>
                <p className="text-3xl font-bold text-gray-900">{getAverageGrade()}%</p>
              </div>
            </div>
          </div>

          {/* Subject Wise Grades */}
          <div className="mb-6">
            <h2 className="text-sm font-bold text-gray-900 mb-4">Subject Average</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {subjectGrades.map((sg) => (
                <div key={sg.subject} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-gray-900">{sg.subject}</p>
                    <span className={`px-3 py-1 rounded-full font-bold text-xs ${getGradeColor(sg.average)}`}>
                      {getGradeLabel(sg.average)}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-gray-900 mt-2">{sg.average}%</p>
                </div>
              ))}
            </div>
          </div>

          {/* All Grades */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-sm font-bold text-gray-900 mb-4">All Assessments</h2>
            <div className="space-y-2">
              {grades.map((grade) => (
                <div key={grade.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-xs font-semibold text-gray-900">{grade.subject}</p>
                      <p className="text-xs text-gray-600">{grade.assignment}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full font-bold text-xs ${getGradeColor(grade.percentage)}`}>
                      {getGradeLabel(grade.percentage)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full"
                      style={{ width: `${grade.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {grade.marks}/{grade.maxMarks} - {grade.percentage}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

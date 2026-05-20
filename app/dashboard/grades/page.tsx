'use client';
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { IoBarChart, IoStar, IoAdd, IoTrash } from 'react-icons/io5';

interface Grade {
  id: string;
  subject: string;
  assignment: string;
  marks: number;
  maxMarks: number;
}

export default function GradesPage() {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newGrade, setNewGrade] = useState({ subject: '', assignment: '', marks: '', maxMarks: '100' });

  useEffect(() => {
    const saved = localStorage.getItem('gradesRecords');
    if (saved) {
      setGrades(JSON.parse(saved));
    } else {
      const defaultGrades: Grade[] = [
        { id: '1', subject: 'Mathematics', assignment: 'Assignment 1', marks: 45, maxMarks: 50 },
        { id: '2', subject: 'Mathematics', assignment: 'Midterm', marks: 38, maxMarks: 40 },
        { id: '3', subject: 'Physics', assignment: 'Lab Report', marks: 28, maxMarks: 30 },
        { id: '4', subject: 'Chemistry', assignment: 'Quiz', marks: 16, maxMarks: 20 },
        { id: '5', subject: 'English', assignment: 'Essay', marks: 34, maxMarks: 40 },
      ];
      setGrades(defaultGrades);
      localStorage.setItem('gradesRecords', JSON.stringify(defaultGrades));
    }
  }, []);

  const saveGrades = (data: Grade[]) => {
    setGrades(data);
    localStorage.setItem('gradesRecords', JSON.stringify(data));
  };

  const addGrade = () => {
    if (newGrade.subject && newGrade.assignment && newGrade.marks) {
      const updated = [
        ...grades,
        {
          id: Date.now().toString(),
          subject: newGrade.subject,
          assignment: newGrade.assignment,
          marks: parseInt(newGrade.marks),
          maxMarks: parseInt(newGrade.maxMarks),
        },
      ];
      saveGrades(updated);
      setNewGrade({ subject: '', assignment: '', marks: '', maxMarks: '100' });
      setShowAddForm(false);
    }
  };

  const deleteGrade = (id: string) => {
    const updated = grades.filter((g) => g.id !== id);
    saveGrades(updated);
  };

  const getPercentage = (marks: number, maxMarks: number) => {
    return Math.round((marks / maxMarks) * 100);
  };

  const getAverageGrade = () => {
    if (grades.length === 0) return 0;
    const avg = grades.reduce((sum, g) => sum + getPercentage(g.marks, g.maxMarks), 0) / grades.length;
    return Math.round(avg);
  };

  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-300', bar: 'from-green-500 to-emerald-600' };
    if (percentage >= 80) return { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', bar: 'from-blue-500 to-indigo-600' };
    if (percentage >= 70) return { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-300', bar: 'from-yellow-500 to-orange-600' };
    return { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-300', bar: 'from-red-500 to-pink-600' };
  };

  const getGradeLabel = (percentage: number) => {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    return 'D';
  };

  const gpa = (getAverageGrade() / 100) * 4;

  const subjectGrades = Array.from(new Set(grades.map((g) => g.subject))).map((subject) => {
    const subjectGradesForSubject = grades.filter((g) => g.subject === subject);
    const totalMarks = subjectGradesForSubject.reduce((sum, g) => sum + g.marks, 0);
    const totalMaxMarks = subjectGradesForSubject.reduce((sum, g) => sum + g.maxMarks, 0);
    const avg = getPercentage(totalMarks, totalMaxMarks);
    return { subject, average: avg };
  });

  return (
    <PageLayout>
      <div className="min-h-screen bg-white dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Grades</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Track your academic performance and progress</p>
          </div>

          {/* Overall Performance Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 p-6 mb-6 transition-colors">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <IoBarChart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Overall Average</p>
                <p className="text-4xl font-bold text-gray-900 dark:text-white">{getAverageGrade()}%</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">GPA: {gpa.toFixed(2)} / 4.0</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Grade</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{getGradeLabel(getAverageGrade())}</p>
              </div>
            </div>
          </div>

          {/* Subject Wise Grades */}
          {subjectGrades.length > 0 && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 p-6 mb-6 transition-colors">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Subject Average</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {subjectGrades.map((sg) => {
                  const colors = getGradeColor(sg.average);
                  return (
                    <div
                      key={sg.subject}
                      className={`p-4 rounded-lg border transition-colors ${colors.bg} border-transparent`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <p className={`text-sm font-semibold ${colors.text}`}>{sg.subject}</p>
                        <span className={`px-3 py-1 rounded-full font-bold text-xs ${colors.text} bg-opacity-20`}>
                          {getGradeLabel(sg.average)}
                        </span>
                      </div>
                      <div className="flex items-end gap-2">
                        <div className="flex-1">
                          <div className="w-full bg-gray-300 dark:bg-slate-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full bg-linear-to-r ${colors.bar} transition-all`}
                              style={{ width: `${sg.average}%` }}
                            />
                          </div>
                        </div>
                        <p className={`text-lg font-bold ${colors.text}`}>{sg.average}%</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Add Grade Button */}
          <div className="mb-6 flex justify-end">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2 bg-indigo-600 dark:bg-indigo-700 hover:bg-indigo-700 dark:hover:bg-indigo-800 text-white rounded-lg flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <IoAdd className="w-4 h-4" />
              Add Grade
            </button>
          </div>

          {showAddForm && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 p-6 mb-6 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Add Assessment Record</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Subject name"
                  value={newGrade.subject}
                  onChange={(e) => setNewGrade({ ...newGrade, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Assignment/Test name"
                  value={newGrade.assignment}
                  onChange={(e) => setNewGrade({ ...newGrade, assignment: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Marks obtained"
                    value={newGrade.marks}
                    onChange={(e) => setNewGrade({ ...newGrade, marks: e.target.value })}
                    className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                  <input
                    type="number"
                    placeholder="Total marks"
                    value={newGrade.maxMarks}
                    onChange={(e) => setNewGrade({ ...newGrade, maxMarks: e.target.value })}
                    className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={addGrade}
                    className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Save Grade
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

          {/* All Grades */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 p-6 transition-colors">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">All Assessments</h2>
            <div className="space-y-2">
              {grades.length === 0 ? (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-8">No grades recorded yet. Add one to get started!</p>
              ) : (
                [...grades].reverse().map((grade) => {
                  const percentage = getPercentage(grade.marks, grade.maxMarks);
                  const colors = getGradeColor(percentage);
                  return (
                    <div key={grade.id} className={`p-4 rounded-lg border transition-colors ${colors.bg} border-transparent`}>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className={`text-sm font-semibold ${colors.text}`}>{grade.subject}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{grade.assignment}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full font-bold text-xs ${colors.text}`}>
                            {getGradeLabel(percentage)}
                          </span>
                          <button
                            onClick={() => deleteGrade(grade.id)}
                            className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                          >
                            <IoTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <div className="w-full bg-gray-300 dark:bg-slate-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full bg-linear-to-r ${colors.bar} transition-all`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                        <p className={`text-sm font-bold ${colors.text} shrink-0`}>
                          {grade.marks}/{grade.maxMarks} ({percentage}%)
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

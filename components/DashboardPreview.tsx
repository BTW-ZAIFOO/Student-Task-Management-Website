"use client";

import { useIntersectionReveal } from './useIntersectionReveal';
import SectionHeader from "./SectionHeader";
import {
  IoCheckmarkCircle,
  IoStatsChart,
  IoLibrary,
  IoCheckmark,
  IoCalendarOutline,
  IoDocument,
} from "react-icons/io5";

export default function DashboardPreview() {
  const { ref, isRevealed } = useIntersectionReveal<HTMLDivElement>();

  return (
    <section
      id="dashboard"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Your Complete Academic Control Center"
          subtitle="Powerful dashboard that gives you full control of your academic journey"
        />

        <div
          ref={ref}
          className={`relative ${
            isRevealed ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-200 hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)] transition-all duration-300">
            {/* Header */}
            <div className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between animate-slide-down">
              <h3 className="text-gray-900 font-semibold">
                StudentSphere Dashboard
              </h3>

              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
            </div>

            {/* Content */}
            <div className="bg-gray-50 p-6 grid md:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="md:col-span-1 space-y-3 animate-slide-in-left">
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 flex items-center gap-2">
                  <IoStatsChart className="w-4 h-4 text-blue-600" />
                  <p className="text-xs font-semibold text-blue-600">
                    Dashboard
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3 border border-gray-200 hover:bg-gray-100 transition-all flex items-center gap-2">
                  <IoLibrary className="w-4 h-4 text-gray-600" />
                  <p className="text-xs font-semibold text-gray-700">
                    Subjects
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3 border border-gray-200 hover:bg-gray-100 transition-all flex items-center gap-2">
                  <IoCheckmark className="w-4 h-4 text-gray-600" />
                  <p className="text-xs font-semibold text-gray-700">Tasks</p>
                </div>

                <div className="bg-white rounded-lg p-3 border border-gray-200 hover:bg-gray-100 transition-all flex items-center gap-2">
                  <IoCalendarOutline className="w-4 h-4 text-gray-600" />
                  <p className="text-xs font-semibold text-gray-700">Exams</p>
                </div>

                <div className="bg-white rounded-lg p-3 border border-gray-200 hover:bg-gray-100 transition-all flex items-center gap-2">
                  <IoDocument className="w-4 h-4 text-gray-600" />
                  <p className="text-xs font-semibold text-gray-700">Notes</p>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-3 space-y-6 animate-slide-in-right">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                    <p className="text-xs text-blue-600 mb-2">
                      Active Tasks
                    </p>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                    <p className="text-xs text-purple-600 mb-2">
                      Upcoming Exams
                    </p>
                    <p className="text-2xl font-bold text-gray-900">5</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                    <p className="text-xs text-green-600 mb-2">Completion</p>
                    <p className="text-2xl font-bold text-gray-900">87%</p>
                  </div>
                </div>

                {/* Tasks */}
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-3">
                    This Week's Tasks
                  </p>

                  <div className="space-y-3">
                    <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        className="mt-1"
                      />

                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-900">
                          Complete Math Assignment
                        </p>
                        <p className="text-xs text-gray-500">Due: May 18</p>
                      </div>

                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        Math
                      </span>
                    </div>

                    <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm flex items-start gap-3">
                      <input type="checkbox" readOnly className="mt-1" />

                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-900">
                          Physics Lab Report
                        </p>
                        <p className="text-xs text-gray-500">Due: May 20</p>
                      </div>

                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                        Physics
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-3">
                    Subject Progress
                  </p>

                  <div className="space-y-4">
                    <div className="hover:bg-blue-50 p-2 rounded-lg transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-700">
                          Mathematics
                        </span>
                        <span className="text-xs text-gray-500">85%</span>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full"
                          style={{ width: "85%" }}
                        />
                      </div>
                    </div>

                    <div className="hover:bg-purple-50 p-2 rounded-lg transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-700">Physics</span>
                        <span className="text-xs text-gray-500">72%</span>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full"
                          style={{ width: "72%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="hidden md:block absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg border border-gray-200 animate-float">
            <div className="flex items-center gap-2">
              <IoCheckmarkCircle className="w-4 h-4 text-green-600" />
              <p className="text-xs font-semibold text-gray-900">
                Exam: June 15
              </p>
            </div>
          </div>

          <div
            className="hidden md:block absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg border border-gray-200 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-2">
              <IoCheckmarkCircle className="w-4 h-4 text-green-600" />
              <p className="text-xs font-semibold text-gray-900">
                3 Assignments Done
              </p>
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none" />

          <div
            className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-400 rounded-full blur-3xl opacity-20"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </div>
    </section>
  );
}
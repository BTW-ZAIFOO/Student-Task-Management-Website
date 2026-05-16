"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import {
  IoCheckmarkDone,
  IoCheckmarkCircle,
  IoStatsChart,
  IoLibrary,
  IoCheckmark,
  IoCalendarOutline,
  IoDocument,
} from "react-icons/io5";

export default function DashboardPreview() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="dashboard"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Your Complete Academic Control Center"
          subtitle="Powerful dashboard that gives you full control of your academic journey"
        />

        {/* Dashboard Preview */}
        <div
          ref={ref}
          className={`relative ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-2xl overflow-hidden border border-gray-800 hover:shadow-2xl transition-smooth">
            {/* Header */}
            <div className="bg-gray-800 px-6 py-4 border-b border-gray-700 flex items-center justify-between animate-slide-down">
              <div>
                <h3 className="text-white font-semibold">
                  StudentSphere Dashboard
                </h3>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-lg" />
                <div
                  className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse-lg"
                  style={{ animationDelay: "0.2s" }}
                />
                <div
                  className="w-3 h-3 bg-green-500 rounded-full animate-pulse-lg"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 grid md:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="md:col-span-1 space-y-3 animate-slide-in-left">
                <div className="bg-gray-800 rounded-lg p-3 border border-blue-600 border-opacity-50 hover:border-blue-400 transition-smooth flex items-center gap-2">
                  <IoStatsChart className="w-4 h-4 text-blue-400" />
                  <p className="text-xs font-semibold text-blue-400">
                    Dashboard
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-smooth hover:scale-105 flex items-center gap-2">
                  <IoLibrary className="w-4 h-4 text-gray-300" />
                  <p className="text-xs font-semibold text-gray-300">
                    Subjects
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-smooth hover:scale-105 flex items-center gap-2">
                  <IoCheckmark className="w-4 h-4 text-gray-300" />
                  <p className="text-xs font-semibold text-gray-300">Tasks</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-smooth hover:scale-105 flex items-center gap-2">
                  <IoCalendarOutline className="w-4 h-4 text-gray-300" />
                  <p className="text-xs font-semibold text-gray-300">Exams</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-smooth hover:scale-105 flex items-center gap-2">
                  <IoDocument className="w-4 h-4 text-gray-300" />
                  <p className="text-xs font-semibold text-gray-300">Notes</p>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-3 space-y-6 animate-slide-in-right">
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-700 hover:shadow-lg transition-smooth hover:scale-105 animate-scale-in">
                    <p className="text-xs text-blue-300 mb-2">Active Tasks</p>
                    <p className="text-2xl font-bold text-white">12</p>
                  </div>
                  <div
                    className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-700 hover:shadow-lg transition-smooth hover:scale-105 animate-scale-in"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <p className="text-xs text-purple-300 mb-2">
                      Upcoming Exams
                    </p>
                    <p className="text-2xl font-bold text-white">5</p>
                  </div>
                  <div
                    className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-700 hover:shadow-lg transition-smooth hover:scale-105 animate-scale-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <p className="text-xs text-green-300 mb-2">Completion</p>
                    <p className="text-2xl font-bold text-white">87%</p>
                  </div>
                </div>

                {/* Tasks */}
                <div>
                  <p className="text-sm font-semibold text-gray-300 mb-3">
                    This Week's Tasks
                  </p>
                  <div className="space-y-2">
                    <div className="bg-gray-800 rounded-lg p-3 border border-gray-700 flex items-start gap-3 hover:border-blue-500 transition-smooth hover:bg-gray-700">
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-200">
                          Complete Math Assignment
                        </p>
                        <p className="text-xs text-gray-500">Due: May 18</p>
                      </div>
                      <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded">
                        Math
                      </span>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3 border border-gray-700 flex items-start gap-3 hover:border-purple-500 transition-smooth hover:bg-gray-700">
                      <input type="checkbox" readOnly className="mt-1" />
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-200">
                          Physics Lab Report
                        </p>
                        <p className="text-xs text-gray-500">Due: May 20</p>
                      </div>
                      <span className="text-xs bg-purple-900 text-purple-300 px-2 py-1 rounded">
                        Physics
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subjects Progress */}
                <div>
                  <p className="text-sm font-semibold text-gray-300 mb-3">
                    Subject Progress
                  </p>
                  <div className="space-y-3">
                    <div className="hover:bg-gray-800/50 p-2 rounded transition-smooth">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-300">
                          Mathematics
                        </span>
                        <span className="text-xs text-gray-400">85%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-700"
                          style={{ width: "85%" }}
                        />
                      </div>
                    </div>
                    <div className="hover:bg-gray-800/50 p-2 rounded transition-smooth">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-300">Physics</span>
                        <span className="text-xs text-gray-400">72%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full transition-all duration-700"
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
          <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg border border-gray-200 animate-float">
            <div className="flex items-center gap-2">
              <IoCheckmarkCircle className="w-4 h-4 text-green-600" />
              <p className="text-xs font-semibold text-gray-900">
                Exam: June 15
              </p>
            </div>
          </div>
          <div
            className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg border border-gray-200 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-2">
              <IoCheckmarkCircle className="w-4 h-4 text-green-600" />
              <p className="text-xs font-semibold text-gray-900">
                3 Assignments Done
              </p>
            </div>
          </div>
          {/* Blur Effect Background */}
          <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-blue-400 rounded-full mix-blend-multiply blur-3xl opacity-10 animate-pulse-lg pointer-events-none" />{" "}
          <div
            className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-lg"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </div>
    </section>
  );
}

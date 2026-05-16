'use client';

import { IoStar, IoCheckmarkCircle, IoCalendar } from 'react-icons/io5';

export default function HeroSection() {
  return (
    <section className="hero-gradient pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full animate-bounce-lg">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse-lg" />
              <span className="text-sm font-medium text-blue-600">
                For All Academic Levels
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Organize Your Entire Academic Life—From{' '}
              <span className="gradient-text">Class 1 to PhD</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              A powerful academic management system that helps students track
              subjects, assignments, exams, attendance, and progress—all in one
              intelligent dashboard.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-xl transition-smooth hover:scale-105 active:scale-95 hover:animate-wiggle">
                Get Started Free
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-smooth">
                View Live Demo
              </button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <IoStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span>
                Trusted by <strong>10,000+</strong> students worldwide
              </span>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-2xl border border-gray-200 animate-slide-up">
              {/* Dashboard Mock */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Your Dashboard
                    </h3>
                    <p className="text-xs text-gray-500">May 16, 2024</p>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full animate-pulse-lg" />
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-smooth hover:scale-105 animate-scale-in">
                    <p className="text-xs text-gray-600 mb-1">Active Tasks</p>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-smooth hover:scale-105 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                    <p className="text-xs text-gray-600 mb-1">Completion</p>
                    <p className="text-2xl font-bold text-green-600">87%</p>
                  </div>
                </div>

                {/* Subject Cards */}
                <div className="space-y-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 hover:shadow-md transition-smooth">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse-lg" />
                      <span className="text-xs font-semibold text-gray-900">
                        Mathematics
                      </span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-1.5">
                      <div
                        className="bg-blue-600 h-1.5 rounded-full transition-all duration-700"
                        style={{ width: '75%' }}
                      />
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 hover:shadow-md transition-smooth">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse-lg" />
                      <span className="text-xs font-semibold text-gray-900">
                        Physics
                      </span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-1.5">
                      <div
                        className="bg-purple-600 h-1.5 rounded-full transition-all duration-700"
                        style={{ width: '60%' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-smooth hover:scale-105">
                  View Full Dashboard →
                </button>
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

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg border border-gray-200 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <IoCheckmarkCircle className="w-4 h-4 text-green-600" />
                  <p className="text-xs font-semibold text-gray-900">
                    3 Assignments Done
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import {
  IoMenu,
  IoClose,
  IoChevronDown,
  IoLogOut,
  IoPerson,
} from 'react-icons/io5';

interface StudentData {
  name: string;
  email: string;
  studentId: string;
}

export default function NavbarProCompact() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState<
    string | null
  >(null);

  const [student, setStudent] =
    useState<StudentData | null>(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const studentData =
        localStorage.getItem('student');

      if (studentData) {
        setStudent(JSON.parse(studentData));
        setIsLoggedIn(true);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('student');
    localStorage.removeItem('studentId');

    setIsLoggedIn(false);

    window.location.href = '/';
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-blue-600"
          >
            StudentSphere
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {!isLoggedIn ? (
              <>
                <Link
                  href="/features"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Features
                </Link>

                <Link
                  href="/pricing"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Pricing
                </Link>

                {/* Resources Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() =>
                    setActiveDropdown('resources')
                  }
                  onMouseLeave={() =>
                    setActiveDropdown(null)
                  }
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    Resources

                    <IoChevronDown className="w-4 h-4" />
                  </button>

                  {activeDropdown === 'resources' && (
                    <div className="absolute top-10 left-0 w-44 bg-white border border-gray-200 rounded-xl shadow-lg py-2">
                      <Link
                        href="/about"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        About
                      </Link>

                      <Link
                        href="/how-it-works"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        How It Works
                      </Link>

                      <Link
                        href="/contact"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        Contact
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Sign In
                </Link>

                <Link
                  href="/signup"
                  className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Dashboard
                </Link>

                {/* Account Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() =>
                    setActiveDropdown('account')
                  }
                  onMouseLeave={() =>
                    setActiveDropdown(null)
                  }
                >
                  <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors">
                    <IoPerson className="w-5 h-5 text-gray-700" />

                    <span className="text-sm font-medium text-gray-700">
                      {student?.name}
                    </span>

                    <IoChevronDown className="w-4 h-4 text-gray-700" />
                  </button>

                  {activeDropdown === 'account' && (
                    <div className="absolute top-12 right-0 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">
                          {student?.name}
                        </p>

                        <p className="text-xs text-gray-500 mt-1 break-all">
                          {student?.email}
                        </p>
                      </div>

                      <Link
                        href="/profile"
                        className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <IoPerson className="w-4 h-4" />
                        My Profile
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <IoLogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileOpen ? (
              <IoClose className="w-6 h-6 text-gray-700" />
            ) : (
              <IoMenu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
            {!isLoggedIn ? (
              <>
                <Link
                  href="/features"
                  className="block px-2 py-2 text-sm text-gray-700 hover:text-blue-600"
                >
                  Features
                </Link>

                <Link
                  href="/pricing"
                  className="block px-2 py-2 text-sm text-gray-700 hover:text-blue-600"
                >
                  Pricing
                </Link>

                <Link
                  href="/about"
                  className="block px-2 py-2 text-sm text-gray-700 hover:text-blue-600"
                >
                  About
                </Link>

                <Link
                  href="/how-it-works"
                  className="block px-2 py-2 text-sm text-gray-700 hover:text-blue-600"
                >
                  How It Works
                </Link>

                <Link
                  href="/contact"
                  className="block px-2 py-2 text-sm text-gray-700 hover:text-blue-600"
                >
                  Contact
                </Link>

                <div className="pt-3 flex flex-col gap-2">
                  <Link
                    href="/login"
                    className="w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-xl"
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/signup"
                    className="w-full text-center px-4 py-2 bg-blue-600 text-white rounded-xl"
                  >
                    Get Started
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="px-2 py-2 border-b border-gray-100 mb-2">
                  <p className="text-sm font-semibold text-gray-900">
                    {student?.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {student?.email}
                  </p>
                </div>

                <Link
                  href="/dashboard"
                  className="block px-2 py-2 text-sm text-gray-700 hover:text-blue-600"
                >
                  Dashboard
                </Link>

                <Link
                  href="/profile"
                  className="block px-2 py-2 text-sm text-gray-700 hover:text-blue-600"
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-2 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
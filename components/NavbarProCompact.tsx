'use client';
import { useState } from 'react';
import Link from 'next/link';
import { IoMenu, IoClose, IoChevronDown, IoLogoGithub, IoLogOut } from 'react-icons/io5';

export default function NavbarProCompact() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isLoggedIn = typeof window !== 'undefined' && !!localStorage.getItem('studentId');

  const handleLogout = () => {
    localStorage.removeItem('studentId');
    localStorage.removeItem('studentEmail');
    window.location.href = '/';
  };

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg text-blue-600">
            StudentSphere
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {!isLoggedIn ? (
              <>
                <Link href="/features" className="text-xs text-gray-700 hover:text-blue-600">
                  Features
                </Link>
                <Link href="/pricing" className="text-xs text-gray-700 hover:text-blue-600">
                  Pricing
                </Link>
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('product')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="text-xs text-gray-700 hover:text-blue-600 flex items-center gap-1">
                    Resources <IoChevronDown className="w-3 h-3" />
                  </button>
                  {activeDropdown === 'product' && (
                    <div className="absolute top-8 left-0 bg-white rounded-lg shadow-lg border border-gray-100 py-2 w-32">
                      <Link href="/about" className="block px-4 py-1 text-xs text-gray-700 hover:text-blue-600">
                        About
                      </Link>
                      <Link href="/contact" className="block px-4 py-1 text-xs text-gray-700 hover:text-blue-600">
                        Contact
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/login"
                  className="px-4 py-1.5 text-xs border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-1.5 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="text-xs text-gray-700 hover:text-blue-600">
                  Dashboard
                </Link>
                <Link href="/profile" className="text-xs text-gray-700 hover:text-blue-600">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-xs text-gray-700 hover:text-red-600 flex items-center gap-1"
                >
                  <IoLogOut className="w-3 h-3" /> Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <IoClose className="w-5 h-5" />
            ) : (
              <IoMenu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {!isLoggedIn ? (
              <>
                <Link href="/features" className="block py-2 text-xs text-gray-700">
                  Features
                </Link>
                <Link href="/pricing" className="block py-2 text-xs text-gray-700">
                  Pricing
                </Link>
                <Link href="/about" className="block py-2 text-xs text-gray-700">
                  About
                </Link>
                <Link href="/login" className="block py-2 text-xs text-blue-600">
                  Sign In
                </Link>
                <Link href="/signup" className="block py-2 text-xs text-blue-600">
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="block py-2 text-xs text-gray-700">
                  Dashboard
                </Link>
                <Link href="/profile" className="block py-2 text-xs text-gray-700">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block py-2 text-xs text-red-600"
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

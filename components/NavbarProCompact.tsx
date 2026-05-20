'use client';
import { useState } from 'react';
import Link from 'next/link';
import { IoMenu, IoClose, IoChevronDown, IoLogOut, IoMoon, IoSunny } from 'react-icons/io5';
import { useTheme } from './ThemeProvider';

export default function NavbarProCompact() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const isLoggedIn = typeof window !== 'undefined' && !!localStorage.getItem('studentId');

  const handleLogout = () => {
    localStorage.removeItem('studentId');
    localStorage.removeItem('studentEmail');
    window.location.href = '/';
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 shadow-sm z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg text-blue-600 dark:text-blue-400">
            StudentSphere
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {!isLoggedIn ? (
              <>
                <Link href="/features" className="text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Features
                </Link>
                <Link href="/pricing" className="text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Pricing
                </Link>
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('product')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors">
                    Resources <IoChevronDown className="w-3 h-3" />
                  </button>
                  {activeDropdown === 'product' && (
                    <div className="absolute top-8 left-0 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-100 dark:border-slate-700 py-2 w-32 transition-colors">
                      <Link href="/about" className="block px-4 py-1 text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        About
                      </Link>
                      <Link href="/contact" className="block px-4 py-1 text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Contact
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/login"
                  className="px-4 py-1.5 text-xs border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-1.5 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Dashboard
                </Link>
                <Link href="/profile" className="text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-xs text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 flex items-center gap-1 transition-colors"
                >
                  <IoLogOut className="w-3 h-3" /> Logout
                </button>
              </>
            )}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <IoMoon className="w-4 h-4" />
              ) : (
                <IoSunny className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            >
              {theme === 'light' ? (
                <IoMoon className="w-4 h-4" />
              ) : (
                <IoSunny className="w-4 h-4" />
              )}
            </button>
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
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-slate-700 transition-colors">
            {!isLoggedIn ? (
              <>
                <Link href="/features" className="block py-2 text-xs text-gray-700 dark:text-gray-300">
                  Features
                </Link>
                <Link href="/pricing" className="block py-2 text-xs text-gray-700 dark:text-gray-300">
                  Pricing
                </Link>
                <Link href="/about" className="block py-2 text-xs text-gray-700 dark:text-gray-300">
                  About
                </Link>
                <Link href="/login" className="block py-2 text-xs text-blue-600 dark:text-blue-400">
                  Sign In
                </Link>
                <Link href="/signup" className="block py-2 text-xs text-blue-600 dark:text-blue-400">
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="block py-2 text-xs text-gray-700 dark:text-gray-300">
                  Dashboard
                </Link>
                <Link href="/profile" className="block py-2 text-xs text-gray-700 dark:text-gray-300">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block py-2 text-xs text-red-600 dark:text-red-400"
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

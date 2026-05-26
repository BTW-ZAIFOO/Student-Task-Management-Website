'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMenu, IoClose, IoChevronDown } from 'react-icons/io5';

export default function NavbarPro() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productLinks = [
    { label: 'Features', href: '/features' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Dashboard', href: '/dashboard-preview' },
  ];

  const resourceLinks = [
    { label: 'Academic Levels', href: '/academic-levels' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'About', href: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-smooth ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm'
          : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-lg font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hidden sm:inline">
              StudentSphere
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Product Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('product')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1 transition-smooth">
                Product <IoChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'product' && (
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg py-2 animate-fade-in">
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-smooth"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1 transition-smooth">
                Resources <IoChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg py-2 animate-fade-in">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-smooth"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/pricing" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-smooth">
              Pricing
            </Link>

            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-smooth">
              Contact
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-smooth"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-smooth"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
          >
            {isMobileMenuOpen ? <IoClose className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {[...productLinks, ...resourceLinks, { label: 'Pricing', href: '/pricing' }, { label: 'Contact', href: '/contact' }].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-smooth"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-2 flex flex-col gap-2 mt-2 border-t border-gray-200 pt-3">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm text-center font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 text-sm text-center font-medium text-white bg-linear-to-r from-blue-600 to-indigo-600 rounded-lg hover:shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

import React from 'react';
import NavbarProCompact from './NavbarProCompact';
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavbarProCompact />
      <main className="pt-16 grow">{children}</main>
      
      {/* Premium Footer */}
      <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-bold text-sm text-gray-900">StudentSphere</h3>
              <p className="text-xs text-gray-600 mt-2">Academic management made simple.</p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-xs text-gray-900 mb-3">Product</h4>
              <ul className="space-y-1.5 text-xs">
                <li><a href="/features" className="text-gray-600 hover:text-blue-600">Features</a></li>
                <li><a href="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
                <li><a href="/demo" className="text-gray-600 hover:text-blue-600">Live Demo</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-xs text-gray-900 mb-3">Resources</h4>
              <ul className="space-y-1.5 text-xs">
                <li><a href="/about" className="text-gray-600 hover:text-blue-600">About</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
                <li><a href="/testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-xs text-gray-900 mb-3">Legal</h4>
              <ul className="space-y-1.5 text-xs">
                <li><a href="/privacy-policy" className="text-gray-600 hover:text-blue-600">Privacy</a></li>
                <li><a href="/terms-and-conditions" className="text-gray-600 hover:text-blue-600">Terms</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Divider and Bottom */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-600">© 2026 StudentSphere. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <IoLogoTwitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <IoLogoLinkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <IoLogoGithub className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

          
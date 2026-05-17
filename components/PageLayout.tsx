import React from 'react';
import NavbarPro from './NavbarPro';
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavbarPro />
      <main className="pt-20 flex-grow">{children}</main>
      
      {/* Premium Footer */}
      <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-bold text-gray-900">StudentSphere</h3>
              <p className="text-sm text-gray-600 mt-2">Academic management made simple.</p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/features" className="text-gray-600 hover:text-blue-600">Features</a></li>
                <li><a href="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
                <li><a href="/demo" className="text-gray-600 hover:text-blue-600">Live Demo</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="text-gray-600 hover:text-blue-600">About</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
                <li><a href="/testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy-policy" className="text-gray-600 hover:text-blue-600">Privacy</a></li>
                <li><a href="/terms-and-conditions" className="text-gray-600 hover:text-blue-600">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-8 flex items-center justify-between">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} StudentSphere. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600"><IoLogoTwitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-600 hover:text-blue-600"><IoLogoLinkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-600 hover:text-blue-600"><IoLogoGithub className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";
import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '../../components/PageLayout';
import { validateForm, validateEmail, saveFormSubmission } from '../../lib/formUtils';
import { IoCheckmark, IoAlert } from 'react-icons/io5';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate
    const validation = validateForm(
      { email: formData.email, password: formData.password },
      [
        { name: 'email', type: 'email', label: 'Email', required: true },
        { name: 'password', type: 'password', label: 'Password', required: true, minLength: 6 },
      ]
    );

    if (!validation.valid) {
      setErrors(validation.errors);
      setIsLoading(false);
      return;
    }

    // Simulate submission
    setTimeout(() => {
      saveFormSubmission('login', { email: formData.email, password: formData.password });
      setSuccess(true);
      setIsLoading(false);
      setTimeout(() => window.location.href = '/dashboard-preview', 2000);
    }, 800);
  };

  return (
    <PageLayout>
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 animate-fade-in-up">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
              <p className="text-sm text-gray-600 mt-2">Sign in to your StudentSphere account</p>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
                <IoCheckmark className="w-5 h-5 text-green-600" />
                <p className="text-sm text-green-700">Login successful! Redirecting...</p>
              </div>
            )}

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-smooth ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><IoAlert className="w-3 h-3" />{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-smooth ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.password && <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><IoAlert className="w-3 h-3" />{errors.password}</p>}
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="w-4 h-4 rounded"
                  />
                  Remember me
                </label>
                <Link href="/contact" className="text-blue-600 hover:text-blue-700">
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-500">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social */}
            <button className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-smooth">
              Continue with Google
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{' '}
              <Link href="/signup" className="text-blue-600 font-semibold hover:text-blue-700">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

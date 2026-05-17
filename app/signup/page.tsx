"use client";
import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '../../components/PageLayout';
import { validateForm, saveFormSubmission } from '../../lib/formUtils';
import { IoCheckmark, IoAlert } from 'react-icons/io5';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    academicLevel: 'Secondary',
    terms: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = (e.target as HTMLInputElement).type === 'checkbox';
    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.terms) newErrors.terms = 'You must accept the terms';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // Simulate submission
    setTimeout(() => {
      saveFormSubmission('signup', {
        name: formData.name,
        email: formData.email,
        academicLevel: formData.academicLevel,
      });
      setSuccess(true);
      setIsLoading(false);
      setTimeout(() => window.location.href = '/dashboard-preview', 2000);
    }, 800);
  };

  return (
    <PageLayout>
      <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 animate-fade-in-up">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
              <p className="text-sm text-gray-600 mt-2">Join thousands of organized students</p>
            </div>

            {/* Success */}
            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
                <IoCheckmark className="w-5 h-5 text-green-600" />
                <p className="text-sm text-green-700">Account created! Redirecting to dashboard...</p>
              </div>
            )}

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-smooth ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><IoAlert className="w-3 h-3" />{errors.name}</p>}
              </div>

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

              {/* Academic Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Academic Level</label>
                <select
                  name="academicLevel"
                  value={formData.academicLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-smooth"
                >
                  <option>Primary (Class 1-5)</option>
                  <option>Secondary (Class 6-8)</option>
                  <option>Higher Secondary (Class 9-10)</option>
                  <option>College (Class 11-12)</option>
                  <option>University (BS/MS/MPhil)</option>
                  <option>Doctorate (PhD)</option>
                </select>
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

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-smooth ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><IoAlert className="w-3 h-3" />{errors.confirmPassword}</p>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="w-4 h-4 mt-0.5 rounded"
                />
                <label className="text-xs text-gray-600">
                  I agree to the{' '}
                  <Link href="/terms-and-conditions" className="text-blue-600 font-semibold hover:underline">
                    Terms & Conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy-policy" className="text-blue-600 font-semibold hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.terms && <p className="text-xs text-red-600 flex items-center gap-1"><IoAlert className="w-3 h-3" />{errors.terms}</p>}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Creating account...' : 'Create Account'}
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 font-semibold hover:text-blue-700">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

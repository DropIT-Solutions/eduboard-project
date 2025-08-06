import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Super Admin Login | EduBoard',
  description: 'Super Administrator access to EduBoard system',
};

export default function SuperAdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <img src="/logo.png" alt="EduBoard Logo" className="h-24 w-auto mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white">Super Admin Portal</h1>
          <p className="text-gray-300">System Administration Access</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔐</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Restricted Access</h2>
            <p className="text-sm text-gray-600 mt-2">
              This area is for system administrators only
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700 mb-2">
                Administrator Email
              </label>
              <input
                type="email"
                id="adminEmail"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="admin@eduboard.com"
              />
            </div>

            <div>
              <label
                htmlFor="adminPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Administrator Password
              </label>
              <input
                type="password"
                id="adminPassword"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter administrator password"
              />
            </div>

            <div>
              <label htmlFor="mfaCode" className="block text-sm font-medium text-gray-700 mb-2">
                Two-Factor Authentication Code
              </label>
              <input
                type="text"
                id="mfaCode"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="000000"
                maxLength={6}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Access Admin Portal
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">Emergency access? Contact system support</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-200">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

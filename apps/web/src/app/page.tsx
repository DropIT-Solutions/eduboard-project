import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EduBoard | School Management System',
  description: 'Access your school management portal',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo and Welcome */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img src="/logo.png" alt="EduBoard Logo" className="h-20 w-auto" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to EduBoard</h1>
            <p className="text-gray-600">Access your school management portal</p>
          </div>

          {/* Login Options Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            {/* School/Organization Login */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                Choose Your Login Method
              </h2>

              {/* Login Buttons */}
              <div className="space-y-3">
                <Link
                  href="/login"
                  className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-primary bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Staff & Teacher Login
                </Link>

                <Link
                  href="/login/student"
                  className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-secondary bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Student Login
                </Link>

                <Link
                  href="/login/parent"
                  className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-300 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Parent Login
                </Link>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>

              {/* School Code Entry */}
              <div className="space-y-2">
                <p className="text-sm text-gray-600 text-center">
                  Have a school code? Enter it below:
                </p>
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Enter your school code"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                  >
                    Access School Portal
                  </button>
                </form>
              </div>
            </div>

            {/* Help Links */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-center space-x-4 text-sm">
                <Link href="/help" className="text-gray-600 hover:text-primary">
                  Need Help?
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/forgot-password" className="text-gray-600 hover:text-primary">
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 text-center space-y-2">
            <p className="text-sm text-gray-600">
              For technical support, contact your school administrator
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-700">
                Privacy Policy
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/terms" className="text-gray-500 hover:text-gray-700">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} EduBoard. All rights reserved.
      </footer>
    </div>
  );
}

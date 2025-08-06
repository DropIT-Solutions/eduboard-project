import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Settings | EduBoard',
  description: 'System settings and configuration',
};

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/dashboard">
                <img src="/logo.png" alt="EduBoard" className="h-8 w-auto cursor-pointer" />
              </Link>
              <h1 className="ml-4 text-xl font-semibold text-gray-900">System Settings</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Settings</h2>
              <nav className="space-y-2">
                <a
                  href="#school"
                  className="block text-sm text-primary hover:bg-gray-50 p-2 rounded"
                >
                  School Information
                </a>
                <a
                  href="#academic"
                  className="block text-sm text-gray-600 hover:bg-gray-50 p-2 rounded"
                >
                  Academic Settings
                </a>
                <a
                  href="#users"
                  className="block text-sm text-gray-600 hover:bg-gray-50 p-2 rounded"
                >
                  User Management
                </a>
                <a
                  href="#notifications"
                  className="block text-sm text-gray-600 hover:bg-gray-50 p-2 rounded"
                >
                  Notifications
                </a>
                <a
                  href="#security"
                  className="block text-sm text-gray-600 hover:bg-gray-50 p-2 rounded"
                >
                  Security
                </a>
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">School Configuration</h2>
              <p className="text-gray-600 mb-6">
                Configure school information, academic year settings, user roles, and system
                preferences.
              </p>
              <div className="text-sm text-gray-500">
                🚧 Ready for development - assign this to a team member!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

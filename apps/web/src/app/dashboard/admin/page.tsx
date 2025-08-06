import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Super Admin Dashboard | EduBoard',
  description: 'Super Administrator system control panel',
};

export default function SuperAdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="EduBoard" className="h-8 w-auto" />
              <h1 className="ml-4 text-xl font-semibold text-gray-900">Super Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                SA
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* System Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="text-2xl">🏫</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Schools</p>
                <p className="text-2xl font-semibold text-gray-900">12</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-2xl">👥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-semibold text-gray-900">15,432</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">System Status</p>
                <p className="text-lg font-semibold text-green-600">Operational</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <span className="text-2xl">💾</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Data Storage</p>
                <p className="text-2xl font-semibold text-gray-900">2.3 TB</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* System Management */}
          <div className="lg:col-span-2 space-y-6">
            {/* School Management */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">School Management</h2>
                <p className="text-sm text-gray-600">Manage all schools in the system</p>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/admin/schools"
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🏫</span>
                    <div>
                      <p className="font-medium">Schools Directory</p>
                      <p className="text-sm text-gray-600">View and manage schools</p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/admin/schools/new"
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">➕</span>
                    <div>
                      <p className="font-medium">Add School</p>
                      <p className="text-sm text-gray-600">Register new school</p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/admin/subscriptions"
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💳</span>
                    <div>
                      <p className="font-medium">Subscriptions</p>
                      <p className="text-sm text-gray-600">Billing and plans</p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/admin/support"
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🎧</span>
                    <div>
                      <p className="font-medium">Support Tickets</p>
                      <p className="text-sm text-gray-600">Customer support</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* System Administration */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">System Administration</h2>
                <p className="text-sm text-gray-600">Core system management tools</p>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/admin/users"
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">👤</span>
                    <div>
                      <p className="font-medium">User Management</p>
                      <p className="text-sm text-gray-600">Global user controls</p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/admin/security"
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🔒</span>
                    <div>
                      <p className="font-medium">Security Center</p>
                      <p className="text-sm text-gray-600">Security settings</p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/admin/analytics"
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📊</span>
                    <div>
                      <p className="font-medium">System Analytics</p>
                      <p className="text-sm text-gray-600">Usage and performance</p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/admin/settings"
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">⚙️</span>
                    <div>
                      <p className="font-medium">System Settings</p>
                      <p className="text-sm text-gray-600">Global configuration</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">System Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      action: 'New school registered',
                      school: 'Greenfield Academy',
                      time: '2 hours ago',
                    },
                    {
                      action: 'Subscription renewed',
                      school: 'Oak Valley High',
                      time: '4 hours ago',
                    },
                    {
                      action: 'Support ticket resolved',
                      school: 'Pine Ridge Elementary',
                      time: '6 hours ago',
                    },
                    {
                      action: 'System backup completed',
                      school: 'All Schools',
                      time: '12 hours ago',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 font-medium">{item.action}</p>
                        <p className="text-xs text-gray-600">{item.school}</p>
                        <p className="text-xs text-gray-500">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* System Health */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">System Health</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Database</span>
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                    Healthy
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">API Services</span>
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                    Operational
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">File Storage</span>
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                    Normal
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Email Service</span>
                  <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                    Warning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

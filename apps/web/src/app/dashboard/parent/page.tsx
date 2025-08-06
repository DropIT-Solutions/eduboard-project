import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parent Dashboard | EduBoard',
  description: 'Parent portal dashboard',
};

export default function ParentDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="EduBoard" className="h-8 w-auto" />
              <h1 className="ml-4 text-xl font-semibold text-gray-900">Parent Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">📧</button>
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                MD
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Children Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Children</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Child 1 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">John Smith</h3>
                  <p className="text-gray-600">Grade 10 - Mathematics Track</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">3.85</p>
                  <p className="text-sm text-gray-600">GPA</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">96%</p>
                  <p className="text-sm text-gray-600">Attendance</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                View Details
              </button>
            </div>

            {/* Child 2 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  ES
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Emma Smith</h3>
                  <p className="text-gray-600">Grade 8 - General Studies</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">3.92</p>
                  <p className="text-sm text-gray-600">GPA</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">98%</p>
                  <p className="text-sm text-gray-600">Attendance</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Updates */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Recent Updates</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      child: 'John Smith',
                      type: 'Grade',
                      message: 'Received A- on Mathematics Quiz',
                      time: '2 hours ago',
                      color: 'green',
                    },
                    {
                      child: 'Emma Smith',
                      type: 'Attendance',
                      message: 'Perfect attendance this week',
                      time: '1 day ago',
                      color: 'blue',
                    },
                    {
                      child: 'John Smith',
                      type: 'Assignment',
                      message: 'Physics lab report due Friday',
                      time: '2 days ago',
                      color: 'yellow',
                    },
                    {
                      child: 'Emma Smith',
                      type: 'Achievement',
                      message: 'Selected for Science Fair',
                      time: '3 days ago',
                      color: 'purple',
                    },
                  ].map((update, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div
                        className={`w-3 h-3 bg-${update.color}-500 rounded-full mt-2 flex-shrink-0`}
                      ></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">{update.child}</p>
                          <span
                            className={`text-xs px-2 py-1 rounded-full bg-${update.color}-100 text-${update.color}-800`}
                          >
                            {update.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{update.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{update.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <span className="text-lg mr-3">💬</span>
                    <span className="text-sm font-medium">Message Teachers</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <span className="text-lg mr-3">📊</span>
                    <span className="text-sm font-medium">View Report Cards</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <span className="text-lg mr-3">📅</span>
                    <span className="text-sm font-medium">Schedule Meeting</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Parent-Teacher Conference</span>
                  <span className="text-gray-500">Mar 15</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Science Fair</span>
                  <span className="text-gray-500">Mar 20</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Spring Break</span>
                  <span className="text-gray-500">Apr 1-5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">School Play</span>
                  <span className="text-gray-500">Apr 12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

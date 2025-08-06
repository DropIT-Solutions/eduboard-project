import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Teachers | EduBoard',
  description: 'Manage teachers and staff',
};

export default function TeachersPage() {
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
              <h1 className="ml-4 text-xl font-semibold text-gray-900">Teacher Management</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/teachers/new"
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90"
              >
                Add Teacher
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Teachers</p>
                <p className="text-2xl font-semibold text-gray-900">89</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="text-2xl">✅</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-2xl font-semibold text-green-600">85</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <span className="text-2xl">📚</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Departments</p>
                <p className="text-2xl font-semibold text-yellow-600">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <span className="text-2xl">⏰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">On Leave</p>
                <p className="text-2xl font-semibold text-purple-600">4</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search teachers..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>All Departments</option>
                <option>Mathematics</option>
                <option>Science</option>
                <option>English</option>
                <option>History</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>All Status</option>
                <option>Active</option>
                <option>On Leave</option>
                <option>Inactive</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Dr. Sarah Johnson',
              department: 'Mathematics',
              email: 'sarah.johnson@school.edu',
              phone: '(555) 123-4567',
              classes: 5,
              students: 125,
              status: 'Active',
            },
            {
              name: 'Mr. Michael Davis',
              department: 'Science',
              email: 'michael.davis@school.edu',
              phone: '(555) 234-5678',
              classes: 4,
              students: 98,
              status: 'Active',
            },
            {
              name: 'Ms. Emily Wilson',
              department: 'English',
              email: 'emily.wilson@school.edu',
              phone: '(555) 345-6789',
              classes: 6,
              students: 145,
              status: 'Active',
            },
            {
              name: 'Prof. Robert Brown',
              department: 'History',
              email: 'robert.brown@school.edu',
              phone: '(555) 456-7890',
              classes: 3,
              students: 87,
              status: 'On Leave',
            },
            {
              name: 'Dr. Lisa Anderson',
              department: 'Science',
              email: 'lisa.anderson@school.edu',
              phone: '(555) 567-8901',
              classes: 4,
              students: 102,
              status: 'Active',
            },
            {
              name: 'Mr. James Taylor',
              department: 'Physical Education',
              email: 'james.taylor@school.edu',
              phone: '(555) 678-9012',
              classes: 8,
              students: 200,
              status: 'Active',
            },
          ].map((teacher, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {teacher.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{teacher.name}</h3>
                  <p className="text-sm text-gray-600">{teacher.department}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">📧</span>
                  {teacher.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">📱</span>
                  {teacher.phone}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900">{teacher.classes}</p>
                  <p className="text-xs text-gray-600">Classes</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900">{teacher.students}</p>
                  <p className="text-xs text-gray-600">Students</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    teacher.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : teacher.status === 'On Leave'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                  }`}
                >
                  {teacher.status}
                </span>
                <div className="flex space-x-2">
                  <Link
                    href={`/teachers/${index + 1}`}
                    className="text-primary hover:text-primary/90 text-sm"
                  >
                    View
                  </Link>
                  <Link
                    href={`/teachers/${index + 1}/edit`}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

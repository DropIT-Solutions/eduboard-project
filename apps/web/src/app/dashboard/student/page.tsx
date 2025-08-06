import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Dashboard | EduBoard',
  description: 'Student portal dashboard',
};

export default function StudentDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="EduBoard" className="h-8 w-auto" />
              <h1 className="ml-4 text-xl font-semibold text-gray-900">Student Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">📩</button>
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-medium">
                JS
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Student Info Card */}
        <div className="bg-gradient-to-r from-secondary to-secondary/80 text-white rounded-lg p-6 mb-8">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
              JS
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold">John Smith</h2>
              <p className="text-secondary-foreground">Grade 10 | Student ID: 2024001</p>
              <p className="text-secondary-foreground">Mathematics & Science Track</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="text-2xl">📊</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">GPA</p>
                <p className="text-2xl font-semibold text-green-600">3.85</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-2xl">📅</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Attendance</p>
                <p className="text-2xl font-semibold text-blue-600">96%</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <span className="text-2xl">📚</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Assignments</p>
                <p className="text-2xl font-semibold text-yellow-600">3 Due</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Achievements</p>
                <p className="text-2xl font-semibold text-purple-600">12</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Courses */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Current Courses</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      name: 'Advanced Mathematics',
                      teacher: 'Mr. Johnson',
                      grade: 'A-',
                      time: 'Mon, Wed, Fri 9:00 AM',
                    },
                    {
                      name: 'Physics',
                      teacher: 'Dr. Williams',
                      grade: 'A',
                      time: 'Tue, Thu 10:30 AM',
                    },
                    {
                      name: 'Chemistry',
                      teacher: 'Ms. Davis',
                      grade: 'B+',
                      time: 'Mon, Wed, Fri 2:00 PM',
                    },
                    {
                      name: 'English Literature',
                      teacher: 'Mrs. Brown',
                      grade: 'A-',
                      time: 'Tue, Thu 1:00 PM',
                    },
                  ].map((course, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{course.name}</h3>
                          <p className="text-sm text-gray-600">Teacher: {course.teacher}</p>
                          <p className="text-sm text-gray-600">{course.time}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                            {course.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Assignments */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming</h2>
              </div>
              <div className="p-6 space-y-3">
                <div className="border-l-4 border-red-400 pl-3">
                  <p className="font-medium text-sm">Math Quiz</p>
                  <p className="text-xs text-gray-500">Due Tomorrow</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-3">
                  <p className="font-medium text-sm">Physics Lab Report</p>
                  <p className="text-xs text-gray-500">Due Friday</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-3">
                  <p className="font-medium text-sm">English Essay</p>
                  <p className="text-xs text-gray-500">Due Next Week</p>
                </div>
              </div>
            </div>

            {/* Today&apos;s Schedule */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Today&apos;s Classes</h2>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Mathematics</span>
                  <span className="text-gray-500">9:00 AM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Physics</span>
                  <span className="text-gray-500">10:30 AM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">English</span>
                  <span className="text-gray-500">1:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Chemistry</span>
                  <span className="text-gray-500">2:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

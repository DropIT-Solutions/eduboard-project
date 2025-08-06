import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Grades | EduBoard',
  description: 'Manage student grades',
};

export default function GradesPage() {
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
              <h1 className="ml-4 text-xl font-semibold text-gray-900">Grade Management</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90">
                Add Grades
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* TODO: Add grade management features */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gradebook System</h2>
          <p className="text-gray-600 mb-6">
            Digital gradebook with assignment tracking, grade calculations, and progress reports.
          </p>
          <div className="text-sm text-gray-500">
            🚧 Ready for development - assign this to a team member!
          </div>
        </div>
      </div>
    </div>
  );
}

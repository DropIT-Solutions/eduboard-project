import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EduBoard | Modern School Management System',
  description:
    'Transform your educational institution with EduBoard - A comprehensive, cloud-based school management system for the digital age.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl text-primary">EduBoard</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">
                  Modern School Management
                  <span className="text-primary block">Made Simple</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-gray-600 md:text-xl leading-relaxed">
                  Streamline your educational institution with our comprehensive cloud-based
                  platform. Manage students, teachers, courses, and administrative tasks all in one
                  place.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
                <Link
                  href="/register"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="#demo"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-base font-medium shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
                >
                  Watch Demo
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-500 pt-8">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Free 30-day trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything You Need to Manage Your School
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-lg">
                From student enrollment to grade management, EduBoard provides all the tools you
                need.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold">Student Management</h3>
                <p className="text-gray-600 text-center">
                  Complete student profiles, enrollment tracking, and academic progress monitoring.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold">Grade Management</h3>
                <p className="text-gray-600 text-center">
                  Digital gradebooks, automated calculations, and comprehensive reporting.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-semibold">Schedule Management</h3>
                <p className="text-gray-600 text-center">
                  Class scheduling, room assignments, and timetable optimization.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold">Communication</h3>
                <p className="text-gray-600 text-center">
                  Parent-teacher communication, announcements, and messaging system.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold">Analytics & Reports</h3>
                <p className="text-gray-600 text-center">
                  Detailed insights, performance analytics, and customizable reports.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold">Security & Privacy</h3>
                <p className="text-gray-600 text-center">
                  Enterprise-grade security with role-based access control and data protection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Transform Your School?
                </h2>
                <p className="mx-auto max-w-[600px] text-lg text-white/90">
                  Join hundreds of educational institutions already using EduBoard to streamline
                  their operations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-base font-medium text-primary shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
                >
                  Start Your Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-transparent px-8 text-base font-medium text-white transition-all hover:bg-white/10"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="font-bold text-lg">EduBoard</span>
              </div>
              <p className="text-sm text-gray-600">
                Empowering educational institutions with modern technology.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="#features" className="text-gray-600 hover:text-primary">
                  Features
                </Link>
                <Link href="/pricing" className="text-gray-600 hover:text-primary">
                  Pricing
                </Link>
                <Link href="/demo" className="text-gray-600 hover:text-primary">
                  Demo
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  About
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-primary">
                  Contact
                </Link>
                <Link href="/careers" className="text-gray-600 hover:text-primary">
                  Careers
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="/privacy" className="text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-primary">
                  Terms of Service
                </Link>
                <Link href="/security" className="text-gray-600 hover:text-primary">
                  Security
                </Link>
              </nav>
            </div>
          </div>

          <div className="border-t pt-8 mt-8">
            <p className="text-center text-sm text-gray-600">
              &copy; {new Date().getFullYear()} EduBoard by DropIT Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import MsalProviderWrapper from '../lib/MsalProviderWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EduBoard | School Management System',
  description: 'A comprehensive school management system',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MsalProviderWrapper>{children}</MsalProviderWrapper>
      </body>
    </html>
  );
}

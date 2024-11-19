'use client';

import './globals.css';
import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Navbar />
          <main style={{ minHeight: '80vh', padding: '1rem' }}>{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}

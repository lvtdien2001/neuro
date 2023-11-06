import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Neuro V2',
  description: '',
  icons: '/static/gifs/neuro.gif'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='h-full bg-black text-[#FFFFFF]' lang="en">
      <body className={`h-full w-full mx-auto ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Website Design from R899/Month | NMAS WebCraft',
  description:
    'Custom Next.js websites for South African businesses. Pay nothing until live. No contracts. From R899/month.',
  keywords:
    'website design South Africa, pay monthly website, affordable website design, Next.js websites, custom website design, web design Johannesburg, small business websites South Africa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

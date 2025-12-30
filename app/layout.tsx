import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Script from 'next/script';  // ← This line is new (needed for Google Analytics)

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Website Design from R899/Month | NMAS WebCraft',
  description: 'Custom Next.js websites for South African businesses. Pay nothing until live. No contracts. From R899/month.',
  keywords: 'website design South Africa, pay monthly website, affordable website design, Next.js websites, custom website design, web design Johannesburg, small business websites South Africa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics - Start (everything below this line is new) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P7B68F528Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P7B68F528Z');
          `}
        </Script>
        {/* Google Analytics - End */}
      </head>
      <body className={inter.className}>
        <Banner />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

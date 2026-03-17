import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { EmergencyCallout } from '@/components/EmergencyCallout';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://etmtrafficmanagement.co.uk'),
  title: {
    default: 'ETM Traffic Management | Professional Traffic Management Services UK',
    template: '%s | ETM Traffic Management'
  },
  description: 'ETM Traffic Management delivers safe, efficient and fully compliant traffic management solutions across the UK. Supporting utilities, infrastructure, local authorities and contractors.',
  keywords: ['traffic management company UK', 'traffic management services', 'traffic management contractor', 'temporary traffic management', 'planned works traffic management', 'emergency traffic management', 'utility traffic management', 'infrastructure traffic management', 'Chapter 8 traffic management'],
  authors: [{ name: 'ETM Traffic Management' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://etmtrafficmanagement.co.uk',
    siteName: 'ETM Traffic Management',
    title: 'ETM Traffic Management | Professional Traffic Management Services UK',
    description: 'Safe, efficient and fully compliant traffic management solutions across the UK.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ETM Traffic Management | Professional Traffic Management Services UK',
    description: 'Safe, efficient and fully compliant traffic management solutions across the UK.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        <EmergencyCallout />
        {children}
      </body>
    </html>
  );
}

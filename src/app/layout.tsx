import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import WhatWeOffer from '@/components/WhatWeOffer'
import HowItWorks from '@/components/HowItWorks'
import WhoWeServe from '@/components/WhoWeServe'
import WhyWorkWithUs from '@/components/WhyWorkWithUs'
import LetsTalk from '@/components/LetsTalk'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Baobab Frontiers - Premium Maize Supply | All Year Round',
  description: 'Leading maize supplier in Ghana. Premium quality maize for food processors, feed producers, and exporters. Reliable supply, competitive pricing, and exceptional service.',
  keywords: 'maize supply, Ghana maize, food processors, feed producers, maize exporters, premium maize, yellow maize, corn supply, agricultural products',
  authors: [{ name: 'Baobab Frontiers' }],
  creator: 'Baobab Frontiers',
  publisher: 'Baobab Frontiers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://baobabfrontiers.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Baobab Frontiers - Premium Maize Supply | All Year Round',
    description: 'Leading maize supplier in Ghana. Premium quality maize for food processors, feed producers, and exporters. Reliable supply, competitive pricing, and exceptional service.',
    url: 'https://baobabfrontiers.com',
    siteName: 'Baobab Frontiers',
    images: [
      {
        url: '/Quality Maize.png',
        width: 1200,
        height: 630,
        alt: 'Baobab Frontiers Premium Maize',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baobab Frontiers - Premium Maize Supply | All Year Round',
    description: 'Leading maize supplier in Ghana. Premium quality maize for food processors, feed producers, and exporters.',
    images: ['/Quality Maize.png'],
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
  verification: {
    google: 'your-google-verification-code', // Replace with your actual verification code
  },
}

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#007628" />
        <meta name="msapplication-TileColor" content="#007628" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Baobab Frontiers" />
        <meta name="application-name" content="Baobab Frontiers" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <StructuredData />
        <Header />
        <main>
          <HeroSection />
          <WhatWeOffer />
          <HowItWorks />
          <WhoWeServe />
          <WhyWorkWithUs />
          <LetsTalk />
        </main>
        <Footer />
      </body>
    </html>
  )
}

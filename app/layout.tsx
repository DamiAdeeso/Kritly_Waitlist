import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kritly - Join the Waitlist | Social Media Review Platform',
  description: 'Join Kritly waitlist - A social media based review centric platform where you can review places, social media accounts, Kritly accounts, take polls, and share special short video experiences called Story Times.',
  keywords: 'Kritly, social media reviews, review platform, waitlist, story times, polls, social media accounts',
  authors: [{ name: 'Kritly' }],
  openGraph: {
    title: 'Kritly - Join the Waitlist',
    description: 'A social media based review centric platform where you can review places, social media accounts, and share Story Times.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Kritly',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kritly - Join the Waitlist',
    description: 'A social media based review centric platform where you can review places, social media accounts, and share Story Times.',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#762FE0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Kritly',
              description: 'A social media based review centric platform',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kritly.com',
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}






import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { COMPANY, SITE_URL } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const description =
  "Kritly is an AI customer support and sales platform for merchants. Kritly's AI agent answers your customers on WhatsApp, Instagram and your website, takes orders and payments inside the chat, and hands off to your team when a human is needed."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Kritly — Sell and support customers in every chat',
    template: '%s · Kritly',
  },
  description,
  keywords: [
    'Kritly',
    'AI customer support',
    'WhatsApp commerce',
    'Instagram DM sales',
    'conversational commerce',
    'AI sales agent',
    'shared inbox',
    'chat checkout',
  ],
  authors: [{ name: COMPANY.legalName }],
  openGraph: {
    title: 'Kritly — Sell and support customers in every chat',
    description,
    type: 'website',
    locale: 'en_US',
    siteName: 'Kritly',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kritly — Sell and support customers in every chat',
    description,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/apple-touch-icon.png',
  },
  manifest: '/images/site.webmanifest',
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0B0716',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: COMPANY.legalName,
              url: SITE_URL,
              logo: `${SITE_URL}/images/logo.png`,
              email: COMPANY.email,
              telephone: COMPANY.phone,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '8 The Green',
                addressLocality: 'Dover',
                addressRegion: 'DE',
                postalCode: '19901',
                addressCountry: 'US',
              },
              sameAs: [COMPANY.linkedin],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}

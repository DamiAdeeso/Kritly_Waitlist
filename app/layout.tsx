import type { Metadata, Viewport } from 'next'
import { Archivo, Inter, Instrument_Sans, Poppins } from 'next/font/google'
import { COMPANY, SITE_URL } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
// Landing page: wide Archivo for headlines, Instrument Sans for text.
const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo', display: 'swap' })
const instrument = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument', display: 'swap' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const TITLE = 'Kritly — Your DMs sell, even while you sleep'
const description =
  'Kritly is an AI sales and support agent for merchants. It answers every “How much?” in seconds, takes the order, collects payment with a secure link, and brings you in only when a human is needed, across WhatsApp, Instagram and your website.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
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
    title: TITLE,
    description,
    type: 'website',
    locale: 'en_US',
    siteName: 'Kritly',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable} ${archivo.variable} ${instrument.variable}`}>
      <body className="font-sans">
        {/* Apply a saved light/dark choice before first paint (homepage theme toggle). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('kritly-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
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

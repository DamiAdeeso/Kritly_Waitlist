import type { MetadataRoute } from 'next'

function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kritly.com'
  return raw.replace(/\/$/, '')
}

export default function robots(): MetadataRoute.Robots {
  const base = siteUrl()
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base.replace(/^https?:\/\//, ''),
  }
}

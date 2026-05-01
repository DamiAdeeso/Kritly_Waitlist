import type { MetadataRoute } from 'next'

function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kritly.com'
  return raw.replace(/\/$/, '')
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl()
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}

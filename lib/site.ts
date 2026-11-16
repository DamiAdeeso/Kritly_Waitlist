/**
 * Company + legal details shown across the site.
 * The footer must match Meta Business Info character for character.
 */
export const COMPANY = {
  legalName: 'Kritly Inc.',
  address: '8 The Green, Dover, Delaware 19901, United States',
  phone: '+1 302 385 8001',
  phoneHref: 'tel:+13023858001',
  email: 'support@kritly.com',
  privacyEmail: 'support@kritly.com',
  linkedin: 'https://www.linkedin.com/company/kritly-inc',
} as const

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kritly.com'

/** Shown on /privacy, /terms and /data-deletion. Update when the text changes. */
export const LEGAL_EFFECTIVE_DATE = 'November 16, 2026'

/** Days to complete a verified deletion request. Deletion is handled by our team on request. */
export const DELETION_DAYS = 30

/**
 * Channels, as they are in the product today.
 * Live = has a messaging adapter registered in core-api.
 */
export const CHANNELS = [
  { name: 'WhatsApp', status: 'live' },
  { name: 'Instagram', status: 'live' },
  { name: 'Web chat', status: 'live' },
  { name: 'Messenger', status: 'soon' },
  { name: 'TikTok', status: 'soon' },
] as const

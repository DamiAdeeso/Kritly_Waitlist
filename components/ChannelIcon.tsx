import { BRAND_PATHS } from './brand-paths'
import { MessageCircle } from 'lucide-react'
import type { ChannelKey } from '@/lib/site'

const BRAND = {
  whatsapp: { path: BRAND_PATHS.whatsapp, bg: '#25D366' },
  instagram: {
    path: BRAND_PATHS.instagram,
    bg: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
  },
  messenger: { path: BRAND_PATHS.messenger, bg: 'linear-gradient(45deg, #0099FF, #A033FF 60%, #FF5280 90%, #FF7061)' },
  tiktok: { path: BRAND_PATHS.tiktok, bg: '#000000' },
} as const

/** Channel mark as a white glyph on its brand-coloured tile. */
export function ChannelIcon({ channel, size = 28 }: { channel: ChannelKey; size?: number }) {
  const glyph = Math.round(size * 0.58)
  const tile = { width: size, height: size }

  if (channel === 'webchat') {
    return (
      <span aria-hidden style={tile} className="inline-flex shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white">
        <MessageCircle style={{ width: glyph, height: glyph }} strokeWidth={2.4} />
      </span>
    )
  }

  const b = BRAND[channel]
  return (
    <span aria-hidden style={{ ...tile, background: b.bg }} className="inline-flex shrink-0 items-center justify-center rounded-lg">
      <svg viewBox="0 0 24 24" width={glyph} height={glyph} fill="#fff">
        <path d={b.path} />
      </svg>
    </span>
  )
}

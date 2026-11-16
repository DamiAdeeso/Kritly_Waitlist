import { BRAND_PATHS } from '../brand-paths'

export type BadgeChannel = 'instagram' | 'whatsapp' | 'web'

const META: Record<BadgeChannel, { label: string; bg: string }> = {
  instagram: { label: 'Instagram', bg: 'bg-k-ig' },
  whatsapp: { label: 'WhatsApp', bg: 'bg-k-wa' },
  web: { label: 'Web chat', bg: 'bg-k-web' },
}

function Glyph({ channel, size }: { channel: BadgeChannel; size: number }) {
  if (channel === 'web') {
    return (
      <svg aria-hidden width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    )
  }
  return (
    <svg aria-hidden width={size} height={size} viewBox="0 0 24 24" fill="#fff">
      <path d={BRAND_PATHS[channel]} />
    </svg>
  )
}

/** Small channel mark pinned to an avatar's corner. */
export function AvatarBadge({ channel }: { channel: BadgeChannel }) {
  return (
    <span
      role="img"
      aria-label={META[channel].label}
      className={`absolute -bottom-[3px] -right-[3px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-k-surface ${META[channel].bg}`}
    >
      <Glyph channel={channel} size={8} />
    </span>
  )
}

/** Filter chip used in the inbox sidebar. */
export function ChannelChip({ channel }: { channel: BadgeChannel }) {
  const label = channel === 'web' ? 'Web' : META[channel].label
  return (
    <span className="inline-flex items-center gap-[5px] rounded-full border border-k-line bg-k-surface py-1 pl-[5px] pr-[9px] text-xs font-semibold text-k-body">
      <span aria-hidden className={`flex h-3.5 w-3.5 items-center justify-center rounded-full ${META[channel].bg}`}>
        <Glyph channel={channel} size={8} />
      </span>
      {label}
    </span>
  )
}

export function Avatar({ initials, channel }: { initials: string; channel: BadgeChannel }) {
  return (
    <div className="relative flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-k-tint text-xs font-bold text-k-link">
      {initials}
      <AvatarBadge channel={channel} />
    </div>
  )
}

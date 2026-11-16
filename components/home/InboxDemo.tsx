'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Avatar, ChannelChip } from './ChannelBadge'

/* Demo conversation. Example content, not real customer data. */
type Step = { k: 'c' | 'a'; text: string } | { k: 'card' | 'pay' | 'ok' | 'hand' }

const SCRIPT: Step[] = [
  { k: 'c', text: 'Hi! Do you have the linen two-piece in size M?' },
  { k: 'a', text: 'Yes, it’s in stock in M. Want me to add it to your cart?' },
  { k: 'card' },
  { k: 'c', text: 'Yes please. Delivery to Lekki' },
  { k: 'pay' },
  { k: 'ok' },
  { k: 'c', text: 'Can I talk to someone about a custom size?' },
  { k: 'hand' },
]
const TICK_MS = 1500
const AI_KINDS = new Set(['a', 'card', 'pay'])

function Message({ m }: { m: Step }) {
  switch (m.k) {
    case 'c':
      return <div className="k-pop max-w-[85%] self-start rounded-2xl rounded-bl-md bg-k-bubble px-3.5 py-2.5 text-k-ink">{m.text}</div>
    case 'a':
      return <div className="k-pop max-w-[85%] self-end rounded-2xl rounded-br-md bg-k-purple px-3.5 py-2.5 text-white">{m.text}</div>
    case 'card':
      return (
        <div className="k-pop w-[230px] max-w-[85%] self-end overflow-hidden rounded-2xl border border-k-line bg-k-surface">
          <div aria-hidden className="relative flex h-20 items-center justify-center bg-[#EADFCB]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8A6A3D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3 4 6l2 4 2-1v12h8V9l2 1 2-4-4-3c0 1.7-1.8 3-4 3S8 4.7 8 3z" />
            </svg>
            <span className="absolute right-2 top-2 -rotate-3 rounded-md bg-k-hi px-2 py-0.5 text-xs font-bold text-k-onhi">₦28,500</span>
          </div>
          <div className="px-3 py-2.5">
            <div className="text-sm font-semibold text-k-ink">Linen Two-Piece Set</div>
            <div className="text-xs text-k-muted">Size M · Sand · In stock</div>
          </div>
        </div>
      )
    case 'pay':
      return <div className="k-pop self-end rounded-xl bg-k-hi px-4 py-2.5 font-semibold text-k-onhi">Pay ₦31,000 securely →</div>
    case 'ok':
      return (
        <div className="k-pop self-center rounded-full bg-k-okbg px-3 py-1 text-xs font-semibold text-k-ok">
          ✓ Payment received · Order confirmed
        </div>
      )
    case 'hand':
      return (
        <div className="k-pop self-center rounded-full bg-k-warmbg px-3 py-1 text-xs font-semibold text-k-warm">
          Handed to Funmi with the full chat
        </div>
      )
  }
}

const THREADS = [
  { initials: 'TS', name: 'Tolu S.', channel: 'whatsapp', preview: 'How much is delivery to Abuja?', state: 'Answered by Kritly', tone: 'text-k-muted' },
  { initials: 'WV', name: 'Web visitor', channel: 'web', preview: 'Where’s my order?', state: 'Answered by Kritly', tone: 'text-k-muted' },
  { initials: 'KO', name: 'Kemi O.', channel: 'instagram', preview: 'Bulk order for an event', state: 'With Funmi', tone: 'text-k-warm' },
] as const

export function InboxDemo() {
  // Start with the whole conversation visible: no layout shift, and it is the static view.
  const [step, setStep] = useState(SCRIPT.length)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  const reduced = useRef(false)

  const start = useCallback(() => {
    if (timer.current) clearInterval(timer.current)
    timer.current = setInterval(() => {
      setStep((s) => (s + 1 > SCRIPT.length + 3 ? 1 : s + 1))
    }, TICK_MS)
  }, [])

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduced.current) start()
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [start])

  const replay = () => {
    if (reduced.current) return setStep(SCRIPT.length)
    setStep(1)
    start()
  }

  const shown = Math.min(step, SCRIPT.length)
  const next = SCRIPT[shown]
  const typing = !!next && AI_KINDS.has(next.k)
  const paid = shown >= 6
  const status = shown >= 8 ? 'Paid · with Funmi' : paid ? 'Paid' : shown >= 5 ? 'Awaiting payment' : 'Cart open'

  return (
    <figure className="m-0 overflow-hidden rounded-3xl border border-k-line bg-k-surface shadow-[0_24px_60px_-30px_rgba(64,0,140,0.35)]">
      <figcaption className="flex items-center justify-between gap-3 border-b border-k-line bg-k-paper px-4 py-3 text-xs text-k-muted">
        <span className="truncate">
          <span className="font-semibold text-k-ink">Adunni Studio</span> · Kritly inbox · 11:42 PM
        </span>
        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-k-surface px-2.5 py-1 font-semibold text-k-link">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-k-wa" />
          AI on
        </span>
      </figcaption>

      <div className="flex text-left">
        {/* Conversation list: from lg */}
        <div className="hidden w-[260px] shrink-0 flex-col border-r border-k-line lg:flex">
          <div className="flex flex-wrap gap-1.5 border-b border-k-line p-3">
            <span className="rounded-full bg-k-night px-2.5 py-1 text-xs font-semibold text-white">All</span>
            <ChannelChip channel="instagram" />
            <ChannelChip channel="whatsapp" />
            <ChannelChip channel="web" />
          </div>
          <div className="flex items-start gap-3 border-l-[3px] border-k-link bg-k-tint px-3 py-3">
            <Avatar initials="BA" channel="instagram" />
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold text-k-ink">Bisi A.</div>
              <div className="truncate text-[13px] text-k-body">Linen two-piece in M?</div>
              <div className="text-[11px] font-semibold text-k-link">Kritly is replying</div>
            </div>
          </div>
          {THREADS.map((t) => (
            <div key={t.name} className="flex items-start gap-3 border-b border-k-line px-3 py-3 last:border-b-0">
              <Avatar initials={t.initials} channel={t.channel} />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-k-ink">{t.name}</div>
                <div className="truncate text-[13px] text-k-body">{t.preview}</div>
                <div className={`text-[11px] font-semibold ${t.tone}`}>{t.state}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Thread: always */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-2.5 border-b border-k-line px-4 py-3">
            <Avatar initials="BA" channel="instagram" />
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold text-k-ink">Bisi A.</div>
              <div className="truncate text-xs text-k-muted">Instagram DM</div>
            </div>
            <button
              type="button"
              onClick={replay}
              className="h-9 shrink-0 rounded-lg border border-k-line bg-k-surface px-3 text-xs font-semibold text-k-body hover:border-k-link hover:text-k-link"
            >
              ↻ Replay
            </button>
          </div>
          <div className="flex h-[440px] flex-col justify-end gap-2.5 overflow-hidden p-4 text-sm sm:h-[460px]" aria-live="polite">
            {SCRIPT.slice(0, shown).map((m, i) => (
              <Message key={i} m={m} />
            ))}
            {typing && (
              <div aria-label="Kritly is typing" className="flex gap-1 self-end rounded-2xl bg-k-bubble px-3.5 py-3">
                <span className="k-dot" />
                <span className="k-dot" />
                <span className="k-dot" />
              </div>
            )}
          </div>
        </div>

        {/* Order panel: from xl */}
        <div className="hidden w-[260px] shrink-0 flex-col gap-4 border-l border-k-line bg-k-paper p-4 xl:flex">
          <div className="text-sm font-semibold text-k-ink">Order</div>
          <div className="flex flex-col gap-2 rounded-2xl border border-k-line bg-k-surface p-3.5 text-[13px] text-k-ink">
            <div className="flex justify-between gap-2">
              <span className="text-k-body">Linen Two-Piece · M</span>
              <span>₦28,500</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-k-body">Delivery · Lekki</span>
              <span>₦2,500</span>
            </div>
            <div className="h-px bg-k-line" />
            <div className="flex justify-between text-[15px] font-bold">
              <span>Total</span>
              <span>₦31,000</span>
            </div>
          </div>
          <dl className="m-0 flex flex-col gap-2.5 text-[13px]">
            <div className="flex justify-between gap-2">
              <dt className="text-k-body">Status</dt>
              <dd className={`m-0 font-semibold ${paid ? 'text-k-ok' : 'text-k-warm'}`}>{status}</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-k-body">Payment</dt>
              <dd className="m-0 text-k-ink">Paystack link</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-k-body">You were</dt>
              <dd className="m-0 text-k-ink">Asleep</dd>
            </div>
          </dl>
          <div className="mt-auto rounded-2xl border border-k-line bg-k-surface p-3.5 text-[13px]">
            <div className="font-semibold text-k-ink">Answered from</div>
            <div className="text-k-body">Your catalogue, delivery zones and size guide</div>
          </div>
        </div>
      </div>
    </figure>
  )
}

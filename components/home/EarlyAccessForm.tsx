'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'joined' | 'error'

/**
 * Email-only waitlist form. Posts to /api/waitlist (Google Apps Script backend).
 * No "Copy invite link": the waitlist backend has no per-user referral links.
 * Mobile first: stacked on phones, one row from `sm` up.
 */
export function EarlyAccessForm({ id, tone = 'light' }: { id: string; tone?: 'light' | 'yellow' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setStatus('joined')
        setEmail('')
      } else {
        setStatus('error')
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setError('Network error. Check your connection and try again.')
    }
  }

  if (status === 'joined') {
    return (
      <div role="status" className="k-pop flex w-full max-w-[520px] items-start gap-3 rounded-2xl border border-k-line bg-white p-4 text-left text-k-ink">
        <span aria-hidden className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-k-purple font-bold text-white">
          ✓
        </span>
        <div className="min-w-0">
          <p className="m-0 font-semibold">You’re on the list.</p>
          <p className="m-0 text-sm text-k-body">We’ll email you when your spot opens. Founding merchants go first.</p>
        </div>
      </div>
    )
  }

  const button =
    tone === 'yellow'
      ? 'bg-k-ink text-white hover:bg-black'
      : 'bg-k-purple text-white hover:bg-k-purple-hover'

  return (
    <div className="w-full max-w-[520px]">
      <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={id} className="sr-only">
          Work email
        </label>
        <input
          id={id}
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="you@yourbusiness.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 w-full min-w-0 rounded-xl border border-k-line bg-white px-4 text-base text-k-ink outline-none transition focus:border-k-purple sm:flex-1"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`h-12 shrink-0 rounded-xl px-5 font-semibold transition-colors disabled:cursor-wait disabled:opacity-70 ${button}`}
        >
          {status === 'loading' ? 'Joining…' : 'Get early access'}
        </button>
      </form>
      {status === 'error' && (
        <p role="alert" className="mt-2 text-left text-sm font-medium text-[#B42318]">
          {error}
        </p>
      )}
    </div>
  )
}

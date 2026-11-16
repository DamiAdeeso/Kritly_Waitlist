'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Loader2 } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function WaitlistForm({ id = 'waitlist-form' }: { id?: string }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-2xl border border-wa/40 bg-wa/10 p-5 text-left text-white"
      >
        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-wa text-ink">
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
        <div>
          <p className="font-semibold">You&apos;re on the list.</p>
          <p className="mt-1 text-sm text-white/70">
            We&apos;re opening Kritly to merchants in batches. We&apos;ll email you when your spot is ready.
          </p>
        </div>
      </div>
    )
  }

  const field =
    'h-12 w-full rounded-full border border-white/15 bg-white/[0.06] px-5 text-[15px] text-white placeholder:text-white/40 outline-none transition focus:border-brand-300 focus:bg-white/[0.09] focus:ring-2 focus:ring-brand-400/40'

  return (
    <form onSubmit={onSubmit} aria-describedby={`${id}-note`} className="w-full">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor={`${id}-name`}>
          Your name
        </label>
        <input
          id={`${id}-name`}
          className={field}
          placeholder="Your name"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="sr-only" htmlFor={`${id}-email`}>
          Work email
        </label>
        <input
          id={`${id}-email`}
          type="email"
          className={field}
          placeholder="you@yourbusiness.com"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn-primary h-12 py-0 sm:col-span-2 sm:justify-self-end" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Joining…
            </>
          ) : (
            <>
              Join the waitlist <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      {status === 'error' && (
        <p role="alert" className="mt-3 text-sm text-red-300">
          {message}
        </p>
      )}
      <p id={`${id}-note`} className="mt-3 text-xs text-white/50">
        We&apos;ll only email you about Kritly early access. See our{' '}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-white">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  )
}

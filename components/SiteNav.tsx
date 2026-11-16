'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/#how', label: 'How it works' },
  { href: '/#features', label: 'Features' },
  { href: '/#offer', label: 'Early access' },
  { href: '/#faq', label: 'FAQ' },
]

export function SiteNav({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dark = tone === 'dark'
  const shell = dark
    ? scrolled || open
      ? 'bg-ink/80 border-white/10 backdrop-blur-xl'
      : 'bg-transparent border-transparent'
    : 'bg-white/85 border-ink/10 backdrop-blur-xl'
  const text = dark ? 'text-white' : 'text-ink'
  const muted = dark ? 'text-white/70 hover:text-white' : 'text-ink/70 hover:text-ink'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${shell}`}>
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <Link href="/" className={`flex items-center gap-2.5 ${text}`} onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="" width={30} height={31} priority />
          <span className="font-display text-xl font-bold tracking-tight">Kritly</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-sm font-medium transition-colors ${muted}`}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/#waitlist"
            className="hidden rounded-full bg-sun px-4 py-2 text-sm font-semibold text-ink transition hover:bg-sun-400 sm:inline-flex"
          >
            Get early access
          </Link>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden ${text}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className={`border-t md:hidden ${dark ? 'border-white/10' : 'border-ink/10'}`}>
          <div className="container-x flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-base font-medium ${muted}`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/#waitlist" onClick={() => setOpen(false)} className="btn-primary mt-2 mb-2">
              Get early access
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

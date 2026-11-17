'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const KEY = 'kritly-theme'

/** Reads the theme the page is showing: an explicit choice, else the system setting. */
function currentTheme(): 'light' | 'dark' {
  const set = document.documentElement.dataset.theme
  if (set === 'light' || set === 'dark') return set
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Light/dark switch for the footer (always on a dark background). Follows the system until the visitor picks one; the pick is
 * remembered in this browser only. The pre-paint script in layout.tsx applies it.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  useEffect(() => {
    setTheme(currentTheme())
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setTheme(currentTheme())
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  function toggle() {
    const next = currentTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(KEY, next)
    } catch {
      /* storage blocked: the choice lasts for this visit only */
    }
    setTheme(next)
  }

  const dark = theme === 'dark'
  const label = dark ? 'Light mode' : 'Dark mode'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/20 px-3.5 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
    >
      {/* Icon and label render after mount so server and client markup match. */}
      {theme && (dark ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />)}
      <span className="min-w-[5.5rem] text-left">{theme ? label : ''}</span>
    </button>
  )
}

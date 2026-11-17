'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Counts a figure like "14M", "56%" or "<10 min" up from zero when it scrolls into view.
 * Server render and reduced motion show the final value. The final value also reserves
 * the width, so counting never shifts the layout.
 */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)
  const prefix = match?.[1] ?? ''
  const target = match ? Number(match[2]) : 0
  const suffix = match?.[3] ?? ''
  const decimals = match?.[2].includes('.') ? match[2].split('.')[1].length : 0

  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState<number | null>(null) // null = show final value

  useEffect(() => {
    const el = ref.current
    if (!el || !match) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    setShown(0)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          setShown(target * eased)
          if (t < 1) raf = requestAnimationFrame(tick)
          else setShown(null)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration])

  const display = shown === null ? value : `${prefix}${shown.toFixed(decimals)}${suffix}`

  return (
    <span ref={ref} className="relative inline-block">
      <span aria-hidden className="invisible">
        {value}
      </span>
      <span aria-hidden className="absolute inset-0">
        {display}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  )
}

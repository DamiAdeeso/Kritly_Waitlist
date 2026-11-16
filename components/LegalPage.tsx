import { SiteNav } from '@/components/SiteNav'
import { SiteFooter } from '@/components/SiteFooter'
import { LEGAL_EFFECTIVE_DATE } from '@/lib/site'

export function LegalPage({
  title,
  intro,
  showEffectiveDate = true,
  children,
}: {
  title: string
  intro?: React.ReactNode
  showEffectiveDate?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <SiteNav tone="light" />
      <main className="bg-white pt-28 pb-24">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">{title}</h1>
          {showEffectiveDate && (
            <p className="mt-3 text-sm text-ink/50">Effective date: {LEGAL_EFFECTIVE_DATE}</p>
          )}
          {intro && <div className="mt-8 text-lg leading-8 text-ink/75">{intro}</div>}
          <div className="prose-legal mt-6">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

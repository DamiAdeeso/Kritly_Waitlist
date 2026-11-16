import Image from 'next/image'
import Link from 'next/link'
import { COMPANY } from '@/lib/site'

/**
 * Footer text must match Meta Business Info character for character.
 * The contact email is plain text (not obfuscated) so reviewers can read it.
 */
export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/images/logo.png" alt="" width={30} height={31} />
              <span className="font-display text-xl font-bold">Kritly</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-white/60">
              The AI agent that sells and supports your customers in every chat.
            </p>
          </div>

          <address className="not-italic text-sm leading-7 text-white/80">
            <p className="font-semibold text-white">{COMPANY.legalName}</p>
            <p>{COMPANY.address}</p>
            <p>
              <a href={COMPANY.phoneHref} className="hover:text-white">
                {COMPANY.phone}
              </a>
              {' · '}
              <span>{COMPANY.email}</span>
            </p>
          </address>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {COMPANY.legalName} All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-1 gap-y-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span aria-hidden>·</span>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <span aria-hidden>·</span>
            <Link href="/data-deletion" className="hover:text-white">
              Data Deletion
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

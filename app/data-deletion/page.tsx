import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/LegalPage'
import { COMPANY, DELETION_DAYS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Data Deletion',
  description: 'How to delete your data from Kritly.',
  alternates: { canonical: '/data-deletion' },
}

/**
 * Used as the "Data deletion instructions URL" in the Meta app settings.
 * Keep this matched to what the product actually does: deletion is handled by our team on request
 * (there is no self-serve delete-account button yet).
 */
export default function DataDeletionPage() {
  return (
    <LegalPage
      title="How to delete your data from Kritly"
      intro={<p>You can stop Kritly accessing your accounts at any time, and ask us to delete your data.</p>}
    >
      <h2>If you are a merchant</h2>
      <ol>
        <li>
          <strong>Stop access to a channel.</strong> Disconnect it in Kritly under <strong>Channels</strong>. You can
          also remove Kritly from the platform itself: in Meta Business Settings under Integrations or Apps, or in your
          Instagram settings under Apps and websites.
        </li>
        <li>
          <strong>Delete your data.</strong> Email <strong>{COMPANY.privacyEmail}</strong> from your account email with
          the subject &ldquo;Delete my data&rdquo;. Tell us whether you want one channel&rsquo;s data deleted or your
          whole account closed.
        </li>
        <li>
          <strong>We confirm and delete.</strong> We verify the request, then delete your account, connected channel
          data and conversation history within {DELETION_DAYS} days, and confirm by email. We keep only records we are
          legally required to retain, such as invoices.
        </li>
      </ol>

      <h2>If you messaged a business that uses Kritly</h2>
      <p>
        Your conversation belongs to that business. You can ask the business to delete it, or email{' '}
        <strong>{COMPANY.privacyEmail}</strong> with:
      </p>
      <ul>
        <li>the business name;</li>
        <li>the platform you used (WhatsApp, Instagram or the business&rsquo;s website chat);</li>
        <li>your username, phone number or email.</li>
      </ul>
      <p>
        We will confirm the request with the business and delete the data within {DELETION_DAYS} days.
      </p>

      <h2>Questions</h2>
      <p>
        {COMPANY.privacyEmail} · {COMPANY.legalName}, {COMPANY.address}. See also our{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  )
}

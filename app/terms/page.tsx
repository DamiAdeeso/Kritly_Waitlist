import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/LegalPage'
import { COMPANY } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern use of Kritly.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={
        <p>
          These terms govern your use of Kritly, a customer messaging and sales platform provided by{' '}
          {COMPANY.legalName} (&ldquo;Kritly&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By creating an account or
          connecting a channel, you (&ldquo;Merchant&rdquo;) agree to them.
        </p>
      }
    >
      <h2>1. The service</h2>
      <p>
        Kritly lets merchants connect messaging channels (currently WhatsApp, Instagram and web chat), manage
        conversations in one inbox, and use an AI assistant to reply to customers, take orders and payments, and
        answer questions about order status.
      </p>

      <h2>2. Your account</h2>
      <p>
        You must be a business or acting for one, and at least 18. You are responsible for the accuracy of your
        account details, for keeping your login secure, and for everything done under your account, including by
        team members you invite.
      </p>

      <h2>3. Connected channels and platform rules</h2>
      <p>
        When you connect a channel, you authorise Kritly to access it through the platform&rsquo;s official API to
        send and receive messages for you. You must follow the rules of each platform, including the WhatsApp
        Business Messaging Policy, Meta&rsquo;s Commerce and Platform policies, and, where applicable, TikTok&rsquo;s
        Business Messaging policies and Community Guidelines. A platform may limit or suspend your account under its
        own rules, and Kritly is not responsible for those decisions.
      </p>

      <h2>4. Your content and your customers</h2>
      <p>
        You own your business content and your customer conversations. You give Kritly a limited licence to process
        them only to provide the service. You are responsible for having a lawful basis to message your customers,
        for honouring opt-outs, and for the accuracy of the product, price and policy information you give the AI.
      </p>

      <h2>5. AI replies</h2>
      <p>
        AI replies are generated from your content and may occasionally be wrong. You are responsible for reviewing
        your AI and handoff settings and for the commitments your business makes to customers. You can take over any
        conversation at any time.
      </p>

      <h2>6. Payments in chat</h2>
      <p>
        Customer payments are processed by third-party providers (such as Paystack, Flutterwave or Stripe) under
        their own terms. You are responsible for your products, prices, refunds and fulfilment.
      </p>

      <h2>7. Acceptable use</h2>
      <p>
        You may not use Kritly to send spam or unsolicited bulk messages, sell prohibited goods, mislead or harass
        people, collect data you are not entitled to, or break any law or platform policy. We may suspend accounts
        that do.
      </p>

      <h2>8. Fees</h2>
      <p>
        Plans and prices are shown in the app when you subscribe. Platform messaging fees charged by Meta or other
        platforms are passed through or billed to you as stated in your plan. Subscriptions renew until cancelled;
        cancellation takes effect at the end of the current billing period.
      </p>

      <h2>9. Privacy</h2>
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains how we handle personal information. Where we process
        your customers&rsquo; data for you, we do so only on your instructions.
      </p>

      <h2>10. Ending the service</h2>
      <p>
        You can disconnect channels or ask us to close your account at any time. We may end or suspend the service
        for breach of these terms, with notice where practical. On closure we delete your data as described in the
        Privacy Policy and on our <Link href="/data-deletion">Data Deletion</Link> page.
      </p>

      <h2>11. Disclaimers and liability</h2>
      <p>
        The service is provided &ldquo;as is&rdquo;. To the extent the law allows, Kritly is not liable for indirect
        or consequential losses, and our total liability is limited to the fees you paid us in the 12 months before
        the claim.
      </p>

      <h2>12. Changes</h2>
      <p>We may update these terms and will notify merchants of material changes by email or in the app.</p>

      <h2>13. Governing law and contact</h2>
      <p>
        These terms are governed by the laws of the State of Delaware, United States. Contact: {COMPANY.legalName},{' '}
        {COMPANY.address} · {COMPANY.email}.
      </p>
    </LegalPage>
  )
}

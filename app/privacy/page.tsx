import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/LegalPage'
import { COMPANY, DELETION_DAYS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Kritly Inc. collects, uses and protects personal information.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={
        <p>
          This policy explains how {COMPANY.legalName} (&ldquo;Kritly&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
          collects, uses and protects personal information when merchants use our platform, when their customers
          message them through it, and when people visit this website.
        </p>
      }
    >
      <h2>1. Who we are</h2>
      <p>
        {COMPANY.legalName} is a Delaware corporation at {COMPANY.address}. Our team operates from Lagos, Nigeria.
        Contact: {COMPANY.privacyEmail}.
      </p>

      <h2>2. Our role</h2>
      <ul>
        <li>
          For merchant account information, waitlist sign-ups and website visitors, Kritly is the controller.
        </li>
        <li>
          For messages and information about a merchant&rsquo;s customers, the merchant is the controller. Kritly
          processes that information on the merchant&rsquo;s behalf and under the merchant&rsquo;s instructions.
        </li>
      </ul>

      <h2>3. Information we collect</h2>
      <ul>
        <li>
          <strong>Merchant account information:</strong> name, business name, email, phone number, billing details
          and login information.
        </li>
        <li>
          <strong>Connected channel information:</strong> when a merchant connects WhatsApp or Instagram, we receive
          the account&rsquo;s ID, name, profile picture and access tokens through the official platform APIs, as
          authorised by the merchant. The same applies to other channels, such as Facebook Messenger or TikTok, once
          we support them.
        </li>
        <li>
          <strong>Conversation data:</strong> messages, images and files exchanged between a merchant and their
          customers, plus the customer&rsquo;s platform username or phone number and public profile name. On a
          merchant&rsquo;s website chat, this may include details the customer types in, such as a name, email or
          phone number.
        </li>
        <li>
          <strong>Orders and payments:</strong> carts, orders, delivery details the customer provides, and payment
          status. Card and bank details are entered on the payment provider&rsquo;s page; we do not receive or store
          full card numbers.
        </li>
        <li>
          <strong>Business content:</strong> product catalogues, prices, policies, knowledge articles and order
          information that merchants add or sync from stores such as Shopify or WooCommerce.
        </li>
        <li>
          <strong>Website and usage data:</strong> pages visited, device and browser type, IP address, and the name
          and email you give us when you join the waitlist.
        </li>
      </ul>

      <h2>4. How we use information</h2>
      <ul>
        <li>To deliver and display conversations in the merchant&rsquo;s inbox.</li>
        <li>
          To generate AI replies and reply suggestions for the merchant, based on the conversation and the
          merchant&rsquo;s business content.
        </li>
        <li>To process carts, orders, payments and order-status questions inside chats.</li>
        <li>To show merchants analytics about their own conversations and sales.</li>
        <li>To provide support, keep the service secure, prevent abuse and meet legal obligations.</li>
        <li>To email waitlist members about early access to Kritly.</li>
      </ul>
      <p>
        We do not sell personal information, use conversation data for advertising, or contact a merchant&rsquo;s
        customers for our own purposes.
      </p>

      <h2>5. AI processing</h2>
      <p>
        Kritly uses OpenAI to generate replies and to index a merchant&rsquo;s content for search. Conversation
        content and business content are sent to OpenAI only to produce results for that merchant. Under
        OpenAI&rsquo;s API terms, this data is not used to train its models. We do not use one merchant&rsquo;s
        conversations to serve another merchant.
      </p>

      <h2>6. Data from Meta and TikTok</h2>
      <p>
        We access data from Meta (WhatsApp and Instagram, and Messenger once supported) and, once supported, TikTok
        only through their official APIs, only for accounts whose owners have authorised Kritly, and only to provide
        our messaging service. Our use of this data follows the Meta Platform Terms, the TikTok API for Business
        terms, and each platform&rsquo;s developer policies. We do not share it with data brokers or use it to build
        profiles of users.
      </p>

      <h2>7. Sharing</h2>
      <p>We share information only with:</p>
      <ul>
        <li>the merchant who owns the conversation;</li>
        <li>
          service providers that help us run Kritly, bound by contracts to protect it: hosting and databases (Render,
          Neon), file storage (Amazon Web Services), AI (OpenAI), email delivery, and payment processing (Paystack,
          Flutterwave, Stripe);
        </li>
        <li>authorities, when required by law.</li>
      </ul>

      <h2>8. International transfers</h2>
      <p>
        Our systems are hosted in the United States, and media files are stored in the European Union. Our team in
        Nigeria may access data to provide support. We protect data in transit and at rest and limit access to staff
        who need it.
      </p>

      <h2>9. Retention</h2>
      <p>
        We keep conversation data while the merchant&rsquo;s account is active. Media files received from customers
        are deleted automatically after a retention period. When a merchant asks us to delete their data or close
        their account, we delete the related data within {DELETION_DAYS} days of verifying the request, except where
        the law requires us to keep it longer (for example, invoices).
      </p>

      <h2>10. Your rights</h2>
      <p>
        Depending on where you live, including under Nigeria&rsquo;s Data Protection Act 2023, you may ask to access,
        correct or delete your personal information, or object to its processing. If you are a merchant&rsquo;s
        customer, you can contact the merchant directly, or email us and we will pass your request to them. See{' '}
        <Link href="/data-deletion">Data Deletion</Link>.
      </p>

      <h2>11. Security</h2>
      <p>
        We use encryption in transit, access controls and regular reviews to protect data. No system is perfectly
        secure, and we will notify affected merchants and authorities of a breach as the law requires.
      </p>

      <h2>12. Children</h2>
      <p>Kritly is not intended for children under 13, and we do not knowingly collect their information.</p>

      <h2>13. Changes</h2>
      <p>
        We will post any changes on this page and update the effective date. Material changes will be emailed to
        merchants.
      </p>

      <h2>14. Contact</h2>
      <p>
        {COMPANY.legalName}, {COMPANY.address} · {COMPANY.privacyEmail} · {COMPANY.phone}
      </p>
    </LegalPage>
  )
}

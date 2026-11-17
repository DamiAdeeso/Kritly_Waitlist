import Image from 'next/image'
import Link from 'next/link'
import { EarlyAccessForm } from '@/components/home/EarlyAccessForm'
import { InboxDemo } from '@/components/home/InboxDemo'
import { ThemeToggle } from '@/components/home/ThemeToggle'
import { PaymentLogos } from '@/components/home/PaymentLogos'
import { CountUp } from '@/components/home/CountUp'
import { ChannelRow } from '@/components/home/ChannelBadge'
import { COMPANY } from '@/lib/site'

/*
 * Landing page. Mobile first: base styles are for ~360px phones, then sm / md / lg / xl.
 * Product claims are checked against kritly main (channels, payments, handoff, order lookup).
 */

const WRAP = 'mx-auto w-full max-w-[1160px] px-4 sm:px-6'
const SECTION = 'py-16 sm:py-20 lg:py-28'
const H2 = 'k-display m-0 text-[clamp(30px,6.4vw,52px)] leading-[1.02] text-k-ink'

const stats = [
  {
    value: '14M',
    body: 'Nigerian small businesses used WhatsApp, Instagram and Facebook to start and grow in 2025.',
    source: 'Public First for Meta, 2026',
  },
  {
    value: '56%',
    body: 'of Nigerian small businesses that sell online do it only through social media, with no website or store.',
    source: 'GSMA',
  },
  {
    value: '<10 min',
    body: 'is how fast 60% of people expect a reply when they message a business on WhatsApp.',
    source: 'Aurora Inbox, 2026',
  },
]

const beforeAfter = [
  {
    says: '“How much?”',
    when: 'at 11pm',
    today: 'You see it at 7am. They bought from someone else.',
    kritly: 'Price, photo and sizes in seconds, then it asks if they want it.',
  },
  {
    says: '“Send account details”',
    today: 'Screenshots, checking your bank app, chasing “I’ve paid.”',
    kritly: 'A secure Stripe, Paystack or Flutterwave link, from customers anywhere in the world, confirmed right in the chat.',
  },
  {
    says: '“Where’s my order?”',
    today: 'Scrolling old chats to find it, five times a day.',
    kritly: 'The order’s status straight away, after Kritly checks it’s really theirs.',
  },
  {
    says: '“Can you do a custom size?”',
    today: 'Lost under 200 unread messages.',
    kritly: 'Passed to the right person on your team, with the whole chat attached.',
  },
  {
    says: 'DMs on three apps',
    today: 'Instagram on one phone, WhatsApp on another, the website ignored.',
    kritly: 'One shared inbox. You see who’s replying, so nobody answers twice.',
  },
]

const steps = [
  {
    title: 'Connect your channels',
    time: 'About 5 minutes',
    body: 'Sign in to WhatsApp Business and Instagram with each platform’s official login. If you have a website, add the chat widget.',
  },
  {
    title: 'Teach Kritly your shop',
    time: 'An afternoon',
    body: 'Add products, prices, delivery fees, opening hours and policies, or sync them from Shopify or WooCommerce. Choose how it should sound.',
  },
  {
    title: 'Let it reply',
    time: 'From tonight',
    body: 'Customers get quick, accurate answers. Every conversation lands in one inbox, and you can take over any of them.',
  },
]

const perks = [
  { title: 'First access', body: 'Before public launch.' },
  { title: 'Founding-merchant pricing', body: 'Special pricing for our first merchants.' },
  { title: 'Set up with the founders', body: 'We help you teach Kritly your shop.' },
  { title: 'A say in what we build', body: 'A direct line to the team.' },
]

const faqs = [
  {
    q: 'Will the AI make things up?',
    a: 'Kritly answers from what you’ve taught it: your products, prices, delivery options and policies. When a conversation needs a person, it hands off to your team with the whole chat. You see every conversation and can step in any time.',
  },
  {
    q: 'Do I need a website?',
    a: 'No. Kritly works inside your WhatsApp and Instagram DMs. If you do have a website, you can add our chat widget too.',
  },
  {
    q: 'How do customers pay?',
    a: 'Kritly sends a secure checkout link from Stripe, Paystack or Flutterwave inside the chat, so you can take payments from customers in any part of the world. The order is confirmed once the payment lands.',
  },
  {
    q: 'Which channels does it work on?',
    a: 'WhatsApp, Instagram and web chat today. Facebook Messenger and TikTok are coming soon.',
  },
  {
    q: 'Is my data safe?',
    a: 'Kritly connects only through each platform’s official API and sign-in. We never sell your data or your customers’ data.',
  },
  {
    q: 'When can I start, and what will it cost?',
    a: 'We’re opening to merchants soon, waitlist first. Joining is free, and founding merchants get special early-access pricing.',
  },
]

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <Image src="/images/logo.png" alt="" width={28} height={29} priority />
      <span className={`k-display text-[21px] ${dark ? 'text-white' : 'text-k-ink'}`}>kritly</span>
    </span>
  )
}

export default function HomePage() {
  return (
    <div className="k-home min-h-screen overflow-x-hidden bg-k-bg font-kbody text-[16px] leading-[1.6] text-k-ink">
      {/* Announcement */}
      <a href="#offer" className="block bg-k-hi px-4 py-2.5 text-center text-sm font-medium text-k-onhi no-underline hover:underline">
        Founding merchants get early access and founding-merchant pricing <span aria-hidden>→</span>
      </a>

      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-k-line bg-k-bg/90 backdrop-blur">
        <nav aria-label="Main" className={`${WRAP} flex h-16 items-center justify-between gap-4`}>
          <a href="#top" className="no-underline" aria-label="Kritly home">
            <Logo />
          </a>
          <div className="hidden items-center gap-1 text-sm font-medium md:flex">
            {[
              ['#how', 'How it works'],
              ['#features', 'Features'],
              ['#offer', 'Early access'],
              ['#faq', 'FAQ'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="rounded-lg px-3 py-2 text-k-body no-underline hover:bg-k-paper hover:text-k-ink">
                {label}
              </a>
            ))}
          </div>
          <a
            href="#waitlist"
            className="inline-flex h-10 items-center rounded-xl bg-k-purple px-4 text-sm font-semibold text-white no-underline hover:bg-k-purple-hover"
          >
            Get early access
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="top" className="pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pt-20">
          <div className={WRAP}>
            <p className="m-0 text-sm font-semibold text-k-link">For people who sell in their DMs</p>
            <h1 className="k-display mb-0 mt-4 max-w-[13ch] text-[clamp(40px,10vw,96px)] leading-[0.98] text-k-ink">
              Your DMs sell, <span className="k-mark">even while you sleep.</span>
            </h1>
            <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
              <div>
                <p className="m-0 max-w-[40ch] text-lg text-k-body sm:text-xl">
                  Kritly answers your customers in seconds, takes the order and payment, and calls you in only when a
                  person is needed.
                </p>
                <ChannelRow />
              </div>
              <div>
                <EarlyAccessForm id="hero-email" />
                <p className="mb-0 mt-3 text-sm text-k-muted">
                  Free to join. No card needed.{' '}
                  <Link href="/privacy" className="text-k-link underline underline-offset-2">
                    Privacy
                  </Link>
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-14">
              <InboxDemo />
            </div>
          </div>
        </section>

        {/* Stakes */}
        <section className="on-dark bg-k-purple text-white">
          <div className={`${WRAP} ${SECTION}`}>
            <h2 className="k-display m-0 max-w-[20ch] text-[clamp(30px,6.4vw,52px)] leading-[1.02]">
              Your customers already shop in the chat. Whoever replies first gets the sale.
            </h2>
            <dl className="mb-0 mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:mt-14">
              {stats.map((s) => (
                <div key={s.value} className="border-t border-white/25 pt-5">
                  <dt className="k-display whitespace-nowrap text-[clamp(40px,10vw,56px)] leading-none text-k-hi sm:text-[clamp(36px,5.4vw,72px)]">
                    <CountUp value={s.value} />
                  </dt>
                  <dd className="m-0 mt-3 text-k-lilac">
                    {s.body}
                    <span className="mt-2 block text-xs text-white/70">Source: {s.source}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Before / after */}
        <section className={SECTION}>
          <div className={WRAP}>
            <h2 className={`${H2} max-w-[18ch]`}>What happens to a DM today, and with Kritly</h2>
            <div className="mt-10 overflow-hidden rounded-3xl border border-k-line">
              <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,1.3fr)] border-b border-k-line bg-k-paper text-sm font-semibold md:grid">
                <div className="px-5 py-3.5 text-k-muted">The customer says</div>
                <div className="px-5 py-3.5 text-k-muted">Today</div>
                <div className="px-5 py-3.5 text-k-link">With Kritly</div>
              </div>
              <ul className="m-0 list-none p-0">
                {beforeAfter.map((r) => (
                  <li
                    key={r.says}
                    className="grid gap-3 border-b border-k-line p-5 last:border-b-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,1.3fr)] md:gap-0 md:p-0"
                  >
                    <div className="md:px-5 md:py-5">
                      <span className="inline-block rounded-2xl rounded-bl-md bg-k-bubble px-3.5 py-2 font-semibold">
                        {r.says}
                        {r.when && <span className="ml-1.5 text-sm font-normal text-k-muted">{r.when}</span>}
                      </span>
                    </div>
                    <div className="text-k-body md:px-5 md:py-5">
                      <span className="mb-0.5 block text-xs font-semibold uppercase text-k-muted md:hidden">Today</span>
                      {r.today}
                    </div>
                    <div className="rounded-xl bg-k-tint p-3 md:rounded-none md:px-5 md:py-5">
                      <span className="mb-0.5 block text-xs font-semibold uppercase text-k-link md:hidden">With Kritly</span>
                      {r.kritly}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className={`scroll-mt-16 bg-k-paper ${SECTION}`}>
          <div className={WRAP}>
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
              <h2 className={H2}>Set up in an afternoon</h2>
              <p className="m-0 max-w-[46ch] text-[17px] text-k-body">
                No developers and no website needed. If you can post a product on Instagram, you can set up Kritly.
              </p>
            </div>
            <ol className="m-0 mt-10 grid list-none gap-4 p-0 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-3xl border border-k-line bg-k-surface p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-k-purple text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-sm text-k-muted">{s.time}</span>
                  </div>
                  <h3 className="mb-0 mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mb-0 mt-2 text-k-body">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Features */}
        <section id="features" className={`scroll-mt-16 ${SECTION}`}>
          <div className={WRAP}>
            <h2 className={`${H2} max-w-[16ch]`}>What Kritly does in your inbox</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <article className="flex flex-col gap-5 rounded-3xl border border-k-line p-6">
                <div>
                  <h3 className="m-0 text-xl font-semibold">Answers in your shop’s voice</h3>
                  <p className="mb-0 mt-2 text-k-body">
                    Answers questions, recommends products and handles common issues, using only what you’ve taught it.
                  </p>
                </div>
                <div className="mt-auto rounded-2xl bg-k-paper p-4 text-sm">
                  <div className="font-semibold">Tone</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-k-purple px-3 py-1 font-semibold text-white">Casual</span>
                    <span className="rounded-full border border-k-line bg-k-surface px-3 py-1 text-k-body">Formal</span>
                    <span className="rounded-full border border-k-line bg-k-surface px-3 py-1 text-k-body">Pidgin-friendly</span>
                  </div>
                  <div className="mt-4 font-semibold">It knows</div>
                  <ul className="m-0 mt-2 flex list-none flex-col gap-1.5 p-0">
                    {['Product catalogue', 'Delivery zones and fees', 'Returns policy'].map((x) => (
                      <li key={x} className="flex justify-between gap-2">
                        <span>{x}</span>
                        <span className="font-semibold text-k-ok">✓</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="on-dark flex flex-col gap-5 rounded-3xl bg-k-purple p-6 text-white">
                <div>
                  <h3 className="m-0 text-xl font-semibold">Checkout inside the chat</h3>
                  <p className="mb-0 mt-2 text-k-lilac">
                    Cart, secure payment link and confirmation, without leaving the conversation. Accept payments from
                    customers in any part of the world with Stripe, Paystack or Flutterwave.
                  </p>
                </div>
                <div className="mt-auto">
                  <PaymentLogos />
                </div>
              </article>

              <article className="flex flex-col gap-5 rounded-3xl border border-k-line p-6">
                <div>
                  <h3 className="m-0 text-xl font-semibold">Hands off to a person when it should</h3>
                  <p className="mb-0 mt-2 text-k-body">Set the rules and hours. Kritly passes the chat to the right person with the whole history.</p>
                </div>
                <div className="mt-auto rounded-2xl bg-k-paper p-4 text-sm">
                  When a customer asks for a <strong>custom order</strong>, send it to <strong className="text-k-warm">Funmi</strong>
                </div>
              </article>

              <article className="flex flex-col gap-5 rounded-3xl border border-k-line p-6">
                <div>
                  <h3 className="m-0 text-xl font-semibold">One inbox for the whole team</h3>
                  <p className="mb-0 mt-2 text-k-body">WhatsApp, Instagram and web chat together. Assign chats, add notes and see who’s replying.</p>
                </div>
                <div className="mt-auto flex items-center gap-2 rounded-2xl bg-k-paper p-4 text-sm">
                  <span aria-hidden className="flex h-6 w-6 items-center justify-center rounded-full bg-k-warmbg text-[11px] font-bold text-k-warm">
                    F
                  </span>
                  <span className="text-k-body">Funmi is replying…</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Founding merchant offer */}
        <section id="offer" className="scroll-mt-16 px-4 sm:px-6">
          <div className="on-dark mx-auto max-w-[1160px] rounded-[28px] bg-k-night p-6 text-white sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
              <div>
                <span className="inline-block -rotate-2 rounded-md bg-k-hi px-2.5 py-1 text-sm font-bold text-k-onhi">Founding merchants</span>
                <h2 className="k-display mb-0 mt-5 text-[clamp(30px,6.4vw,52px)] leading-[1.02]">Get in before everyone else</h2>
                <p className="mb-0 mt-4 text-[17px] text-white/80">
                  We’re opening Kritly to merchants in small groups so we can set each one up properly. People on the
                  waitlist go first.
                </p>
                <p className="mb-0 mt-3 text-sm text-white/70">Built in Lagos by co-founders Ridwan Meshinoye and Oluwafikunmi Eshilokun.</p>
                <a
                  href="#waitlist"
                  className="mt-6 inline-flex h-12 items-center rounded-xl bg-k-hi px-5 font-semibold text-k-onhi no-underline hover:bg-k-hi-hover"
                >
                  Claim your early access
                </a>
              </div>
              <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
                {perks.map((p) => (
                  <li key={p.title} className="rounded-2xl border border-white/15 p-5">
                    <span className="block font-semibold">{p.title}</span>
                    <span className="mt-1 block text-sm text-white/75">{p.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={`scroll-mt-16 ${SECTION}`}>
          <div className={`${WRAP} grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16`}>
            <div>
              <h2 className={H2}>Questions merchants ask us</h2>
              <p className="mb-0 mt-4 text-k-body">
                Something else? Email{' '}
                <a href={`mailto:${COMPANY.email}`} className="font-semibold text-k-link underline underline-offset-2">
                  {COMPANY.email}
                </a>
              </p>
            </div>
            <div className="divide-y divide-k-line border-y border-k-line">
              {faqs.map((f, i) => (
                <details key={f.q} open={i === 0} className="py-5">
                  <summary className="flex min-h-[44px] items-center justify-between gap-4 text-[17px] font-semibold">
                    {f.q}
                    <span className="k-faq-plus flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-k-paper text-xl leading-none text-k-link" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="mb-0 mt-2 max-w-[62ch] text-k-body">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="waitlist" className="scroll-mt-16 bg-k-hi">
          <div className={`${WRAP} ${SECTION}`}>
            <h2 className="k-display m-0 max-w-[14ch] text-[clamp(36px,8vw,80px)] leading-[0.98] text-k-onhi">
              Stop losing sales to slow replies.
            </h2>
            <p className="mb-0 mt-4 text-lg text-k-onhi/80">Join the waitlist. Founding merchants get in first.</p>
            <div className="mt-6">
              <EarlyAccessForm id="final-email" tone="yellow" />
              <p className="mb-0 mt-3 text-sm text-k-onhi/75">
                Free to join. Official platform APIs only. We never sell your data.{' '}
                <Link href="/privacy" className="font-semibold text-k-onhi underline underline-offset-2">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer: company details must match Meta Business Info exactly. */}
      <footer className="on-dark bg-k-night text-white">
        <div className={`${WRAP} py-12 sm:py-14`}>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
            <div>
              <Logo dark />
              <p className="mb-0 mt-3 max-w-[32ch] text-sm text-white/70">The AI agent that sells and supports your customers in every chat.</p>
            </div>
            <nav aria-label="Product" className="flex flex-col gap-2 text-sm">
              <span className="font-semibold">Product</span>
              {[
                ['#how', 'How it works'],
                ['#features', 'Features'],
                ['#offer', 'Early access'],
                ['#faq', 'FAQ'],
              ].map(([href, label]) => (
                <a key={href} href={href} className="text-white/70 no-underline hover:text-white">
                  {label}
                </a>
              ))}
            </nav>
            <nav aria-label="Legal" className="flex flex-col gap-2 text-sm">
              <span className="font-semibold">Legal</span>
              <Link href="/privacy" className="text-white/70 no-underline hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/70 no-underline hover:text-white">
                Terms of Service
              </Link>
              <Link href="/data-deletion" className="text-white/70 no-underline hover:text-white">
                Data Deletion
              </Link>
            </nav>
            <address className="flex flex-col gap-2 text-sm not-italic">
              <span className="font-semibold">{COMPANY.legalName}</span>
              <span className="text-white/70">{COMPANY.address}</span>
              <a href={COMPANY.phoneHref} className="text-white/70 no-underline hover:text-white">
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="text-white/70 no-underline hover:text-white">
                {COMPANY.email}
              </a>
            </address>
          </div>
          <div className="mt-10 flex flex-col-reverse gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs text-white/60">© 2026 {COMPANY.legalName} All rights reserved.</span>
            <ThemeToggle />
          </div>
        </div>
      </footer>
    </div>
  )
}

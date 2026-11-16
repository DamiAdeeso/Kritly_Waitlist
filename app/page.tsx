import Image from 'next/image'
import {
  Bot,
  Inbox,
  ShoppingBag,
  UserRound,
  PackageSearch,
  RefreshCw,
  BookOpen,
  Code2,
  BarChart3,
  ShieldCheck,
  Plug,
  GraduationCap,
  MessageSquareText,
  Linkedin,
} from 'lucide-react'
import { SiteNav } from '@/components/SiteNav'
import { SiteFooter } from '@/components/SiteFooter'
import { WaitlistForm } from '@/components/WaitlistForm'
import { Reveal } from '@/components/Reveal'
import { CHANNELS } from '@/lib/site'

/* ── Hero chat mock (demo content, not real customer data) ─────────────── */
type Msg =
  | { from: 'customer' | 'agent'; text: string }
  | { from: 'card'; title: string; meta: string; price: string }
  | { from: 'pay'; text: string }
  | { from: 'event'; text: string }

const CHAT: Msg[] = [
  { from: 'customer', text: 'Hi! Do you have the linen two-piece in size M?' },
  { from: 'agent', text: 'Yes, it’s in stock in M. Want me to add it to your cart?' },
  { from: 'card', title: 'Linen Two-Piece Set', meta: 'Size M · Sand', price: '₦28,500' },
  { from: 'customer', text: 'Yes please. Delivery to Lekki' },
  { from: 'pay', text: 'Pay ₦31,000 securely' },
  { from: 'event', text: 'Payment received · Order confirmed' },
  { from: 'customer', text: 'Can I talk to someone about a custom size?' },
  { from: 'event', text: 'Handed to your team with full history' },
]

function ChatMock() {
  return (
    <div className="relative mx-auto w-full max-w-[360px] animate-float">
      <div className="absolute -inset-8 rounded-[3rem] bg-brand-500/30 blur-3xl animate-glow" aria-hidden />
      <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-ink-800 shadow-2xl">
        <div className="flex items-center gap-3 border-b border-white/10 bg-ink-700/80 px-4 py-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient font-display text-sm font-bold text-white">
            A
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">Adunni Studio</p>
            <p className="text-[11px] text-wa">● replying instantly</p>
          </div>
          <span className="rounded-full bg-wa/15 px-2 py-0.5 text-[10px] font-semibold text-wa">WhatsApp</span>
        </div>
        <ol className="flex flex-col gap-2 px-3 py-4 text-[13px] leading-snug" aria-label="Example conversation">
          {CHAT.map((m, i) => {
            const style = { animationDelay: `${0.4 + i * 0.55}s` }
            if (m.from === 'customer')
              return (
                <li key={i} style={style} className="max-w-[80%] self-start animate-msg-in rounded-2xl rounded-bl-md bg-white/10 px-3 py-2 text-white">
                  {m.text}
                </li>
              )
            if (m.from === 'agent')
              return (
                <li key={i} style={style} className="max-w-[80%] self-end animate-msg-in rounded-2xl rounded-br-md bg-brand-600 px-3 py-2 text-white">
                  {m.text}
                </li>
              )
            if (m.from === 'card')
              return (
                <li key={i} style={style} className="w-[78%] self-end animate-msg-in overflow-hidden rounded-2xl border border-white/10 bg-ink-700">
                  <div className="h-16 bg-[linear-gradient(135deg,#e9d8b8,#c9a77a)]" aria-hidden />
                  <div className="flex items-end justify-between gap-2 p-3">
                    <div>
                      <p className="font-semibold text-white">{m.title}</p>
                      <p className="text-[11px] text-white/50">{m.meta}</p>
                    </div>
                    <p className="font-display font-semibold text-sun">{m.price}</p>
                  </div>
                </li>
              )
            if (m.from === 'pay')
              return (
                <li key={i} style={style} className="self-end animate-msg-in rounded-full bg-sun px-4 py-2 font-semibold text-ink">
                  {m.text} →
                </li>
              )
            return (
              <li key={i} style={style} className="self-center animate-msg-in rounded-full border border-wa/30 bg-wa/10 px-3 py-1 text-[11px] font-medium text-wa">
                {m.text}
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

/* ── Content (each claim maps to something shipped on kritly main) ─────── */
const steps = [
  {
    icon: Plug,
    title: 'Connect your channels',
    body: 'Link WhatsApp Business and Instagram with each platform’s official sign-in, and drop our chat widget on your website.',
  },
  {
    icon: GraduationCap,
    title: 'Teach Kritly your business',
    body: 'Add products, prices, delivery options, business hours and policies, or sync your Shopify or WooCommerce catalogue. Set the voice it speaks in.',
  },
  {
    icon: MessageSquareText,
    title: 'Let Kritly reply',
    body: 'Customers get instant, accurate answers. You see every conversation in one inbox and can step in at any time.',
  },
]

const features = [
  {
    icon: Bot,
    title: 'AI sales and support agent',
    body: 'Answers questions, recommends products and resolves common issues in your brand’s voice, from what you’ve taught it.',
    span: 'lg:col-span-2',
  },
  {
    icon: ShoppingBag,
    title: 'Shop inside the chat',
    body: 'Customers browse, build a cart and pay with a secure link (Paystack, Flutterwave or Stripe) without leaving the conversation.',
    span: '',
  },
  {
    icon: Inbox,
    title: 'One shared inbox',
    body: 'WhatsApp, Instagram and web chat in one place. Assign, add notes and see when a teammate is already replying.',
    span: '',
  },
  {
    icon: UserRound,
    title: 'Human handoff',
    body: 'Set the rules and hours. Kritly passes the conversation to the right person on your team with the full history attached.',
    span: '',
  },
  {
    icon: PackageSearch,
    title: '“Where’s my order?”',
    body: 'Customers ask about an order and get its current status straight away, after Kritly checks it’s really theirs.',
    span: '',
  },
  {
    icon: RefreshCw,
    title: 'Catalogue sync',
    body: 'Bring products in from Shopify, WooCommerce or your own system, and keep stock and prices current.',
    span: '',
  },
  {
    icon: BookOpen,
    title: 'Knowledge base',
    body: 'Add articles and policies once. Kritly uses them in replies and suggests them to your team in the inbox.',
    span: '',
  },
  {
    icon: Code2,
    title: 'Web chat for your site',
    body: 'A themeable chat widget with React, Vue, Angular and script-tag installs.',
    span: '',
  },
  {
    icon: BarChart3,
    title: 'See what it’s doing',
    body: 'Track conversations, how they were answered and how chats turn into paid orders.',
    span: 'lg:col-span-2',
  },
]

const faqs = [
  {
    q: 'Which channels does Kritly work on?',
    a: 'WhatsApp, Instagram and web chat today. Facebook Messenger and TikTok are coming soon.',
  },
  {
    q: 'Will the AI make things up?',
    a: 'Kritly answers from the products, policies and knowledge you give it. You choose when it hands off, and you can take over any conversation at any time.',
  },
  {
    q: 'How do customers pay?',
    a: 'Kritly sends a secure checkout link from Paystack, Flutterwave or Stripe inside the chat, and confirms the order once payment lands.',
  },
  {
    q: 'Is my data safe?',
    a: 'Kritly connects only through official platform APIs. We never sell your data or your customers’ data.',
  },
  {
    q: 'When can I start?',
    a: 'We’re opening to merchants in batches. Join the waitlist and we’ll email you when your spot is ready.',
  },
]

const founders = [
  {
    name: 'Ridwan Meshinoye',
    role: 'Co-founder',
    imageSrc: '/images/team/ridwan.jpeg',
    linkedin: 'https://www.linkedin.com/in/ridwanmeshinoye',
  },
  {
    name: 'Oluwafikunmi Eshilokun',
    role: 'Co-founder',
    imageSrc: '/images/team/fikunmi.jpeg',
    linkedin: 'https://www.linkedin.com/in/oluwafikunmi-eshilokun',
  },
]

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink pt-28 pb-20 text-white sm:pt-36 sm:pb-28">
          <div className="grid-lines absolute inset-0" aria-hidden />
          <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand-700/40 blur-[120px]" aria-hidden />
          <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <span className="eyebrow border-white/15 bg-white/5 text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-sun" /> AI support &amp; sales for merchants
              </span>
              <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Sell and support customers in <span className="text-gradient">every chat.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                Kritly’s AI agent answers your customers on WhatsApp, Instagram and your website, day and night. It
                handles product questions, takes orders and payments, checks order status, and hands off to your team
                when a human is needed.
              </p>
              <div id="waitlist" className="mt-8 max-w-xl scroll-mt-28">
                <WaitlistForm id="hero" />
              </div>
              <a href="#how" className="mt-6 inline-block text-sm font-medium text-white/60 underline-offset-4 hover:text-white hover:underline">
                See how it works ↓
              </a>
            </div>
            <ChatMock />
          </div>
        </section>

        {/* Channels marquee */}
        <section id="channels" className="border-y border-ink/10 bg-white py-6" aria-label="Channels">
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
            <ul className="flex w-max animate-marquee gap-4">
              {[...CHANNELS, ...CHANNELS, ...CHANNELS, ...CHANNELS].map((c, i) => (
                <li
                  key={i}
                  aria-hidden={i >= CHANNELS.length}
                  className="flex items-center gap-2 whitespace-nowrap rounded-full border border-ink/10 px-5 py-2 font-display text-lg font-semibold"
                >
                  {c.name}
                  {c.status === 'soon' ? (
                    <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">Coming soon</span>
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-wa" title="Live" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="bg-white py-24">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <span className="eyebrow border-brand-100 bg-brand-50 text-brand-700">How it works</span>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Live in an afternoon. <span className="text-gradient-dark">Selling by tonight.</span>
              </h2>
            </Reveal>
            <ol className="mt-14 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 120} className="relative rounded-3xl border border-ink/10 bg-white p-7 shadow-[0_1px_0_rgba(11,7,22,0.04)]">
                  <span className="font-display text-6xl font-bold text-brand-100">0{i + 1}</span>
                  <s.icon className="mt-4 h-6 w-6 text-brand-700" />
                  <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-7 text-ink/70">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Features bento */}
        <section id="features" className="bg-[#F7F4FC] py-24">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <span className="eyebrow border-brand-100 bg-white text-brand-700">Features</span>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                A salesperson that never sleeps, <span className="text-gradient-dark">and a team that stays in control.</span>
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f, i) => (
                <Reveal
                  key={f.title}
                  delay={(i % 4) * 80}
                  className={`group rounded-3xl border border-ink/10 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 ${f.span}`}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-ink/70">{f.body}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10 flex flex-col items-start gap-4 rounded-3xl bg-ink p-7 text-white sm:flex-row sm:items-center">
              <ShieldCheck className="h-8 w-8 shrink-0 text-sun" />
              <p className="leading-7 text-white/80">
                Kritly connects only through official platform APIs. We never sell your data or your customers’ data.{' '}
                <a href="/privacy" className="font-semibold text-white underline underline-offset-4">
                  Read our Privacy Policy
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="bg-white py-24">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <span className="eyebrow border-brand-100 bg-brand-50 text-brand-700">Team</span>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight">Built in Lagos, for merchants who sell in chat.</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {founders.map((p, i) => (
                <Reveal key={p.name} delay={i * 100} className="flex items-center gap-5 rounded-3xl border border-ink/10 p-5">
                  <Image src={p.imageSrc} alt={p.name} width={72} height={72} className="h-18 w-18 rounded-full object-cover" />
                  <div className="flex-1">
                    <p className="font-display font-semibold">{p.name}</p>
                    <p className="text-sm text-ink/60">{p.role}</p>
                  </div>
                  <a href={p.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on LinkedIn`} className="rounded-full border border-ink/10 p-2.5 text-ink/60 hover:text-brand-700">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#F7F4FC] py-24">
          <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <span className="eyebrow border-brand-100 bg-white text-brand-700">FAQ</span>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight">Questions, answered.</h2>
            </Reveal>
            <div className="divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold">
                    {f.q}
                    <span className="text-xl text-brand-700 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-7 text-ink/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative overflow-hidden bg-ink py-24 text-white">
          <div className="absolute inset-0 bg-brand-gradient opacity-40" aria-hidden />
          <div className="grid-lines absolute inset-0" aria-hidden />
          <div className="container-x relative text-center">
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
              Turn every message into a sale.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
              Kritly is opening to merchants soon. Join the waitlist for early access.
            </p>
            <div className="mx-auto mt-8 max-w-2xl text-left">
              <WaitlistForm id="cta" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

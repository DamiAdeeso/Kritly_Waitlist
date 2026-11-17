import Image from 'next/image'

/** Supported payment providers, Stripe first. Logo sources: public/images/payments/SOURCES.md */
export function PaymentLogos() {
  const pill = 'flex h-11 items-center rounded-xl bg-white px-3.5'
  return (
    <ul className="m-0 flex list-none flex-wrap gap-2 p-0" aria-label="Payment providers">
      <li className={`${pill} gap-1.5`}>
        <Image src="/images/payments/stripe.svg" alt="" width={20} height={20} />
        <span className="text-[17px] font-bold tracking-tight text-[#635BFF]">Stripe</span>
      </li>
      <li className={pill}>
        <Image src="/images/payments/paystack.svg" alt="Paystack" width={101} height={18} />
      </li>
      <li className={pill}>
        <Image src="/images/payments/flutterwave.png" alt="Flutterwave" width={118} height={28} />
      </li>
    </ul>
  )
}

import Image from 'next/image'

interface FeatureSectionProps {
  title: string
  description: string
  features: string[]
  imageSrc: string
  imageAlt: string
  icon: string
  reverse?: boolean
}

export default function FeatureSection({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  icon,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <div className={`mb-32 grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={reverse ? 'order-2 lg:order-1' : ''}>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className={reverse ? 'order-1 lg:order-2' : ''}>
        <div className="inline-flex items-center px-4 py-2 bg-[#FFC30D]/10 rounded-full mb-4">
          <span className="text-2xl mr-2">{icon}</span>
          <span className="text-[#762FE0] font-semibold">{title.split(' ')[0]}</span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#FFC30D] mr-3">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}






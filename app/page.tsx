'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Star, Smartphone, BarChart3, Video, Check, Linkedin, Mail, X } from 'lucide-react'

// Custom hook for scroll-triggered animations
function useScrollAnimation(options?: { threshold?: number; rootMargin?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: options?.threshold || 0.1,
        rootMargin: options?.rootMargin || '0px 0px -50px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options?.threshold, options?.rootMargin])

  return [ref, isVisible] as const
}

// Scroll animation wrapper component
function ScrollAnimate({ 
  children, 
  className = '', 
  animation = 'fade-in-up',
  delay = 0 
}: { 
  children: React.ReactNode
  className?: string
  animation?: 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in'
  delay?: number
}) {
  const [ref, isVisible] = useScrollAnimation()
  
  const animationClass = {
    'fade-in-up': 'scroll-fade-in-up',
    'slide-in-left': 'scroll-slide-in-left',
    'slide-in-right': 'scroll-slide-in-right',
    'scale-in': 'scroll-scale-in',
  }[animation]

  // Convert delay in ms to delay class (e.g., 100 -> 'animation-delay-100')
  const delayClass = delay > 0 ? `animation-delay-${Math.min(Math.round(delay / 100) * 100, 1000)}` : ''

  return (
    <div 
      ref={ref} 
      className={`scroll-animate ${animationClass} ${delayClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showSuccessModal) setShowSuccessModal(false)
        if (showErrorModal) setShowErrorModal(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [showSuccessModal, showErrorModal])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showSuccessModal || showErrorModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showSuccessModal, showErrorModal])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')
    setMessage('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Successfully joined the waitlist! We\'ll be in touch soon.')
        setEmail('')
        setName('')
        setShowSuccessModal(true)
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
        setShowErrorModal(true)
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
      setShowErrorModal(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 animate-fade-in-up animation-delay-100">
              <div className="relative w-10 h-10 bg-transparent">
                <Image
                  src="/images/logo.png"
                  alt="Kritly Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-[#40008C]">Kritly</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 animate-fade-in-up animation-delay-200">
              <a href="#features" className="text-gray-700 hover:text-[#40008C] transition-colors">Features</a>
              <a href="#waitlist" className="text-gray-700 hover:text-[#40008C] transition-colors">Join Waitlist</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(118, 47, 224, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(118, 47, 224, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          {/* Animated Gradient Orbs - Hidden on mobile for better contrast */}
          <div className="hidden sm:block absolute top-0 left-1/4 w-96 h-96 bg-[#40008C] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="hidden sm:block absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFC30D] rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#40008C]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-gray-900 animate-fade-in-up relative z-10 bg-white/95 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none rounded-2xl sm:rounded-none p-6 sm:p-0">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100">
                Review. Connect.{' '}
                <span className="text-[#40008C]">Share <span className="text-[#FFC30D]">Stories</span>.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                Kritly is a social media review platform where you can review places, social media accounts, and Kritly accounts. Take polls and share special short video experiences called Story Times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#40008C] text-white font-bold text-lg rounded-xl hover:bg-[#5A00C7] transition-all transform hover:scale-105 shadow-xl"
                >
                  Join the Waitlist
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#40008C] font-semibold text-lg rounded-xl border-2 border-[#40008C] hover:bg-[#40008C]/5 hover:border-[#FFC30D] transition-all"
                >
                  Explore Features
                </a>
              </div>
            </div>
            <div className="relative animate-scale-in animation-delay-400">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#40008C]/20 to-[#FFC30D]/20 rounded-3xl blur-3xl transform rotate-6"></div>
                {/* Phone Frame */}
                <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden aspect-[428/926] w-full">
                    <Image
                      src="/images/screenshots/hero-app.png"
                      alt="Kritly App Preview"
                      fill
                      className="object-contain w-full h-full"
                      sizes="(max-width: 640px) 100vw, 375px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <ScrollAnimate animation="fade-in-up" className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Review & Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the powerful features that make Kritly the ultimate review platform
            </p>
          </ScrollAnimate>

          {/* Feature 1: Reviews */}
          <ScrollAnimate animation="fade-in-up" className="mb-32 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative w-full max-w-sm mx-auto">
                {/* Phone Frame */}
                <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden aspect-[428/926] w-full">
                    <Image
                      src="/images/screenshots/reviews-feature.png"
                      alt="Reviews Feature"
                      fill
                      className="object-contain w-full h-full"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-[#40008C]/10 rounded-full mb-4">
                <Star className="w-5 h-5 mr-2 text-[#40008C]" fill="#FFC30D" />
                <span className="text-[#40008C] font-semibold">Reviews</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Review Places & Accounts
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Share your honest reviews about places you&apos;ve visited, social media accounts you follow, and Kritly accounts. Help others discover the best experiences and connect with like-minded reviewers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 text-[#FFC30D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Rate and review places with detailed feedback</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 text-[#FFC30D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Review social media accounts and content creators</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 text-[#FFC30D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Build your reputation as a trusted reviewer</span>
                </li>
              </ul>
            </div>
          </ScrollAnimate>

          {/* Feature 2: Social Media Integration */}
          <ScrollAnimate animation="fade-in-up" className="mb-32 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#40008C]/10 rounded-full mb-4">
                <Smartphone className="w-5 h-5 mr-2 text-[#40008C]" />
                <span className="text-[#40008C] font-semibold">Social Media</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Connect Your Social World
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Seamlessly integrate with your favorite social media platforms. Review accounts, discover new creators, and build meaningful connections within the Kritly community.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 text-[#FFC30D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Link and review social media accounts</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 text-[#FFC30D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Discover trending accounts and creators</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 text-[#FFC30D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Follow reviewers with similar interests</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="relative w-full max-w-sm mx-auto">
                {/* Phone Frame */}
                <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden aspect-[428/926] w-full">
                    <Image
                      src="/images/screenshots/social-feature.png"
                      alt="Social Media Feature"
                      fill
                      className="object-contain w-full h-full"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Feature 3: Polls */}
          <ScrollAnimate animation="fade-in-up" className="mb-32 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative w-full max-w-sm mx-auto">
                {/* Phone Frame */}
                <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden aspect-[428/926] w-full">
                    <Image
                      src="/images/screenshots/polls-feature.png"
                      alt="Polls Feature"
                      fill
                      className="object-contain w-full h-full"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-[#40008C]/10 rounded-full mb-4">
                <BarChart3 className="w-5 h-5 mr-2 text-[#40008C]" />
                <span className="text-[#40008C] font-semibold">Polls</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Engage with Interactive Polls
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Create and participate in polls to gather opinions, make decisions, and engage with the community. Get instant feedback on everything from places to visit to content preferences.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 text-[#FFC30D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Create polls on any topic</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 text-[#FFC30D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Vote and see real-time results</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 text-[#FFC30D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Share polls with your network</span>
                </li>
              </ul>
            </div>
          </ScrollAnimate>

          {/* Feature 4: Story Times */}
          <ScrollAnimate animation="fade-in-up" className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#40008C]/10 rounded-full mb-4">
                <Video className="w-5 h-5 mr-2 text-[#40008C]" />
                <span className="text-[#40008C] font-semibold">Story Times</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Share Your Story Times
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Create and share special short video experiences called Story Times. Capture moments, share experiences, and let your stories come to life in engaging short-form videos.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 text-[#FFC30D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Record and share short video stories</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 text-[#FFC30D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Add effects and filters to your videos</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 text-[#FFC30D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Discover trending Story Times from the community</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="relative w-full max-w-sm mx-auto">
                {/* Phone Frame */}
                <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden aspect-[428/926] w-full">
                    <Image
                      src="/images/screenshots/story-times-feature.png"
                      alt="Story Times Feature"
                      fill
                      className="object-contain w-full h-full"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(118, 47, 224, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(118, 47, 224, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          {/* Subtle Gradient Orbs - Hidden on mobile for better contrast */}
          <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-[#40008C] rounded-full mix-blend-multiply filter blur-3xl opacity-8"></div>
          <div className="hidden sm:block absolute bottom-0 left-0 w-96 h-96 bg-[#FFC30D] rounded-full mix-blend-multiply filter blur-3xl opacity-6"></div>
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <ScrollAnimate animation="fade-in-up" className="text-center mb-12 bg-white/95 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none rounded-2xl sm:rounded-none p-6 sm:p-0">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Be Among the First
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Join thousands of early adopters and get exclusive access when Kritly launches
            </p>
          </ScrollAnimate>

          <ScrollAnimate animation="scale-in" className="bg-white rounded-3xl shadow-2xl border-2 border-[#40008C]/10 p-8 sm:p-12 max-w-2xl mx-auto relative z-10">

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-lg">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#40008C] focus:border-[#40008C] transition-all text-lg"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#40008C] focus:border-[#40008C] transition-all text-lg"
                  placeholder="Enter your email address"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 bg-[#40008C] text-white font-bold text-xl rounded-xl hover:bg-[#5A00C7] focus:outline-none focus:ring-2 focus:ring-[#40008C] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Joining...
                  </span>
                ) : (
                  'Join the Waitlist'
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-gray-500 text-sm">
              By joining, you agree to receive updates about Kritly. We respect your privacy.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimate animation="fade-in-up" className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Connect With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with us and stay updated with the latest from Kritly
            </p>
          </ScrollAnimate>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/kritly-inc"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center transition-all transform hover:scale-110 animate-fade-in-up animation-delay-100"
            >
              <div className="w-16 h-16 bg-[#0077B5] rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <span className="text-gray-900 font-semibold mb-1">LinkedIn</span>
              <span className="text-sm text-gray-600">Kritly Inc</span>
            </a>

            {/* Email */}
            <a
              href="mailto:support@kritly.com"
              className="group flex flex-col items-center transition-all transform hover:scale-110 animate-fade-in-up animation-delay-200"
            >
              <div className="w-16 h-16 bg-[#40008C] rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <span className="text-gray-900 font-semibold mb-1">Email</span>
              <span className="text-sm text-gray-600">support@kritly.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0 animate-fade-in-up animation-delay-100">
              <div className="relative w-10 h-10 bg-transparent">
                <Image
                  src="/images/logo.png"
                  alt="Kritly Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold">Kritly</span>
            </div>
            <p className="text-gray-400 text-center md:text-right animate-fade-in-up animation-delay-200">
              © 2026 Kritly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Success Modal */}
      {showSuccessModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowSuccessModal(false)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 sm:p-10 relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#40008C]/10 rounded-full flex items-center justify-center">
                <Check className="w-10 h-10 text-[#40008C]" strokeWidth={3} />
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                You're In! 🎉
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                {message}
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-4 px-6 bg-[#40008C] text-white font-bold text-lg rounded-xl hover:bg-[#5A00C7] transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowErrorModal(false)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 sm:p-10 relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowErrorModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Error Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>

            {/* Error Message */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Oops! Something went wrong
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                {message}
              </p>
              <button
                onClick={() => setShowErrorModal(false)}
                className="w-full py-4 px-6 bg-[#40008C] text-white font-bold text-lg rounded-xl hover:bg-[#5A00C7] transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

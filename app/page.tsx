'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Smartphone, BarChart3, Video, Check, Linkedin, Mail, Twitter } from 'lucide-react'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

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
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <div className="w-full h-full bg-[#762FE0] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                {/* Uncomment when logo is added:
                <Image
                  src="/images/logo.png"
                  alt="Kritly Logo"
                  fill
                  className="object-contain"
                  priority
                />
                */}
              </div>
              <span className="text-2xl font-bold text-[#762FE0]">Kritly</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-[#762FE0] transition-colors">Features</a>
              <a href="#waitlist" className="text-gray-700 hover:text-[#762FE0] transition-colors">Join Waitlist</a>
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
          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#762FE0] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFC30D] rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#762FE0]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-gray-900">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Review. Connect.{' '}
                <span className="text-[#762FE0]">Share <span className="text-[#FFC30D]">Stories</span>.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
                Kritly is a social media review platform where you can review places, social media accounts, and Kritly accounts. Take polls and share special short video experiences called Story Times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#762FE0] text-white font-bold text-lg rounded-xl hover:bg-[#8B4AE8] transition-all transform hover:scale-105 shadow-xl"
                >
                  Join the Waitlist
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#762FE0] font-semibold text-lg rounded-xl border-2 border-[#762FE0] hover:bg-[#762FE0]/5 hover:border-[#FFC30D] transition-all"
                >
                  Explore Features
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-[9/16] max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#762FE0]/20 to-[#FFC30D]/20 rounded-3xl blur-3xl transform rotate-6"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-[#762FE0]/10 p-2">
                  {/* Replace with your hero screenshot */}
                  <div className="w-full h-full bg-gradient-to-br from-[#762FE0]/10 to-[#FFC30D]/10 rounded-2xl flex items-center justify-center border border-[#762FE0]/20">
                    <p className="text-[#762FE0] text-sm text-center px-4 font-medium">Add hero-app.png<br />to screenshots folder</p>
                  </div>
                  {/* Uncomment when screenshot is added:
                  <Image
                    src="/images/screenshots/hero-app.png"
                    alt="Kritly App Preview"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Review & Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the powerful features that make Kritly the ultimate review platform
            </p>
          </div>

          {/* Feature 1: Reviews */}
          <div className="mb-32 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-sm text-center px-4">Add reviews-feature.png<br />to screenshots folder</p>
                {/* Uncomment when screenshot is added:
                <Image
                  src="/images/screenshots/reviews-feature.png"
                  alt="Reviews Feature"
                  fill
                  className="object-cover"
                />
                */}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-[#762FE0]/10 rounded-full mb-4">
                <Star className="w-5 h-5 mr-2 text-[#762FE0]" fill="#FFC30D" />
                <span className="text-[#762FE0] font-semibold">Reviews</span>
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
          </div>

          {/* Feature 2: Social Media Integration */}
          <div className="mb-32 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#762FE0]/10 rounded-full mb-4">
                <Smartphone className="w-5 h-5 mr-2 text-[#762FE0]" />
                <span className="text-[#762FE0] font-semibold">Social Media</span>
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
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-sm text-center px-4">Add social-feature.png<br />to screenshots folder</p>
                {/* Uncomment when screenshot is added:
                <Image
                  src="/images/screenshots/social-feature.png"
                  alt="Social Media Feature"
                  fill
                  className="object-cover"
                />
                */}
              </div>
            </div>
          </div>

          {/* Feature 3: Polls */}
          <div className="mb-32 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-sm text-center px-4">Add polls-feature.png<br />to screenshots folder</p>
                {/* Uncomment when screenshot is added:
                <Image
                  src="/images/screenshots/polls-feature.png"
                  alt="Polls Feature"
                  fill
                  className="object-cover"
                />
                */}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-[#762FE0]/10 rounded-full mb-4">
                <BarChart3 className="w-5 h-5 mr-2 text-[#762FE0]" />
                <span className="text-[#762FE0] font-semibold">Polls</span>
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
          </div>

          {/* Feature 4: Story Times */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#762FE0]/10 rounded-full mb-4">
                <Video className="w-5 h-5 mr-2 text-[#762FE0]" />
                <span className="text-[#762FE0] font-semibold">Story Times</span>
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
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-sm text-center px-4">Add story-times-feature.png<br />to screenshots folder</p>
                {/* Uncomment when screenshot is added:
                <Image
                  src="/images/screenshots/story-times-feature.png"
                  alt="Story Times Feature"
                  fill
                  className="object-cover"
                />
                */}
              </div>
            </div>
          </div>
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
          {/* Subtle Gradient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#762FE0] rounded-full mix-blend-multiply filter blur-3xl opacity-8"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC30D] rounded-full mix-blend-multiply filter blur-3xl opacity-6"></div>
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Be Among the First
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Join thousands of early adopters and get exclusive access when Kritly launches
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#762FE0]/10 p-8 sm:p-12 max-w-2xl mx-auto">
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-green-800 text-center font-medium">{message}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-800 text-center font-medium">{message}</p>
              </div>
            )}

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
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#762FE0] focus:border-[#762FE0] transition-all text-lg"
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
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#762FE0] focus:border-[#762FE0] transition-all text-lg"
                  placeholder="Enter your email address"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 bg-[#762FE0] text-white font-bold text-xl rounded-xl hover:bg-[#8B4AE8] focus:outline-none focus:ring-2 focus:ring-[#762FE0] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95 shadow-lg"
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
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Connect With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow us on social media and stay updated with the latest from Kritly
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/kritly"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-transparent hover:border-[#762FE0]"
            >
              <div className="w-16 h-16 bg-[#0077B5] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <span className="text-gray-900 font-semibold mb-1">LinkedIn</span>
              <span className="text-sm text-gray-600">@kritly</span>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/kritly"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-transparent hover:border-[#762FE0]"
            >
              <div className="w-16 h-16 bg-[#1DA1F2] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Twitter className="w-8 h-8 text-white" />
              </div>
              <span className="text-gray-900 font-semibold mb-1">Twitter</span>
              <span className="text-sm text-gray-600">@kritly</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@kritly"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-transparent hover:border-[#762FE0]"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <span className="text-gray-900 font-semibold mb-1">TikTok</span>
              <span className="text-sm text-gray-600">@kritly</span>
            </a>

            {/* Email */}
            <a
              href="mailto:support@kritly.com"
              className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-transparent hover:border-[#762FE0]"
            >
              <div className="w-16 h-16 bg-[#762FE0] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <span className="text-gray-900 font-semibold mb-1">Email</span>
              <span className="text-sm text-gray-600">support@kritly.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="relative w-10 h-10">
                <div className="w-full h-full bg-[#762FE0] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                {/* Uncomment when logo is added:
                <Image
                  src="/images/logo.png"
                  alt="Kritly Logo"
                  fill
                  className="object-contain"
                />
                */}
              </div>
              <span className="text-2xl font-bold">Kritly</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2026 Kritly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

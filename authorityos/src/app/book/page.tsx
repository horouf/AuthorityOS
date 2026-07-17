'use client'

import Image from 'next/image'
import Script from 'next/script'

export default function BookPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4" />
        <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 pt-6 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/website-logo.png"
              alt="AuthorityOS Logo"
              width={160}
              height={40}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-slate-900 mb-3">
            Book Your Free Authority Growth Consultation
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
            This 30-minute consultation is designed to evaluate your practice, discuss your growth goals, and determine whether AuthorityOS is the right solution for you. Please book a time you&apos;re confident you can attend, as we accept a limited number of new clients each month.
          </p>
        </div>
      </header>

      {/* Calendly Widget */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/authorityos-business/30min?hide_gdpr_banner=1"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        {/* Reassurance row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            No obligation
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            30-minute call
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            100% confidential
          </div>
        </div>
      </main>

      {/* Footer logo */}
      <div className="flex justify-center py-8 bg-white border-t border-slate-50">
        <Image
          src="/website-logo.png"
          alt="AuthorityOS"
          width={120}
          height={30}
          className="h-8 w-auto opacity-50"
        />
      </div>

      {/* Calendly script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </div>
  )
}

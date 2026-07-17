'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  const router = useRouter()
  const [floatingVisible, setFloatingVisible] = useState(true)
  const lastScrollY = useRef(0)
  const videoRef = useRef<HTMLDivElement>(null)

  const handleApply = () => {
    router.push('/book')
  }

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>

    const handleScroll = () => {
      const currentY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const isAtBottom = currentY >= maxScroll - 50

      clearTimeout(hideTimer)

      if (isAtBottom) {
        setFloatingVisible(false)
      } else if (currentY < lastScrollY.current) {
        setFloatingVisible(true)
      } else if (currentY > lastScrollY.current + 10) {
        hideTimer = setTimeout(() => setFloatingVisible(false), 150)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(hideTimer)
    }
  }, [])

  const handleWatchDemo = () => {
    videoRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-blue-100 selection:text-blue-900 pb-28">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-100/40 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-xl mx-auto px-5 sm:px-8 pt-6 sm:pt-8 pb-12 sm:pb-16 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <Image src="/website-logo.png" alt="AuthorityOS Logo" width={160} height={40} className="h-10 sm:h-12 w-auto" priority />
          </div>

          <p className="text-xs sm:text-sm tracking-[0.15em] uppercase text-blue-400 mb-6 sm:mb-8 font-medium">
            Helping doctors turn expertise into reputation
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-5 sm:mb-6 text-slate-900">
            Be The Doctor<br />
            Patients Trust Most.
          </h1>

          <p className="text-base sm:text-lg text-slate-500 max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed">
            We help busy doctors build a trusted online presence without spending hours creating content — so you stay focused on your patients while your reputation keeps growing.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-14">
            <Button
              onClick={handleApply}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 h-10 text-sm rounded-xl transition-all duration-200 hover:scale-[1.02] min-w-[180px] shadow-lg shadow-blue-600/20"
            >
              Apply for a Strategy Call
            </Button>
            <Button
              onClick={handleWatchDemo}
              variant="outline"
              className="border-slate-200 text-slate-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 font-medium px-6 h-10 text-sm rounded-xl transition-all duration-200 min-w-[180px]"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              Watch 60-Second Demo
            </Button>
          </div>

          <div ref={videoRef} className="relative max-w-lg mx-auto group cursor-pointer hover:border-blue-400/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-200/40 rounded-2xl transition-all duration-300 overflow-hidden border border-transparent">
            <div className="bg-black rounded-2xl" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1209497825?badge=0&autopause=0&player_id=0&app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Social media Authority OS -"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-5 text-slate-900">
            Great Doctors Don&apos;t Always Get Chosen.
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-10 sm:mb-12 max-w-md mx-auto">
            Every day, patients compare doctors online before booking. If they don&apos;t see you, they&apos;ll remember someone else. The challenge isn&apos;t your expertise — it&apos;s staying visible when you&apos;re busy treating patients.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 sm:gap-5">
            {/* Invisible Doctor Card */}
            <div className="flex-1 flex flex-col items-center gap-2 px-6 sm:px-8 py-5 sm:py-6 rounded-xl border border-red-100 bg-red-50/60">
              <span className="text-3xl">🫥</span>
              <span className="text-lg font-semibold text-red-600">Invisible Doctor</span>
              <span className="text-xs text-slate-400">Unknown outside your clinic.</span>
            </div>

            <div className="flex items-center justify-center text-blue-400 py-2 sm:py-0">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 rotate-90 sm:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>

            {/* Trusted Doctor Card */}
            <div className="flex-1 flex flex-col items-center gap-2 px-6 sm:px-8 py-5 sm:py-6 rounded-xl border border-emerald-100 bg-emerald-50/60">
              <span className="text-3xl">🌟</span>
              <span className="text-lg font-semibold text-emerald-600">Trusted Doctor</span>
              <span className="text-xs text-slate-400">Known before the first visit.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE SOLUTION ─── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2 text-slate-900">
            Your Reputation Should Work While You Do.
          </h2>
          <p className="text-slate-400 text-sm mb-10 sm:mb-12">Transformation, not technology.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <Card className="bg-white border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 text-left">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">👁️</span>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800">Stay Visible</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-0">Your expertise reaches patients daily, even when you&apos;re in the clinic.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 text-left">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🛡️</span>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800">Build Trust</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">Patients feel confident before the first appointment — trust is established in advance.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 text-left">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">⏳</span>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800">Save Time</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">No more hours planning, filming, and posting. The system handles it all for you.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 text-left">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">⭐</span>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800">Become the Go-To Doctor</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">A personal brand that makes you the first name patients think of in your specialty.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-10 sm:mb-12 text-slate-900">
            How It Works
          </h2>

          <div className="flex flex-col gap-6 sm:gap-7">
            <div className="flex items-start gap-4 sm:gap-5 text-left">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                <span className="text-sm sm:text-lg font-bold">1</span>
              </div>
              <div className="pt-1 sm:pt-2">
                <h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-1">We learn your expertise.</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">We dive deep into your specialty, your approach, and what sets you apart — so every piece of content sounds authentically you.</p>
              </div>
            </div>

            <div className="ml-5 sm:ml-6 w-0.5 h-4 sm:h-5 bg-blue-100" />

            <div className="flex items-start gap-4 sm:gap-5 text-left">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                <span className="text-sm sm:text-lg font-bold">2</span>
              </div>
              <div className="pt-1 sm:pt-2">
                <h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-1">We build your authority system.</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">We create a consistent content engine that transforms your knowledge into engaging videos and posts — your AI avatar clone at work.</p>
              </div>
            </div>

            <div className="ml-5 sm:ml-6 w-0.5 h-4 sm:h-5 bg-blue-100" />

            <div className="flex items-start gap-4 sm:gap-5 text-left">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                <span className="text-sm sm:text-lg font-bold">3</span>
              </div>
              <div className="pt-1 sm:pt-2">
                <h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-1">Your content keeps educating patients while you focus on your practice.</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">Your online presence works around the clock — building trust, attracting patients, and strengthening your reputation on autopilot.</p>
              </div>
            </div>
          </div>

          <p className="mt-8 sm:mt-10 text-xs text-slate-300 italic">
            Powered by advanced AI built around your expertise.
          </p>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-slate-900">
            Ready to Become the Doctor Patients Remember?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mb-8 sm:mb-10">
            Apply for a strategy call to see if this is right for your practice.
          </p>

          <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-xl shadow-slate-100/50">
            <div className="text-center mb-6">
              <span className="text-4xl sm:text-5xl block mb-3">👨‍⚕️</span>
              <p className="text-sm text-slate-400">Tap the button below to get started</p>
            </div>
            <Button
              onClick={handleApply}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 text-sm rounded-xl transition-all duration-200 hover:scale-[1.01] shadow-lg shadow-blue-600/20"
            >
              Apply for a Strategy Call
            </Button>
            <p className="text-xs text-slate-300 text-center mt-3">
              Limited availability. We only work with a select number of doctors each month.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM LOGO ─── */}
      <div className="flex justify-center py-10 sm:py-14 bg-white">
        <Image src="/website-logo.png" alt="AuthorityOS Logo" width={140} height={35} className="h-9 sm:h-10 w-auto opacity-60" />
      </div>

      {/* ─── FLOATING CTA BUTTON ─── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-5 bg-gradient-to-t from-white via-white/95 to-transparent pt-8 transition-all duration-300 ease-in-out ${
          floatingVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-md mx-auto">
          <Button
            onClick={handleApply}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 text-sm rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/30"
          >
            Apply for a Strategy Call
          </Button>
        </div>
      </div>

    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-100/30 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-center pt-6 sm:pt-8 px-5">
        <Image
          src="/website-logo.png"
          alt="AuthorityOS Logo"
          width={160}
          height={40}
          className="h-10 sm:h-12 w-auto"
          priority
        />
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-5 sm:px-8 py-16">
        <div className="max-w-md mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-slate-900 mb-4 text-balance">
            Thank You for Applying
          </h1>

          <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-3">
            We&apos;ve received your application for a strategy call.
          </p>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-10 max-w-sm mx-auto">
            Our team will carefully review your answers and reach out to you personally if there&apos;s a strong fit. We appreciate you taking the time to apply.
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-slate-200 mx-auto mb-10" />

          {/* What happens next */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-7 text-left mb-10">
            <h2 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wider">
              What happens next
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5">
                  1
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Our team reviews your application within 1–2 business days.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5">
                  2
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  If there&apos;s a good fit, we will be in touch to schedule your strategy call.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5">
                  3
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  On the call, we will map out a custom reputation strategy for your practice.
                </p>
              </div>
            </div>
          </div>

          <Button
            asChild
            variant="outline"
            className="border-slate-200 text-slate-500 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 rounded-xl h-10 px-6 text-sm font-medium transition-all duration-200"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>

      {/* Footer logo */}
      <footer className="relative z-10 flex justify-center py-8 border-t border-slate-50">
        <Image
          src="/website-logo.png"
          alt="AuthorityOS"
          width={120}
          height={30}
          className="h-8 w-auto opacity-40"
        />
      </footer>
    </div>
  )
}

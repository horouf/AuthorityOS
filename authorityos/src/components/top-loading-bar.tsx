'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

/**
 * A slim top-of-page loading bar that plays whenever the route changes.
 * No external dependencies — just CSS transitions + pathname tracking.
 */
export function TopLoadingBar() {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const prevPathname = useRef(pathname)

  const startLoading = () => {
    setProgress(0)
    setVisible(true)

    // Quickly advance to ~80% then slow down to simulate waiting
    let current = 0
    timerRef.current = setInterval(() => {
      current += current < 60 ? 8 : current < 80 ? 3 : 0.5
      if (current >= 90) {
        clearInterval(timerRef.current!)
        current = 90
      }
      setProgress(current)
    }, 80)
  }

  const finishLoading = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    setProgress(100)
    setTimeout(() => {
      setVisible(false)
      setProgress(0)
    }, 400)
  }

  // Fire the bar immediately when a navigation is intentionally triggered
  useEffect(() => {
    const onStart = () => startLoading()
    window.addEventListener('loading-bar:start', onStart)
    return () => window.removeEventListener('loading-bar:start', onStart)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname
      // Pathname changed — finish whatever bar is running
      const done = setTimeout(finishLoading, 300)
      return () => clearTimeout(done)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  if (!visible) return null

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px] pointer-events-none"
    >
      <div
        className="h-full bg-blue-500 transition-all duration-200 ease-out"
        style={{
          width: `${progress}%`,
          opacity: visible ? 1 : 0,
          boxShadow: '0 0 8px rgba(59,130,246,0.7)',
        }}
      />
    </div>
  )
}

'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with your actual GA4 tracking ID

export default function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view when route changes
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])

  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    document.head.appendChild(script)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })

    return () => {
      // Cleanup
      document.head.removeChild(script)
    }
  }, [])

  return null
}

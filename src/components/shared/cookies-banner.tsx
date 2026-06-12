import { useState } from 'react'
import { Cookie } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CookiesBanner() {
  const [dismissed, setDismissed] = useState(() => {
    return localStorage.getItem('cookies-accepted') !== null
  })

  if (dismissed) return null

  function handleAccept() {
    localStorage.setItem('cookies-accepted', 'all')
    setDismissed(true)
  }

  function handleDecline() {
    localStorage.setItem('cookies-accepted', 'essential')
    setDismissed(true)
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100vw-32px)] max-w-lg -translate-x-1/2">
      <div
        className="app-glass-surface flex flex-col gap-3 rounded-2xl px-5 py-4 shadow-[0_8px_32px_var(--grape)]"
      >
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(108deg,var(--grape),var(--grape-end))]">
            <Cookie size={15} className="text-white" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-[#32146f]">We use cookies</p>
            <p className="mt-0.5 text-[12px] leading-5 text-content-muted">
              We use cookies to improve your experience, analyse traffic and personalise content.{' '}
              <a href="#" className="text-[#7861ff] underline-offset-2 hover:underline">
                Learn more
              </a>
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="cosmicOutline" size="sm" onClick={handleDecline}>
            Essential only
          </Button>
          <Button variant="grape" size="sm" onClick={handleAccept}>
            Accept all
          </Button>
        </div>
      </div>
    </div>
  )
}

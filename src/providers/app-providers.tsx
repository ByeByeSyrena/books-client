import { type ReactNode } from 'react'
import { I18nProvider } from '@lingui/react'
import { LucideProvider } from 'lucide-react'
import { Toaster } from 'sonner'
import { TooltipProvider } from '@/components/shared/tooltip'
import { i18n } from '@/i18n'
import { ModalProvider } from './modal'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LucideProvider>
      <I18nProvider i18n={i18n}>
        <TooltipProvider>
          <ModalProvider>{children}</ModalProvider>
        </TooltipProvider>
        <Toaster position="bottom-right" />
      </I18nProvider>
    </LucideProvider>
  )
}

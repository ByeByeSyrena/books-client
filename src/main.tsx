import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { I18nProvider } from '@lingui/react'
import { Toaster } from 'sonner'
import { routeTree } from './routeTree.gen'
import { i18n } from './i18n'
import { TooltipProvider } from './components/shared/tooltip'
import './index.css'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider i18n={i18n}>
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
      <Toaster position="bottom-right" />
    </I18nProvider>
  </StrictMode>,
)

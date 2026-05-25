import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Footer } from '@/components/shared/footer'
import { Header } from '@/components/shared/header'
import { LanguageSwitcher } from '@/components/language-switcher'
import { RootError } from '@/components/shared/root-error'

export const Route = createRootRoute({
  component: () => (
    <section className="flex min-h-svh flex-col">
      <LanguageSwitcher />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </section>
  ),
  errorComponent: RootError,
})

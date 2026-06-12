import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Banner } from '@/components/shared/banner'
import { CookiesBanner } from '@/components/shared/cookies-banner'
import { Footer } from '@/components/shared/footer/footer'
import { Header } from '@/components/shared/header'
import { RootError } from '@/components/shared/root-error'

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col">
      <Banner />
      <Header />
      <main className="flex flex min-h-[calc(100svh-68px)] flex-col flex-col">
        <Outlet />
      </main>
      <Footer />
      <CookiesBanner />
      <TanStackRouterDevtools />
    </div>
  ),
  errorComponent: RootError,
})

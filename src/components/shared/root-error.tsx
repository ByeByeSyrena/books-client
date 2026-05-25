import { type ErrorComponentProps } from '@tanstack/react-router'
import { Trans } from '@lingui/react/macro'

export function RootError({ error, reset }: ErrorComponentProps) {
  return (
    <main className="grid min-h-svh place-items-center p-6">
      <section className="w-full max-w-xl text-left">
        <h1 className="mb-3 mt-0">
          <Trans>Something went wrong</Trans>
        </h1>
        <p className="mb-5">
          <Trans>
            The page hit an unexpected error. You can try again from here.
          </Trans>
        </p>
        <button type="button" className="counter" onClick={reset}>
          <Trans>Try again</Trans>
        </button>
        {error.message ? (
          <pre className="m-0 overflow-auto rounded-md border border-[var(--border)] bg-[var(--code-bg)] p-3 text-sm text-[var(--text-h)]">
            {error.message}
          </pre>
        ) : null}
      </section>
    </main>
  )
}

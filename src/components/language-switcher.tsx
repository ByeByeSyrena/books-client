import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/react/macro'
import { type Locale, locales } from '@/i18n'

export function LanguageSwitcher() {
  const { i18n } = useLingui()

  return (
    <label className="fixed right-4 top-4 z-10">
      <span className="sr-only">
        <Trans>Language</Trans>
      </span>
      <select
        className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--text-h)] shadow-sm"
        value={i18n.locale}
        onChange={(event) => i18n.activate(event.target.value as Locale)}
      >
        {Object.entries(locales).map(([locale, label]) => (
          <option key={locale} value={locale}>
            {label}
          </option>
        ))}
      </select>
    </label>
  )
}

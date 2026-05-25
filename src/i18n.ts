import { i18n } from '@lingui/core'
import { messages as enMessages } from './locales/en/messages.po'
import { messages as ukMessages } from './locales/uk/messages.po'

export const locales = {
  en: 'English',
  uk: 'Українська',
} as const

export type Locale = keyof typeof locales

i18n.load({
  en: enMessages,
  uk: ukMessages,
})

i18n.activate('en')

export { i18n }

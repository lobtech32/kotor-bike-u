// lib/useTranslations.js
import tr from '../locales/tr'
import en from '../locales/en'
import me from '../locales/me'
import de from '../locales/de'
import ru from '../locales/ru'

const translations = { tr, en, me, de, ru }

export function useTranslations(locale = 'en') {
  return (key) => translations[locale]?.[key] || key
}

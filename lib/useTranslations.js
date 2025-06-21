import languages from './lang'
import { useRouter } from 'next/router'

export function useTranslations() {
  const { locale } = useRouter()
  const lang = locale || 'en'
  return languages[lang] || languages['en']
}

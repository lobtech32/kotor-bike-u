// pages/promo.js
import { useRouter } from 'next/router'
import MapView from '../components/MapView'
import Ads from '../components/Ads'
import { useTranslations } from '../lib/useTranslations'

export default function Promo() {
  const { locale } = useRouter()
  const t = useTranslations(locale)

  return (
    <div className="p-6 max-w-lg mx-auto">
      <MapView t={t} />
      <Ads t={t} />
    </div>
  )
}

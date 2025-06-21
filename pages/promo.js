import MapView from '../components/MapView'
import Ads from '../components/Ads'
import { useTranslations } from '../lib/useTranslations'

export default function Promo() {
  const t = useTranslations()

  return (
    <div className="p-6 max-w-lg mx-auto">
      <MapView />
      <Ads t={t} />
    </div>
  )
}

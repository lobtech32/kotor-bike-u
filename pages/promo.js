import dynamic from 'next/dynamic'
import Ads from '../components/Ads'
import { useTranslations } from '../lib/useTranslations'

const MapView = dynamic(() => import('../components/MapView'), { ssr: false })

export default function Promo() {
  const t = useTranslations()

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 p-4 bg-gray-100">
        <MapView />
      </div>
      <div className="bg-white p-4 border-t border-gray-300">
        <Ads t={t} />
      </div>
    </div>
  )
}

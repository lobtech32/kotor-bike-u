// pages/bike2.js
import { useRouter } from 'next/router'
import BikeInfo from '../components/BikeInfo'
import Ads from '../components/Ads'
import { useTranslations } from '../lib/useTranslations'

export default function Bike2() {
  const { locale } = useRouter()
  const t = useTranslations(locale)

  return (
    <div className="p-6 max-w-lg mx-auto">
      <BikeInfo t={t} />
      <Ads t={t} />
    </div>
  )
}

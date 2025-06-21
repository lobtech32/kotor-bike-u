import { useState } from 'react'
import { useRouter } from 'next/router'
import BikeInfo from '../components/BikeInfo'
import languages from '../lib/lang'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { lang, id } = router.query
  const [selectedPackage, setSelectedPackage] = useState(null)

  const selectedLang = lang || 'en'
  const dictionary = languages[selectedLang] || languages['en']

  const handlePackageSelect = (pkgId) => {
    // Ödeme sayfasına yönlendir
    router.push(`/payment?bikeId=${id}&package=${pkgId}&lang=${selectedLang}`)
  }

  return (
    <div style={{ padding: 20 }}>
      <BikeInfo bikeId={id} lang={selectedLang} dictionary={dictionary} onPackageSelect={handlePackageSelect} />
      <Component {...pageProps} />
    </div>
  )
}

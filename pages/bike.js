// pages/bike.js
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import languages from '../lib/lang'

export default function BikePage() {
  const router = useRouter()
  const { source, id, lang } = router.query

  const [dictionary, setDictionary] = useState(languages['en'])

  useEffect(() => {
    const selectedLang = lang || localStorage.getItem('lang') || 'en'
    setDictionary(languages[selectedLang])
  }, [lang])

  const bikeUI = (
    <>
      <h2>{dictionary.bikeInfo} #{id}</h2>
      <p>{dictionary.battery}: 87%</p>
      <p>{dictionary.rentOptions}:</p>
      <ul>
        <li>1€ → 1 saat</li>
        <li>15€ → 6 saat</li>
        <li>20€ → sınırsız</li>
      </ul>
    </>
  )

  const brochureUI = (
    <>
      <h2>{dictionary.map}</h2>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1U7KHfX7-örnek"
        width="100%"
        height="250"
        style={{ border: '1px solid #ccc' }}
      ></iframe>
    </>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1, padding: '20px', background: '#f0f0f0' }}>
        {source === 'brochure' ? brochureUI : bikeUI}
      </div>
      <div style={{ flex: 1, padding: '20px', background: '#fff' }}>
        <h3>{dictionary.ads}</h3>
        <ul>
          <li>🌮 Yummy Tivat Restaurant</li>
          <li>🍸 SkyBar Kotor</li>
          <li>🛥️ Blue Lagoon Yat Turu</li>
        </ul>
      </div>
    </div>
  )
  }

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import languages from '../lib/lang'

const adsData = [
  {
    id: 'tivat-restaurant',
    img: "https://cdn-icons-png.flaticon.com/128/1046/1046784.png",
    title: "Yummy Tivat Restaurant",
    desc: "Kotor’da lezzetli yemekler",
    detail: "Yummy Tivat Restaurant, Kotor’un en popüler restoranlarından biridir..."
  },
  {
    id: 'skybar-kotor',
    img: "https://cdn-icons-png.flaticon.com/128/2913/2913461.png",
    title: "SkyBar Kotor",
    desc: "Manzaralı kokteyller",
    detail: "SkyBar Kotor, muhteşem manzarası ve lezzetli kokteylleriyle ünlüdür..."
  },
  {
    id: 'blue-lagoon',
    img: "https://cdn-icons-png.flaticon.com/128/888/888879.png",
    title: "Blue Lagoon Yat Turu",
    desc: "Muhteşem koylarda tur",
    detail: "Blue Lagoon Yat Turu, Kotor Körfezi'nde unutulmaz bir deniz turu sunar..."
  }
]

export default function BikePage() {
  const router = useRouter()
  const { source, id, lang } = router.query

  const [dictionary, setDictionary] = useState(languages['en'])

  useEffect(() => {
    let selectedLang = lang || localStorage.getItem('lang')

    if (!selectedLang) {
      router.push('/language')
      return
    }

    if (languages[selectedLang]) {
      setDictionary(languages[selectedLang])
      localStorage.setItem('lang', selectedLang)
    }
  }, [lang, source, id])

  const handlePackageClick = (pkgId) => {
    router.push(`/payment?bikeId=${id}&package=${pkgId}&lang=${lang || 'en'}`)
  }

  const handleAdClick = (adId) => {
    router.push(`/ad?id=${adId}&lang=${lang || 'en'}`)
  }

  const bikeUI = (
    <>
      <h2>{dictionary.bikeInfo} #{id || ''}</h2>
      <p>{dictionary.battery}: 87%</p>
      <div style={{
        border: '2px solid #0070f3',
        borderRadius: '10px',
        padding: '20px',
        marginTop: '15px',
        backgroundColor: '#e6f0ff',
        maxWidth: '400px'
      }}>
        <h3>{dictionary.rentOptions}</h3>
        {dictionary.packages?.map(pkg => (
          <button
            key={pkg.id}
            onClick={() => handlePackageClick(pkg.id)}
            style={{
              display: 'block',
              width: '100%',
              margin: '10px 0',
              padding: '10px',
              fontSize: '16px',
              cursor: 'pointer',
              borderRadius: '6px',
              border: '1px solid #0070f3',
              backgroundColor: 'white',
              color: '#0070f3'
            }}
          >
            {pkg.label} — {pkg.price} ({pkg.duration})
          </button>
        ))}
      </div>
    </>
  )

  const adsUI = (
    <div style={{ display: "flex", gap: 15 }}>
      {adsData.map((ad) => (
        <div
          key={ad.id}
          style={{ width: 120, textAlign: "center", cursor: "pointer" }}
          onClick={() => handleAdClick(ad.id)}
        >
          <img
            src={ad.img}
            alt={ad.title}
            style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 8 }}
          />
          <div style={{ fontWeight: "bold", marginTop: 6 }}>{ad.title}</div>
          <div style={{ fontSize: 12, color: "#555" }}>{ad.desc}</div>
        </div>
      ))}
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1, padding: '20px', background: '#f0f0f0', overflowY: 'auto' }}>
        {source === 'brochure' ? (
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1U7KHfX7-örnek"
            width="100%"
            height="250"
            style={{ border: '1px solid #ccc' }}
          />
        ) : (
          bikeUI
        )}
      </div>
      <div style={{ flex: 1, padding: '20px', background: '#fff', overflowY: 'auto' }}>
        <h3>{dictionary.ads}</h3>
        {adsUI}
      </div>
    </div>
  )
              }

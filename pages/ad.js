import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import languages from '../lib/lang'

const adsData = {
  'tivat-restaurant': {
    img: "https://cdn-icons-png.flaticon.com/128/1046/1046784.png",
    title: {
      me: "Yummy Tivat Restaurant",
      en: "Yummy Tivat Restaurant",
      ru: "Ресторан Yummy Tivat",
      de: "Yummy Tivat Restaurant",
      tr: "Yummy Tivat Restoran"
    },
    detail: {
      me: "Yummy Tivat Restaurant, Kotor’un en popular restoranlardan biri...",
      en: "Yummy Tivat Restaurant is one of the most popular restaurants in Kotor...",
      ru: "Yummy Tivat Restaurant - один из самых популярных ресторанов в Которе...",
      de: "Yummy Tivat Restaurant ist eines der beliebtesten Restaurants in Kotor...",
      tr: "Yummy Tivat Restoran, Kotor’da en popüler restoranlardan biridir..."
    }
  },
  'skybar-kotor': {
    img: "https://cdn-icons-png.flaticon.com/128/2913/2913461.png",
    title: {
      me: "SkyBar Kotor",
      en: "SkyBar Kotor",
      ru: "СкайБар Котор",
      de: "SkyBar Kotor",
      tr: "SkyBar Kotor"
    },
    detail: {
      me: "SkyBar Kotor, muhteşem manzarası ve lezzetli kokteylleriyle ünlüdür...",
      en: "SkyBar Kotor is famous for its stunning views and delicious cocktails...",
      ru: "SkyBar Kotor известен своими потрясающими видами и вкусными коктейлями...",
      de: "SkyBar Kotor ist bekannt für seine atemberaubende Aussicht und leckere Cocktails...",
      tr: "SkyBar Kotor, muhteşem manzarası ve lezzetli kokteylleriyle ünlüdür..."
    }
  },
  'blue-lagoon': {
    img: "https://cdn-icons-png.flaticon.com/128/888/888879.png",
    title: {
      me: "Blue Lagoon Yat Turu",
      en: "Blue Lagoon Yacht Tour",
      ru: "Тур на яхте Blue Lagoon",
      de: "Blue Lagoon Yachttour",
      tr: "Blue Lagoon Yat Turu"
    },
    detail: {
      me: "Blue Lagoon Yat Turu, Kotor Körfezi'nde unutulmaz bir deniz turu sunar...",
      en: "Blue Lagoon Yacht Tour offers an unforgettable sea trip in the Bay of Kotor...",
      ru: "Тур на яхте Blue Lagoon предлагает незабываемую морскую прогулку в заливе Котор...",
      de: "Blue Lagoon Yachttour bietet eine unvergessliche Seereise in der Bucht von Kotor...",
      tr: "Blue Lagoon Yat Turu, Kotor Körfezi'nde unutulmaz bir deniz turu sunar..."
    }
  }
}

export default function AdPage() {
  const router = useRouter()
  const { id, lang } = router.query
  const [dictionary, setDictionary] = useState(languages['en'])
  const [ad, setAd] = useState(null)

  useEffect(() => {
    let selectedLang = lang || localStorage.getItem('lang')

    if (!selectedLang) {
      router.push('/language')
      return
    }

    if (languages[selectedLang]) {
      setDictionary(languages[selectedLang])
    }

    if (id && adsData[id]) {
      setAd({
        ...adsData[id],
        title: adsData[id].title[selectedLang],
        detail: adsData[id].detail[selectedLang],
      })
    }
  }, [id, lang])

  if (!ad) return <div>Loading...</div>

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h1>{ad.title}</h1>
      <img src={ad.img} alt={ad.title} style={{ width: '100%', borderRadius: 10 }} />
      <p style={{ marginTop: 15 }}>{ad.detail}</p>
      <button
        style={{
          marginTop: 30,
          padding: '10px 20px',
          fontSize: 16,
          cursor: 'pointer',
          borderRadius: 6,
          border: 'none',
          backgroundColor: '#0070f3',
          color: 'white'
        }}
        onClick={() => router.back()}
      >
        {dictionary.ads} - Back
      </button>
    </div>
  )
}

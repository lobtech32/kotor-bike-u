import { useRouter } from 'next/router'

const adsData = [
  {
    id: 'tivat-restaurant',
    img: "https://cdn-icons-png.flaticon.com/128/1046/1046784.png",
    title: "Yummy Tivat Restaurant",
    desc: "Kotor’da lezzetli yemekler"
  },
  {
    id: 'skybar-kotor',
    img: "https://cdn-icons-png.flaticon.com/128/2913/2913461.png",
    title: "SkyBar Kotor",
    desc: "Manzaralı kokteyller"
  },
  {
    id: 'blue-lagoon',
    img: "https://cdn-icons-png.flaticon.com/128/888/888879.png",
    title: "Blue Lagoon Yat Turu",
    desc: "Muhteşem koylarda tur"
  }
]

export default function BikePage() {
  const router = useRouter()
  const { lang } = router.query

  const handleAdClick = (adId) => {
    router.push(`/ad?id=${adId}&lang=${lang || 'en'}`)
  }

  return (
    <div>
      <h3>Reklamlar</h3>
      <div style={{ display: 'flex', gap: 15 }}>
        {adsData.map(ad => (
          <div
            key={ad.id}
            onClick={() => handleAdClick(ad.id)}
            style={{ cursor: 'pointer', width: 120, textAlign: 'center' }}
          >
            <img
              src={ad.img}
              alt={ad.title}
              style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 8 }}
            />
            <div style={{ fontWeight: 'bold', marginTop: 6 }}>{ad.title}</div>
            <div style={{ fontSize: 12, color: '#555' }}>{ad.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

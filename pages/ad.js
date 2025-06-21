import { useRouter } from 'next/router'

const adsData = {
  'tivat-restaurant': {
    img: "https://cdn-icons-png.flaticon.com/128/1046/1046784.png",
    title: "Yummy Tivat Restaurant",
    detail: "Yummy Tivat Restaurant, Kotor’un en popüler restoranlarından biridir."
  },
  'skybar-kotor': {
    img: "https://cdn-icons-png.flaticon.com/128/2913/2913461.png",
    title: "SkyBar Kotor",
    detail: "SkyBar Kotor, muhteşem manzarası ve lezzetli kokteylleriyle ünlüdür."
  },
  'blue-lagoon': {
    img: "https://cdn-icons-png.flaticon.com/128/888/888879.png",
    title: "Blue Lagoon Yat Turu",
    detail: "Blue Lagoon Yat Turu, Kotor Körfezi'nde unutulmaz bir deniz turu sunar."
  }
}

export default function AdPage() {
  const router = useRouter()
  const { id } = router.query
  const ad = adsData[id]

  if (!ad) return <p>Reklam bulunamadı</p>

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>{ad.title}</h1>
      <img src={ad.img} alt={ad.title} style={{ width: '100%', borderRadius: 10 }} />
      <p style={{ marginTop: 15 }}>{ad.detail}</p>
      <button
        onClick={() => router.back()}
        style={{
          marginTop: 20,
          padding: '10px 15px',
          fontSize: 16,
          borderRadius: 6,
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Geri
      </button>
    </div>
  )
}

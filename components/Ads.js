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

export default function Ads({ t }) {
  const router = useRouter()

  const handleClick = (adId) => {
    router.push(`/ad?id=${adId}&lang=${router.locale || 'en'}`)
  }

  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold">{t.ads}</h3>
      <div className="flex gap-4">
        {adsData.map(ad => (
          <div
            key={ad.id}
            onClick={() => handleClick(ad.id)}
            className="cursor-pointer w-28 text-center"
          >
            <img
              src={ad.img}
              alt={ad.title}
              className="w-24 h-24 object-cover rounded-lg mx-auto"
            />
            <div className="font-bold mt-2">{ad.title}</div>
            <div className="text-xs text-gray-600">{ad.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

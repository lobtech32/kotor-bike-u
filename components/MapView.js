import { useEffect, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '12px',
}

const center = {
  lat: 42.4245,
  lng: 18.7710,
}

const exampleBikes = [
  { id: 'bike1', lat: 42.4255, lng: 18.7720, battery: 87 },
  { id: 'bike2', lat: 42.4230, lng: 18.7700, battery: 65 },
  { id: 'bike3', lat: 42.4220, lng: 18.7740, battery: 92 },
]

export default function MapView() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  const [bikes, setBikes] = useState([])

  useEffect(() => {
    // Burada gerçek API'den canlı veri çekebilirsin
    setBikes(exampleBikes)
  }, [])

  if (!isLoaded) return <div>Harita yükleniyor...</div>

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      {bikes.map((bike) => (
        <Marker
          key={bike.id}
          position={{ lat: bike.lat, lng: bike.lng }}
          label={{
            text: `Bat: ${bike.battery}%`,
            fontWeight: 'bold',
            color: 'white',
            fontSize: '12px',
            backgroundColor: '#0070f3',
            padding: '2px 4px',
            borderRadius: '4px',
          }}
          icon={{
            url: '/bike-icon.svg',
            scaledSize: new window.google.maps.Size(30, 30),
          }}
        />
      ))}
    </GoogleMap>
  )
}

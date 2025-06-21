import { useEffect, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '12px',
}

const center = {
  lat: 42.4245,
  lng: 18.7710,
}

const exampleBikes = [
  { id: 'bike1', lat: 42.4255, lng: 18.7720 },
  { id: 'bike2', lat: 42.4230, lng: 18.7700 },
]

export default function MapView() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  const [bikes, setBikes] = useState([])

  useEffect(() => {
    setBikes(exampleBikes)
  }, [])

  if (!isLoaded) return <div>Loading map...</div>

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      {bikes.map((bike) => (
        <Marker
          key={bike.id}
          position={{ lat: bike.lat, lng: bike.lng }}
          icon={{
            url: '/bike-icon.svg',
            scaledSize: new window.google.maps.Size(30, 30),
          }}
        />
      ))}
    </GoogleMap>
  )
    }

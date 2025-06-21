import { useEffect, useState } from 'react'

export default function BikeInfo({ bikeId, lang, dictionary, onPackageSelect }) {
  // Kalıcı state için localStorage kullanıyoruz
  const [usage, setUsage] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('bikeUsage')
      return saved ? JSON.parse(saved) : { active: false, startTime: null, pricePerMin: 0.40, durationSec: 0 }
    }
    return { active: false, startTime: null, pricePerMin: 0.40, durationSec: 0 }
  })

  useEffect(() => {
    if (!usage.active) return

    const interval = setInterval(() => {
      const now = Date.now()
      const elapsedSec = Math.floor((now - usage.startTime) / 1000)
      setUsage(prev => {
        const updated = { ...prev, durationSec: elapsedSec }
        localStorage.setItem('bikeUsage', JSON.stringify(updated))
        return updated
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [usage.active, usage.startTime])

  // Kullanıcı kiralama başlattıysa
  const startRental = () => {
    const startTime = Date.now()
    const newUsage = { active: true, startTime, pricePerMin: 0.40, durationSec: 0 }
    setUsage(newUsage)
    localStorage.setItem('bikeUsage', JSON.stringify(newUsage))
  }

  const stopRental = () => {
    const newUsage = { active: false, startTime: null, pricePerMin: 0.40, durationSec: 0 }
    setUsage(newUsage)
    localStorage.setItem('bikeUsage', JSON.stringify(newUsage))
  }

  const totalPrice = ((usage.durationSec / 60) * usage.pricePerMin).toFixed(2)

  return (
    <div style={{
      border: '2px solid #0070f3',
      borderRadius: 10,
      padding: 20,
      backgroundColor: '#e6f0ff',
      maxWidth: 400,
      marginBottom: 20
    }}>
      <h2>{dictionary.bikeInfo} #{bikeId || ''}</h2>
      <p>{dictionary.battery}: 87%</p>

      {usage.active ? (
        <>
          <p>Usage time: {Math.floor(usage.durationSec / 60)}m {usage.durationSec % 60}s</p>
          <p>Price: {totalPrice}€</p>
          <button onClick={stopRental} style={{ marginTop: 10 }}>Stop Rental</button>
        </>
      ) : (
        <>
          <p>Not currently renting</p>
          <button onClick={startRental}>Start Rental</button>
        </>
      )}

      <h3>{dictionary.rentOptions}</h3>

      <button onClick={() => onPackageSelect('unlimited')} style={{ margin: 5, padding: 10 }}>
        Unlimited - 20€
      </button>
      <button onClick={() => onPackageSelect('6h')} style={{ margin: 5, padding: 10 }}>
        6 hours - 15€
      </button>
      <button onClick={() => onPackageSelect('1h')} style={{ margin: 5, padding: 10 }}>
        1 hour - 1€
      </button>
    </div>
  )
  }

// pages/index.js
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const handleLanguageSelect = (lang) => {
    localStorage.setItem('lang', lang)
    router.push(`/bike?source=bike&id=1&lang=${lang}`)
  }

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Select Language / Dil Seçin</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
        <button onClick={() => handleLanguageSelect('me')}>🇲🇪 Crnogorski</button>
        <button onClick={() => handleLanguageSelect('en')}>🇬🇧 English</button>
        <button onClick={() => handleLanguageSelect('ru')}>🇷🇺 Русский</button>
        <button onClick={() => handleLanguageSelect('de')}>🇩🇪 Deutsch</button>
        <button onClick={() => handleLanguageSelect('tr')}>🇹🇷 Türkçe</button>
      </div>
    </div>
  )
  }

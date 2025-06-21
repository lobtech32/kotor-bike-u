// pages/language.js
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function LanguagePage() {
  const router = useRouter()

  const selectLanguage = (lang) => {
    localStorage.setItem('lang', lang)

    // URL'deki source ve id parametrelerini al
    const params = new URLSearchParams(window.location.search)
    const source = params.get('source')
    const id = params.get('id')

    // Geri dönülecek URL'yi oluştur
    let redirectURL = '/bike'
    if (source) {
      redirectURL += `?source=${source}`
      if (id) redirectURL += `&id=${id}`
      redirectURL += `&lang=${lang}`
    } else {
      redirectURL += `?lang=${lang}`
    }

    router.push(redirectURL)
  }

  // Eğer kullanıcı daha önce dil seçmişse otomatik yönlendir
  useEffect(() => {
    const storedLang = localStorage.getItem('lang')
    const params = new URLSearchParams(window.location.search)
    const source = params.get('source')
    const id = params.get('id')

    if (storedLang && source) {
      let redirectURL = `/bike?source=${source}`
      if (id) redirectURL += `&id=${id}`
      redirectURL += `&lang=${storedLang}`
      router.push(redirectURL)
    }
  }, [])

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Select Language / Dil Seçin</h1>
      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <button onClick={() => selectLanguage('me')}>🇲🇪 Crnogorski</button>
        <button onClick={() => selectLanguage('en')}>🇬🇧 English</button>
        <button onClick={() => selectLanguage('ru')}>🇷🇺 Русский</button>
        <button onClick={() => selectLanguage('de')}>🇩🇪 Deutsch</button>
        <button onClick={() => selectLanguage('tr')}>🇹🇷 Türkçe</button>
      </div>
    </div>
  )
  }

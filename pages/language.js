import { useRouter } from 'next/router'

const languages = [
  { code: 'me', label: 'Crnogorski' },
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'de', label: 'Deutsch' },
  { code: 'tr', label: 'Türkçe' },
]

export default function LanguageSelector() {
  const router = useRouter()

  function selectLanguage(code) {
    // Dil seçildiğinde anasayfaya veya bike1 sayfasına dil parametresi ile yönlendir
    router.push(`/bike1?lang=${code}`)
  }

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{ marginBottom: 30 }}>Lütfen Dilinizi Seçin</h1>
      <div style={{ display: 'flex', gap: 20 }}>
        {languages.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => selectLanguage(code)}
            style={{
              padding: '12px 24px',
              fontSize: 18,
              borderRadius: 8,
              border: '2px solid #333',
              background: 'white',
              cursor: 'pointer',
              minWidth: 120,
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

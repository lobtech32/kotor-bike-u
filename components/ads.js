// components/Ads.js
export default function Ads({ t }) {
  return (
    <div className="p-4 bg-yellow-100 shadow rounded mt-4">
      <h2 className="text-lg font-semibold mb-2">{t('sponsored')}</h2>
      <ul>
        <li>🍹 Sunset Bar</li>
        <li>⛵ Yacht Tours</li>
        <li>🍽️ Local Restaurants</li>
      </ul>
    </div>
  )
}

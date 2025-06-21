// components/MapView.js
export default function MapView({ t }) {
  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <h2 className="text-xl font-bold mb-2">{t('bike_map_title')}</h2>
      <div className="bg-gray-200 h-40 flex items-center justify-center">[Harita yeri]</div>
    </div>
  )
}

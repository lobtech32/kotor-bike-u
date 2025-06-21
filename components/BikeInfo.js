// components/BikeInfo.js
export default function BikeInfo({ t }) {
  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <h2 className="text-xl font-bold mb-2">{t('bike_info_title')}</h2>
      <p>{t('battery_status')}: 80%</p>
      <p>{t('rental_options')}</p>
      <ul className="list-disc pl-5">
        <li>{t('unlimited_rental')}</li>
        <li>1 saat = 1€</li>
        <li>6 saat = 5€</li>
        <li>24 saat = 15€</li>
      </ul>
    </div>
  )
}

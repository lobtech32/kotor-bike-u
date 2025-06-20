import React from "react";
import { useRouter } from "next/router";

export default function StartPage() {
  const router = useRouter();
  const { lang, phone } = router.query;

  const rentalOptions = [
    { title: "1€ + 0.40€/min", description: "Flexible duration", color: "bg-green-500", value: "flex" },
    { title: "1 Hour - 15€", description: "Fixed 1 hour rental", color: "bg-blue-500", value: "1h" },
    { title: "12 Hours - 25€", description: "Half day rental", color: "bg-purple-500", value: "12h" },
  ];

  const offers = [
    { title: "Boat Tour", description: "From 10€", color: "bg-yellow-100" },
    { title: "Bar Promo", description: "Free shot with this bike!", color: "bg-red-100" },
    { title: "Dinner Deal", description: "10% off local food", color: "bg-green-100" },
  ];

  const handleRentalSelect = (optionValue) => {
    router.push(`/rental?lang=${lang}&phone=${encodeURIComponent(phone)}&opt=${optionValue}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-4 bg-white">
        <h2 className="text-xl font-bold mb-4 text-center">Select Rental Option</h2>
        <div className="grid grid-cols-1 gap-4">
          {rentalOptions.map((option, idx) => (
            <button
              key={idx}
              className={\`text-white p-4 rounded-xl shadow \${option.color} hover:opacity-90\`}
              onClick={() => handleRentalSelect(option.value)}
            >
              <div className="text-lg font-bold">{option.title}</div>
              <div className="text-sm">{option.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 bg-gray-50 border-t">
        <h2 className="text-lg font-semibold mb-2">Nearby Offers</h2>
        <div className="grid grid-cols-1 gap-3">
          {offers.map((offer, idx) => (
            <div key={idx} className={\`p-3 rounded-lg shadow \${offer.color}\`}>
              <div className="font-bold text-md">{offer.title}</div>
              <div className="text-sm">{offer.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

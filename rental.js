import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

export default function RentalPage() {
  const router = useRouter();
  const { lang, phone, opt } = router.query;

  const optionsDetails = {
    flex: { name: "Flexible", startFee: 1, perMin: 0.4, maxMinutes: null },
    "1h": { name: "1 Hour", startFee: 15, perMin: 0, maxMinutes: 60 },
    "12h": { name: "12 Hours", startFee: 25, perMin: 0, maxMinutes: 720 },
  };

  const option = optionsDetails[opt] || optionsDetails.flex;

  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const minutesElapsed = Math.floor(secondsElapsed / 60);
  const secondsDisplay = secondsElapsed % 60;
  let cost = option.startFee;
  if (option.perMin) {
    cost += minutesElapsed * option.perMin;
  }
  cost = cost.toFixed(2);

  const calories = (minutesElapsed * 8).toFixed(0);
  const distance = ((minutesElapsed / 60) * 15).toFixed(2);
  const maxTimeReached = option.maxMinutes !== null && minutesElapsed >= option.maxMinutes;

  const handleFinish = () => {
    setIsRunning(false);
    alert(`Rental finished! Total cost: €${cost}`);
    router.push(`/thankyou?lang=${lang}`);
  };

  return (
    <div className="flex flex-col min-h-screen p-4 bg-white">
      <h2 className="text-xl font-bold mb-4">Rental in Progress ({option.name})</h2>
      <div className="text-lg mb-2">
        Time: {minutesElapsed}m {secondsDisplay}s
      </div>
      <div className="text-lg mb-2">Cost: €{cost}</div>
      {option.maxMinutes && (
        <div className="text-sm mb-2 text-red-600">
          Max rental time: {option.maxMinutes} minutes
        </div>
      )}
      <div className="text-lg mb-2">Calories burned: {calories} cal</div>
      <div className="text-lg mb-4">Distance: {distance} km</div>
      <button
        onClick={handleFinish}
        className="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700"
      >
        Finish Rental
      </button>
      {maxTimeReached && (
        <div className="mt-4 p-3 bg-yellow-100 text-yellow-900 rounded">
          Maximum rental time reached. Please finish your rental.
        </div>
      )}
    </div>
  );
}

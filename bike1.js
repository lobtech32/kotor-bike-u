import React, { useState } from "react";
import { useRouter } from "next/router";

export default function LanguageSelector() {
  const router = useRouter();
  const [step, setStep] = useState("language");
  const [selectedLang, setSelectedLang] = useState(null);
  const [phone, setPhone] = useState("");

  const languages = [
    { code: "me", name: "Crnogorski", flag: "🇲🇪" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  ];

  const handleLanguageSelect = (code) => {
    setSelectedLang(code);
    setStep("phone");
  };

  const handleContinue = () => {
    router.push(`/start?lang=${selectedLang}&phone=${encodeURIComponent(phone)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      {step === "language" && (
        <>
          <h1 className="text-2xl font-bold mb-8">Please Select Language</h1>
          <div className="grid grid-cols-2 gap-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className="flex flex-col items-center justify-center border p-4 rounded-xl shadow hover:bg-gray-100"
              >
                <span className="text-4xl mb-2">{lang.flag}</span>
                <span className="text-lg font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {step === "phone" && (
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Enter WhatsApp Number</h1>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+382 68 123 456"
            className="w-full p-3 border rounded-xl mb-4 text-lg"
          />
          <button
            onClick={handleContinue}
            className="w-full bg-blue-600 text-white p-3 rounded-xl text-lg hover:bg-blue-700"
            disabled={!phone.trim()}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

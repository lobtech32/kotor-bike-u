import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Start() {
  const router = useRouter();
  const { source } = router.query;
  const [lang, setLang] = useState(null);

  const languages = [
    { code: "me", name: "Crnogorski", flag: "🇲🇪" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  ];

  const [phone, setPhone] = useState("");

  function t(key) {
    const tr = {
      enter: "WhatsApp numaranı gir",
      button: "Devam",
    };
    const en = {
      enter: "Enter your WhatsApp number",
      button: "Continue",
    };
    const ru = {
      enter: "Введите свой номер WhatsApp",
      button: "Продолжить",
    };
    const de = {
      enter: "Geben Sie Ihre WhatsApp-Nummer ein",
      button: "Weiter",
    };
    const me = {
      enter: "Unesite svoj WhatsApp broj",
      button: "Nastavi",
    };
    const dict = { tr, en, ru, de, me };
    return dict[lang]?.[key] || key;
  }

  if (!lang) {
    return (
      <div style={{ padding: 20, textAlign: "center", fontFamily: "Arial" }}>
        <h2>Dil Seç / Choose Language</h2>
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            style={{
              margin: 10,
              fontSize: 24,
              padding: 10,
              width: 180,
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {l.flag} {l.name}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial", textAlign: "center" }}>
      <h2>{t("enter")}</h2>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+382..."
        style={{ padding: 10, fontSize: 18, marginBottom: 20, width: "80%" }}
      />
      <br />
      <button
        style={{ padding: 10, fontSize: 18 }}
        onClick={() =>
          router.push(`/rent?lang=${lang}&source=${source || "unknown"}`)
        }
      >
        {t("button")}
      </button>
    </div>
  );
     }

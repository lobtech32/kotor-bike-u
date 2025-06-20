// pages/start.js import { useRouter } from "next/router"; import { useState } from "react";

const languageText = { me: { label: "Unesite WhatsApp broj", button: "Nastavi" }, en: { label: "Enter your WhatsApp number", button: "Continue" }, ru: { label: "Введите номер WhatsApp", button: "Продолжить" }, de: { label: "WhatsApp-Nummer eingeben", button: "Weiter" }, tr: { label: "WhatsApp numaranızı girin", button: "Devam Et" }, };

const langs = ["me", "en", "ru", "de", "tr"]; const flags = { me: "🇲🇪", en: "🇬🇧", ru: "🇷🇺", de: "🇩🇪", tr: "🇹🇷", };

export default function Start() { const router = useRouter(); const [lang, setLang] = useState("tr"); const [phone, setPhone] = useState("");

const handleSubmit = (e) => { e.preventDefault(); const source = router.query.source || "bike"; const bikeId = router.query.bikeId || null; const query = { lang, phone }; if (bikeId) query.bikeId = bikeId;

if (!phone) return alert(languageText[lang].label);

// Locale'yi URL'ye taşıyarak yönlendirme yapıyoruz
if (source === "brochure") {
  router.push({ pathname: "/map", query });
} else {
  router.push({ pathname: "/bike1", query });
}

};

return ( <div style={{ textAlign: "center", marginTop: "2rem" }}> <h2>Select Language</h2> <div style={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1rem" }}> {langs.map((l) => ( <button key={l} onClick={() => setLang(l)}>{flags[l]}</button> ))} </div>

<form onSubmit={handleSubmit}>
    <h3>{languageText[lang].label}</h3>
    <input
      type="tel"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      placeholder="+382 6x xxx xxx"
      style={{ padding: "0.5rem", fontSize: "1rem" }}
    /><br />
    <button style={{ marginTop: "1rem", padding: "0.5rem 1rem" }} type="submit">
      {languageText[lang].button}
    </button>
  </form>
</div>

); }


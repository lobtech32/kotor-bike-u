// pages/start.js import { useRouter } from "next/router"; import { useEffect, useState } from "react";

const texts = { me: "Unesite WhatsApp broj", en: "Enter WhatsApp number", ru: "Введите WhatsApp номер", de: "WhatsApp-Nummer eingeben", tr: "WhatsApp numaranızı girin", };

const langs = ["me", "en", "ru", "de", "tr"]; const flags = { me: "🇲🇪", en: "🇬🇧", ru: "🇷🇺", de: "🇩🇪", tr: "🇹🇷", };

export default function Start() { const router = useRouter(); const [selectedLang, setSelectedLang] = useState("tr"); const [phone, setPhone] = useState("");

const handleSubmit = (e) => { e.preventDefault(); const source = router.query.source || "bike"; const bikeId = router.query.bikeId || null;

if (!phone) {
  alert(texts[selectedLang]);
  return;
}

const query = { lang: selectedLang, phone };
if (bikeId) query.bikeId = bikeId;

if (source === "brochure") {
  router.push({ pathname: "/map", query });
} else {
  router.push({ pathname: "/bike1", query });
}

};

return ( <div style={{ textAlign: "center", marginTop: "2rem" }}> <h2>Dil / Language</h2> <div style={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1rem 0" }}> {langs.map((lang) => ( <button key={lang} onClick={() => setSelectedLang(lang)}> {flags[lang]} </button> ))} </div> <form onSubmit={handleSubmit}> <h3>{texts[selectedLang]}</h3> <input type="tel" placeholder="+382 6xx xxx xxx" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ padding: "0.5rem", fontSize: "1rem" }} /> <br /> <button type="submit" style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}> Devam Et </button> </form> </div> ); }


import { useRouter } from "next/router";

const languages = [
  { code: "me", label: "Crnogorski", flag: "🇲🇪" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
];

export default function Home() {
  const router = useRouter();

  const selectLang = (code) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", code);
    }
    router.push({
      pathname: "/whatsapp",
      query: { lang: code },
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>Dil Seçiniz / Select Language</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}>
        {languages.map(({ code, label, flag }) => (
          <button
            key={code}
            onClick={() => selectLang(code)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            <div>{flag}</div>
            <div style={{ marginTop: "0.5rem", fontWeight: "bold" }}>{label}</div>
          </button>
        ))}
      </div>
    </div>
  );
      }

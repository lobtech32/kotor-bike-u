import { useRouter } from "next/router";

export default function RentPage() {
  const router = useRouter();
  const { lang, source } = router.query;

  const t = (key) => {
    const dict = {
      tr: {
        title: "Kiralama Sayfası",
        source: "Kaynak: ",
      },
      en: {
        title: "Rental Page",
        source: "Source: ",
      },
      ru: {
        title: "Страница аренды",
        source: "Источник: ",
      },
      de: {
        title: "Mietseite",
        source: "Quelle: ",
      },
      me: {
        title: "Stranica za iznajmljivanje",
        source: "Izvor: ",
      },
    };
    return dict[lang]?.[key] || key;
  };

  return (
    <div style={{ padding: 20, textAlign: "center", fontFamily: "Arial" }}>
      <h2>{t("title")}</h2>
      <p>{t("source")} {source || "?"}</p>
    </div>
  );
            }

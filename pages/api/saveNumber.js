export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Sadece POST istekleri kabul edilir." });
  }

  const { phone, lang, source } = req.body;

  if (!phone) {
    return res.status(400).json({ error: "Telefon numarası gerekli." });
  }

  const message = `📲 Yeni WhatsApp numarası:
Numara: ${phone}
Dil: ${lang || "bilinmiyor"}
Kaynak: ${source || "bilinmiyor"}`;

  try {
    const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error("Telegram bilgileri eksik");
    }

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    const json = await response.json();
    if (!json.ok) throw new Error(json.description);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Telegram gönderim hatası:", err);
    return res.status(500).json({ error: "Mesaj gönderilemedi" });
  }
}

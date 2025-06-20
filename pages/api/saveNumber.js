export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Sadece POST istekleri kabul edilir." });
  }

  const { phone, lang, source } = req.body;

  if (!phone) {
    return res.status(400).json({ error: "Telefon numarası gerekli." });
  }

  const message = `📲 Yeni WhatsApp numarası:\nNumara: ${phone}\nDil: ${lang || "bilinmiyor"}\nKaynak: ${source || "bilinmiyor"}`;

  try {
    const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
      console.log("Telegram token veya chat_id eksik!");
      throw new Error("Telegram bilgileri eksik");
    }

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    console.log("Telegram mesajı gönderiliyor:", message);

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Telegram API hatası:", errorText);
      throw new Error("Telegram API isteği başarısız");
    }

    console.log("Telegram mesajı başarıyla gönderildi.");
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Telegram gönderim hatası:", err);
    return res.status(500).json({ error: "Mesaj gönderilemedi" });
  }
}

export default async function handler(req, res) {
  const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const message = "✅ Telegram bağlantı testi başarılı!";

  try {
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      return res.status(500).json({ success: false, error: data });
    }

    return res.status(200).json({ success: true, message: "Gönderildi!" });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}

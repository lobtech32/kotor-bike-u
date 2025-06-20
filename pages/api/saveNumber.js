import { sendTelegramMessage } from "../../utils/telegram";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { phone, lang, source } = req.body;

    const message = `Yeni numara geldi:\nTelefon: ${phone}\nDil: ${lang}\nKaynak: ${source}`;

    try {
      await sendTelegramMessage(message);
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: "Telegram'a mesaj gönderilemedi.", details: err });
    }
  } else {
    res.status(405).json({ error: "Sadece POST istekleri kabul edilir." });
  }
}
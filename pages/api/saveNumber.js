import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { phone, lang, source } = req.body;

    const data = {
      phone,
      lang,
      source,
      timestamp: new Date().toISOString(),
    };

    const filePath = path.join(process.cwd(), "data", "numbers.json");

    try {
      if (!fs.existsSync(path.dirname(filePath))) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
      }

      let existingData = [];
      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, "utf8");
        existingData = JSON.parse(fileData);
      }

      existingData.push(data);

      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
      return res.status(200).json({ success: true, data });
    } catch (err) {
      return res.status(500).json({ error: "Dosya yazılamadı", details: err });
    }
  } else {
    res.status(405).json({ error: "Sadece POST isteği kabul edilir" });
  }
}

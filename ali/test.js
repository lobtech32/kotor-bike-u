export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Gelen veri:", req.body); // Konsola yaz
    res.status(200).json({ success: true, received: req.body });
  } else {
    res.status(405).json({ error: "Sadece POST istekleri kabul edilir." });
  }
}

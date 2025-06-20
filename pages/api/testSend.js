import { useState } from "react";

export default function TestSend() {
  const [result, setResult] = useState("");

  const handleTest = async () => {
    const response = await fetch("/api/saveNumber", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: "+38269000000",
        lang: "tr",
        source: "test-page",
      }),
    });

    const data = await response.json();
    setResult(JSON.stringify(data));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Telegram Gönderim Testi</h2>
      <button onClick={handleTest}>TEST GÖNDER</button>
      <pre>{result}</pre>
    </div>
  );
}

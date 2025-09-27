import express from "express";

const app = express();
const PORT = 3000;

// Функция НОД (на BigInt)
function gcd(a, b) {
  return b === 0n ? a : gcd(b, a % b);
}

// Функция НОК (на BigInt)
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

app.get("/loskytov2000_gmail_com", (req, res) => {
  try {
    const a = BigInt(req.query.x);
    const b = BigInt(req.query.y);

    if (a <= 0n || b <= 0n) {
      return res.send("NaN");
    }

    res.send(lcm(a, b).toString());
  } catch {
    // если не удалось преобразовать в BigInt
    res.send("NaN");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

import express from "express";

const app = express();
const PORT = 3000;

// Функция НОД
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// Функция НОК
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

app.get("/loskytov2000_gmail_com", (req, res) => {
    const { x, y } = req.query;

    const a = Number(x);
    const b = Number(y);

    if (!Number.isInteger(a) || a <= 0 || !Number.isInteger(b) || b <= 0) {
        return res.send("NaN");
    }

    res.send(lcm(a, b).toString());
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

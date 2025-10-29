import express from "express";

const app = express();

app.get("/api/hello", (_, res) => res.json({ message: "Hello from Express!" }));
app.listen(3000, () => console.log("Server running on port 3000"));
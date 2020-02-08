const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ message: "boa" }));

app.get("/app", (req, res) => res.json({ message: "boa" }));

app.listen(3000, () => console.log("listening"));

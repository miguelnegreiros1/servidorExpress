const express = require("express");
const path = require("path");

const app = express();
const publicDir = path.join(__dirname, "public");

const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.redirect("/birds");
});

app.get("/birds", function (req, res) {
    res.sendFile(path.join(publicDir, "birds.html"));
});

app.get("/reptiles", function (req, res) {
    res.sendFile(path.join(publicDir, "reptiles.html"));
});

app.get("/crustaceans", function (req, res) {
    res.sendFile(path.join(publicDir, "crustaceans.html"));
});

app.use(express.static(publicDir));

app.listen(PORT, '0.0.0.0', function () {
    console.log("Servidor iniciado!");
});



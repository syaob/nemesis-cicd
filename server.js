// server.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // <--- MODIFIEZ CETTE LIGNE

app.get("/", (req, res) => {
  res.send("Hello World from cloud campus nemesis v2! branch dev modification");
});

app.get("/nemesis", (req, res) => {
  res.send("route nemesis");
});

// Le garde pour ne pas démarrer le serveur lors de l'importation par les tests
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

module.exports = app;

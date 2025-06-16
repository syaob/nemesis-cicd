//mise en place code express API
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World from cloud campus nemesis v2! branch dev modification");
});

app.get("/nemesis", (req, res) => {
  res.send("route nemesis");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;

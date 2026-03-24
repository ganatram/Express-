const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Route - home page
app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("Welcome to ML Travels");
});

//Route - about page
app.get("/about", (req, res) => {
  res.type("text/plain");
  res.send("About - ML Travels");
});

// custom 404 page
app.use((req, res) => {
  // middleware - fallback
  res.type("text/plain");
  res.status(404);
  res.send("404 not found");
});

// custom 500 page
app.use((err, req, res, next) => {
  // middleware - fallback
  console.log(err.message);
  res.type("text/plain");
  res.status(500);
  res.send("500 - Server Error");
});

app.listen(port, () => console.log(`express started on ${port} `));

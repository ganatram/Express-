const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
app.engine("hbs", engine({ extname: "hbs" }));
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 3000;

/* app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("ML Travel");
}); */

app.get("/", (req, res) => res.render("home"));

/* app.get("/about/contact", (req, res) => {
  res.type("text/plain");
  res.send("About ML Travel - Contact us");
}); */

/* app.get("/about/directions", (req, res) => {
  res.type("text/plain");
  res.send("About ML Travel - Directions");
}); */

/* app.get("/about", (req, res) => {
  res.type("text/plain");
  res.send("About ML Travel");
}); */

app.get("/about", (req, res) => res.render("about"));

// custom 404 page
/* app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
}); */

app.use((req, res) => {
  res.status(404);
  res.render("404");
});

// custom 500 page
/* app.use((err, req, res, next) => {
  console.error(err.message);
  res.type("text/plain");
  res.status(500);
  res.send("500 - Server Error");
}); */
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render("500");
});

app.listen(port, () =>
  console.log(
    `Express started on http://localhost:${port}; ` +
      `press Ctrl-C to terminate.`,
  ),
);

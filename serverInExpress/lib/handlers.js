const fortune = require("./fortune");

exports.home = (req, res) => res.render("home");

exports.about = (req, res) => {
  // const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render("about", { fortune: fortune.getFortune() });
};

exports.notFound = (req, res) => res.render("404");

exports.serverError = (err, req, res, next) => res.render("500");

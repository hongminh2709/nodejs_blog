const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const hbs = require("express-handlebars");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//dinh nghia tuyen duong
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

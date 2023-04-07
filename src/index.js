const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const hbs = require("express-handlebars");
const port = 3000;

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// ngoai ra con nhung thu vien khac de gui du lieu len server
// XMLHttpRequest, fetch, axios

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

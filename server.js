var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname));

// routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/assetDetail", (req, res) => {
  res.render("assetDetail");
});
app.get("/events", (req, res) => {
  res.render("events");
});

app.listen(port, () => {
  console.log("App is running on port " + port);
});

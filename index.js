const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Tudo ok com nodemon");
});

app.listen(4000, function () {
  console.log("App listening on port 4000!");
});

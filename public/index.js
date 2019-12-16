const path = require("path");
const express = require("express");
const app = express();

app.get("", (request, response) => {
  response.send("Thami likes bagels with cream cheese.");
});

app.get("/thamisucks", (request, response) => {
  response.send("Thami likes bagels with cream cheese.");
});

app.listen(3000, (request, response) => {
  console.log("Listening on Port 3000");
});

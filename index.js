const app = require("./app");
const express = require("express");

app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Started express server at port 3000");
});

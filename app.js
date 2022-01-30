const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const compiler = require("compilex");

var app = express();
app.use(bodyParser());

var option = { status: true };
compiler.init(option);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/compiledCode", (req, res) => {
  var code = req.body.code;
  var input = req.body.input;
  var inputRadio = req.body.inputRadio;
});

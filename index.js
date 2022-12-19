const express = require("express");
const app = express();
const port = process.env.Port || 3000;
app.get("/", (req, res) => {
  res.send("hello from backend!");
});

app.get("/add", (req, res) => {
  let value1 = parseInt(req.query.num1);
  let value2 = parseInt(req.query.num2);
  let result = value1 + value2;
  res.send({
    message: "addition operation triggered",
    result: result,
  });
});

app.get("/subtract", (req, res) => {
  let value1 = parseInt(req.query.num1);
  let value2 = parseInt(req.query.num2);
  let result = value1 - value2;
  res.send({
    message: "addition operation triggered",
    result: result,
  });
});

app.get("/multiply", (req, res) => {
  let value1 = parseInt(req.query.num1);
  let value2 = parseInt(req.query.num2);
  let result = value1 * value2;
  res.send({
    message: "addition operation triggered",
    result: result,
  });
});

app.listen(port, () => {
  console.log("nordstone app is listening on port", port);
});

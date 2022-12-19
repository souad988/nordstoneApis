const express = require("express");
const serverless = require("serverless-http");
const app = express();
const port = process.env.Port || 3000;
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from backend!");
});

router.get("/add", (req, res) => {
  let value1 = parseInt(req.query.num1);
  let value2 = parseInt(req.query.num2);
  let result = value1 + value2;
  res.send({
    message: "addition operation triggered",
    result: result,
  });
});

router.get("/subtract", (req, res) => {
  let value1 = parseInt(req.query.num1);
  let value2 = parseInt(req.query.num2);
  let result = value1 - value2;
  res.send({
    message: "addition operation triggered",
    result: result,
  });
});

router.get("/multiply", (req, res) => {
  let value1 = parseInt(req.query.num1);
  let value2 = parseInt(req.query.num2);
  let result = value1 * value2;
  res.send({
    message: "addition operation triggered",
    result: result,
  });
});

// router.listen(port, () => {
//   console.log("nordstone app is listening on port", port);
// });

app.use("/", router);
module.exports.handler = serverless(app);

// [[redirects]];
// force = true;
// to = "/.netlify/functions/apis/:splat";
// from = "/*";
// status = 200;

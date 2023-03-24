const express = require("express");
const path = require("path");
const router = express.Router();

const app = express();

// app.use(express.static(__dirname + "/static"));

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("<h1>This is Express</h1>");
});

router.get("/aq", function (req, res, next) {
  res.sendFile(path.resolve(__dirname, "static", "aq.html"));
});

router.get("/ss", function (req, res, next) {
  res.sendFile(path.resolve(__dirname, "static", "ss.html"));
});

router.get("/abb", function (req, res, next) {
  res.send("<h2>This is Express №1</h2>");
});

router.use("/axx", function (req, res, next) {
  res.status(404).send(`Ahahahahah lol`);
});

router.get("/add", function (req, res, next) {
  // console.log(req.params);
  res.status(200).send("respond with a resource");
});

module.exports = router;

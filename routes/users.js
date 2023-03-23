const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("<h1>This is Express</h1>");
  // console.log(req.params);
  // res.status(200).send("respond with a resource");
});

module.exports = router;

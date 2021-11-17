const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("all the tasks responses form the database");
});

module.exports = router;

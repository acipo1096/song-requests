const express = require("express");
const router = express.Router();
const { getSongs } = require("../controllers/songController");
router.route("/").get(getSongs);

module.exports = router;

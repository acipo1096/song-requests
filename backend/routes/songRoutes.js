const express = require("express");
const router = express.Router();
const { getSong } = "../controllers/songController.js";

router.route("/").get(getSong);

module.exports = router;

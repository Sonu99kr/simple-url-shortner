const express = require("express");
const {handleGeneratNewShortUrl, handleGetAnalytic} = require("../controllers/url")
const router = express.Router();

router.post("/", handleGeneratNewShortUrl);
router.get("/analytics/:shortId", handleGetAnalytic)

module.exports = router;
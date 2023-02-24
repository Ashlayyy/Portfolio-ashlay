const express = require("express");
const router = express.Router();
const path = require("path");
const functions = require("./functions");

/*
    Homepage
*/
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', 'html/index.html'));
});

module.exports = router;
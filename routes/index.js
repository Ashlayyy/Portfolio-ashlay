/* eslint-disable no-unused-vars */
const express = require("express");
const router = express.Router();
const path = require("path");

/*
    Homepage
*/
router.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/html/index.html'));
});

module.exports = router;
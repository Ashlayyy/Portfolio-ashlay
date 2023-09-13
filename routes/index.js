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

router.get("/project", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/html/project.html'));
});

module.exports = router;
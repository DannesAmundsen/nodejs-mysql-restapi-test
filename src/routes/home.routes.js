const express = require("express");
const router = express.Router();
const { root, ping } = require("../controllers/home.controller");

router.use((req, res, next) => {
  next();
});

router.get("/", root);

router.get("/ping", ping);

module.exports = router;

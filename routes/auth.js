const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    res.status(200).json({ jwt: "123abc" });
  } catch (error) {}
});

module.exports = router;

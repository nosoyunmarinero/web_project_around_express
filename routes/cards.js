const express = require("express");
const fs = require('fs');
const path = require('path');

const router = express.Router();

const filePath = path.join(__dirname, '..' ,'data', 'cards.json');
const cards = JSON.parse(fs.readFileSync(filePath, 'utf8'));

router.get("/", (req, res) => {
  res.json(cards);
});

module.exports = router;
const express = require("express");
const fs = require('fs');
const path = require('path');

const router = express.Router();

const filePath = path.join(__dirname, '..' ,'data', 'users.json');
const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = users.find(u => u._id === req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "ID de usuario no encontrado" });
  }
});

module.exports = router;
const express = require("express");
//const fs = require('fs');

const router = express.Router();

//Controllers
const {createCard, getCards, deleteCard} = require('../controllers/cards');

router.get("/", getCards)
router.post("/", createCard);
router.delete("/:id", deleteCard)

module.exports = router;
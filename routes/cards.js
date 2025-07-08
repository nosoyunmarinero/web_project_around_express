const express = require("express");
//const fs = require('fs');

const router = express.Router();

//Controllers
const {createCard, getCards, deleteCard, likeCard, dislikeCard} = require('../controllers/cards');

router.get("/", getCards);
router.post("/", createCard);
router.delete("/:id", deleteCard);
router.put("/:id/likes", likeCard);
router.delete("/:id/likes", dislikeCard)

module.exports = router;
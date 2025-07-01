const express = require("express");
const fs = require('fs');
const path = require('path');

const router = express.Router();
const Card = require("../models/cards")

const filePath = path.join(__dirname, '..' ,'data', 'cards.json');
const cards = JSON.parse(fs.readFileSync(filePath, 'utf8'));

router.get("/", (req, res) => {
  res.json(cards);
});

router.post("/", (req, res) => {
const {name, link, owner, likes, createdAt} = req.body;

  Card.create({name, link, owner, likes, createdAt})
  .then(card => res.status(201).send({data: card}))
  .catch(err => res.status(500).send({message: 'Error al crear card'}))
});

router.delete("/:id", (req, res) => {
  Card.findByIdAndRemove(req.params.id)
  .then(card => {
      if (!card){
        return res.status(404).send({message: "Card no encontrada"});
      }
   res.send({ data: card });
    })
  .catch(err => res.status(500).send({ message: 'Error' }));
});

module.exports = router;
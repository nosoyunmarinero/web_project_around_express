const Card = require('../models/cards')

//Manejo de errores
const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const SERVER_ERROR = 500;

//Create (POST)
module.exports.createCard = (req, res) => {

const {name, link} = req.body;
  Card.create({name, link, owner: req.user._id})
  .then(card => res.status(201).send({data: card}))
  .catch(err => {
    console.log(err.name);

    if(err.name === 'ValidationError'){
      return res.status(BAD_REQUEST).send({message: 'Datos no validos al crear la card'})
    }
    res.status(SERVER_ERROR).send({message: 'Error al crear card :('})})
};

//Delete (DELETE)
module.exports.deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then(card => {
        if (!card){
          return res.status(NOT_FOUND).send({message: "Card no encontrada"});
        }
     res.send({ data: card, message: 'Card eliminada con exito' });
      })
    .catch(err => {
      console.log(err.name);

      return err.name === 'CastError'
      ? res.status(BAD_REQUEST).send({message: 'Datos no validos al eliminar card'})
      : res.status(SERVER_ERROR).send({ message: 'Error al eliminar la card' })});
}

//GET
module.exports.getCards = (req, res) => {
  Card.find({})
    .then(cards => res.send({ data: cards }))
    .catch(err => {
      console.log(err);
      res.status(SERVER_ERROR).send({ message: 'Error al obtener las cards' });
    });
}
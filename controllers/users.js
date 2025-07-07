const Users = require ('../models/users')

//Manejo de errores
const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const SERVER_ERROR = 500;

//Get
module.exports.getUsers = (req, res) => {
  Users.find({})
  .then(users => res.send({data: users}))
  .catch(() => res.status(SERVER_ERROR).send({message: 'Error al obtener Usuarios'}))
}

//GET by ID
module.exports.getUserById = (req, res) => {
  const user = Users.find(u => u._id === req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(NOT_FOUND).json({ error: "ID de usuario no encontrado" });
    }
}

//Create User
module.exports.createUser = (req, res) => {
  const {name, about, avatar} = req.body;

  Users.create({name, about, avatar})
  .then(user => res.status(201).send({data: user}))
  .catch(err =>{
    console.log(err.name)

    return err.name === "ValidationError"
    ? res.status(BAD_REQUEST).send({message: 'Datos no validos'})
    : res.status(SERVER_ERROR).send({message: 'Se producio un Error interno :c'})})
}
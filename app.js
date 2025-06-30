const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Base de datos
mongoose.connect("mongodb://localhost:27017/aroundb")



// Rutas
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Recurso solicitado no encontrado' });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});



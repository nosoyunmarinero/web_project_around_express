const express = require("express");
//const fs = require('fs');

const router = express.Router();
const User = require("../models/users")

//Controllers
const {getUsers, getUserById, createUser} = require('../controllers/users')

router.get("/", getUsers)

router.get("/:id", getUserById)

router.post("/", createUser)

module.exports = router;
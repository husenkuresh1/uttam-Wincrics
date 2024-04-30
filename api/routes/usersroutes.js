const express = require('express');
const UserController = require('../controller/userscontroller');

const usersroute = express.Router();

// Create a new user
usersroute.post('/', UserController.create);

// Get all users
usersroute.get('/', UserController.getAll);

// Get a user by ID
usersroute.get('/:id', UserController.getById);

// Update a user by ID
usersroute.put('/:id', UserController.update);

// Delete a user by ID
usersroute.delete('/:id', UserController.delete);

module.exports = usersroute;

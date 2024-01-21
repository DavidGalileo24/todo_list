const express = require('express');
const TaskController = require('../controllers/TaskController');

const route = express.Router();

route.get('/tasks', TaskController.getTasks);

module.exports = route;
const express = require('express');
const TaskController = require('../controllers/TaskController');

const route = express.Router();

route.get('/tasks', TaskController.getTasks);
route.get('/tasks/:id', TaskController.getTaskById);
route.post('/tasks', TaskController.storeTask);
route.put('/tasks/:id', TaskController.updateTask);
route.delete('/tasks/:id', TaskController.deleteTask);

module.exports = route;
const express = require('express');
const tasksController = require('./controllers/taskscontroller');

const router = express.Router();

router.get('/tasks', tasksController.getAll);

module.exports = router;


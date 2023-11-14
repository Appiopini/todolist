const tasksModel = require('../models/tasksModel');

const getAll = async (_request, reponse) => {
  
  const tasks = await tasksModel.getAll();

  return reponse.status(200).json(tasks);
};

const createTask = async (request, response) => {
  // const createTask = await tasksModel.createTask();
  return response.status(201).json(request.body);
};


module.exports = {
  getAll,
  createTask
};
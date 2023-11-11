const tasksModel = require('../models/tasksModel');

const getAll = async (request, reponse) => {
  
  const tasks = await tasksModel.getAll();

  return reponse.status(200).json(tasks);
};


module.exports = {
  getAll
};
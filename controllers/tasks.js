const Tasks = require("../models/tasksModel");

//instead of writing the all code inside  same file,we're just spreding the work among diffrent files so that
//our code is more maintainable and testable
//this is a controller file where the all the middleware logics are present
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

//controller for posting the task

const postTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).send(err);
  }
};

//getting the task by its ID

const getTasksById = async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.id).exec();
    if (!task) {
      return res.status(404).json({ msg: `id Not Found! ${req.params.id}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

//patch request to the server for updating a single id

const patchTasks = (req, res) => {
  res.send("patch request to the server for updating a single id");
};

//deleting the tasks when they are completed

const deleteTasks = async (req, res) => {
  try {
    const deleted = await Tasks.findOneAndDelete({ _id: req.params.id });
    //if the mentioned id doest match in database
    if (!deleted) {
      return res.status(404).res(`Coudn't deal with id ${req.params.id}`);
    }
    res.status(200).send("Task Deleted!");
  } catch (error) {
    res.status(500).send("Task is not deleted");
  }
};

module.exports = {
  getAllTasks,
  postTask,
  getTasksById,
  patchTasks,
  deleteTasks,
};

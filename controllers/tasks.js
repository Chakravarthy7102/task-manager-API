const Tasks = require("../models/tasksModel");
const asyncWrapper = require("../middlewares/async");

//instead of writing the all code inside  same file,we're just spreding the work among diffrent files so that
//our code is more maintainable and testable
//this is a controller file where the all the middleware logics are present
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Tasks.find();
  res.status(200).json({ tasks });
});

//controller for posting the task

const postTask = asyncWrapper(async (req, res) => {
  const task = await Tasks.create(req.body);
  res.status(201).json({ task });
});

//getting the task by its ID

const getTasksById = asyncWrapper(async (req, res) => {
  const task = await Tasks.findById(req.params.id).exec();
  if (!task) {
    return res.status(404).json({ msg: `id Not Found! ${req.params.id}` });
  }
  res.status(200).json({ task });
});

//deleting the tasks when they are completed

const deleteTasks = asyncWrapper(async (req, res) => {
  const deleted = await Tasks.findOneAndDelete({ _id: req.params.id });
  //if the mentioned id doest match in database
  if (!deleted) {
    return res.status(404).res(`Coudn't deal with id ${req.params.id}`);
  }
  res.status(200).send("Task Deleted!");
});

//patch request to the server for updating a single id ididi

const patchTasks = asyncWrapper(async (req, res) => {
  const { id: tasksId } = req.params;
  const query = { _id: tasksId };
  const task = await Tasks.findOneAndUpdate(query, req.body, {
    runValidators: true,
    new: true,
  });
  if (!task) {
    return res.status(404).res(`Coudn't deal with id ${req.params.id}`);
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  postTask,
  getTasksById,
  patchTasks,
  deleteTasks,
};

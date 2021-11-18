//instead of writing the all code inside  same file,we're just spreding the work among diffrent files so that
//our code is more maintainable and testable
//this is a controller file where the all the middleware logics are present
const getAllTasks = (req, res) => {
  res.json({
    name: "chakravarhty",
    color: "brown-nigger",
  });
};

//controller for posting the task

const postTask = (req, res) => {
  res.json(req.body);
};

//getting the task by its ID

const getTasksById = (req, res) => {
  res.send("getting the task by its id");
};

//patch request to the server for updating a single id

const patchTasks = (req, res) => {
  res.send("patch request to the server for updating a single id");
};

//deleting the tasks when they are completed

const deleteTasks = (req, res) => {
  res.send("deleting the tasks when they are completed");
};

module.exports = {
  getAllTasks,
  postTask,
  getTasksById,
  patchTasks,
  deleteTasks,
};

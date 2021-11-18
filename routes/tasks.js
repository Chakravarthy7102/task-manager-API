const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  postTask,
  getTasksById,
  patchTasks,
  deleteTasks,
} = require("../controllers/tasks");

//getting all the tasks//posting a new Task
router.route("/").get(getAllTasks).post(postTask);

//working with url type /api/v1/tasks/:id
//deleteing and  patching/updating and getting the tasks from the same url but diffrent requests

router.route("/:id").get(getTasksById).patch(patchTasks).delete(deleteTasks);

module.exports = router;

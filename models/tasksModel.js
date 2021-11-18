const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, "must requrie the tasks section"],
    trim: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("tasks", TasksSchema);

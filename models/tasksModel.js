const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must requrie the tasks section"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("tasks", TasksSchema);

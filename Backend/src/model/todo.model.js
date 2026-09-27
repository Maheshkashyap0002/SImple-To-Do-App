const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true],
      trim: true,
    },

    completed: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Task_List", todoSchema);

module.exports = Todo;
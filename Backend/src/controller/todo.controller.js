const Todo = require("../model/todo.model");


async function createTask(req, res) {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const task = await Todo.create({
      title
    });

    return res.status(201).json({
      message: "Todo created successfully",
      task,
    });
  } 
    catch (error) {
      console.log(error)
      return res.status(500).json({
       message: "error for creating Task",
       error: error.message,
    });
  }
}



async function getTask(req, res) {
  try {
    const task = await Todo.find(); 

    if(task.length == 0){
      return res.status(400).json({
        message : "No Task Availble"
      })
    }


    return res.status(200).json({
      message: "Todos fetched successfully",
      task,
    });

  } 
  catch (err) {
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
}



async function getTaskById(req, res) {
  try {
    const task = await Todo.findOne({
      _id: req.params.id 
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.status(200).json({
      task,
    });

  } 
  catch (err) {
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
}



async function updateTask(req, res) {
  try {
    const { title, completed } = req.body;

    const updateData = {};

    if (title !== undefined) {
      updateData.title = title;
    }

    if (completed !== undefined) {
      updateData.completed = completed;
    }
    const task = await Todo.findOneAndUpdate(
      {
        _id: req.params.id
      },
        updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      message: "Todo updated successfully",
      task,
    });

  } 
  
  catch (err) {
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }

}



async function deleteTask(req, res) {
  try {
    const task = await Todo.findOneAndDelete({
      _id: req.params.id
    });

    if (!task) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      message: "Todo deleted successfully",
    });

  } 
  catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
}



module.exports = {createTask, getTask, getTaskById, updateTask, deleteTask }
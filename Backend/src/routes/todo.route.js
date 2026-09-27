const express = require("express")
const router = express.Router()
const todoController = require("../controller/todo.controller")


router.post("/create", todoController.createTask)
router.get("/all", todoController.getTask)
router.get("/:id", todoController.getTaskById)
router.patch("/:id",  todoController.updateTask)
router.delete("/:id", todoController.deleteTask)


module.exports = router ;
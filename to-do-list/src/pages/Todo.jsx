import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "../component/ToDoItem";
import "./todo.css";

const Todos = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const API_URL = "http://localhost:3000/api/task";



  const getTodos = async () => {

      const response = await axios.get(`${API_URL}/all`);
      console.log(response.data);
      setTodos(response.data.task);

  };



  useEffect(() => { // Load karne ke liye 
    getTodos();
  }, []);



  const addTodo = async (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/create`, { title: task}
      );

      console.log(response.data);

      setTask(""); 
      getTodos();

    } catch (error) {
      console.log(
        "Error adding todo:",
        error.response?.data || error.message
      );
    }
  };


 

const deleteTodo = async (id) => {
  try {
    console.log("Deleting ID:", id);

    const response = await axios.delete(
      `${API_URL}/${id}`
    );

    console.log("Delete response:", response.data);

    getTodos();

  } catch (error) {
    console.log(
      "Delete error:",
      error.response?.data || error.message
    );
  }
};

 

const completeTodo = async (id, completed) => {
  try {
    console.log("Updating ID:", id);

    const response = await axios.patch(
      `${API_URL}/${id}`,
      {
        completed: !completed,
      }
    );

    console.log("Update response:", response.data);

    getTodos();

  } catch (error) {
    console.log(
      "Update error:",
      error.response?.data || error.message
    );
  }
};

  return (
    <div className="todos-page">
      
      <div className="todo-container">
        <h1>My Todo List</h1>
        <p className="todo-subtitle"> Add and manage your daily tasks </p>
        
        <form className="todo-form" onSubmit={addTodo} >

          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button type="submit">Add Task</button>

        </form>

        <div className="todo-list">
          {todos.length === 0 ? (

            <p className="empty-todo">No tasks added yet.</p>

          ) : (

            todos.map((todo) => (
              
              <TodoItem
                key={ todo._id }
                todo={todo}
                onDelete={deleteTodo}
                onComplete={completeTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Todos;
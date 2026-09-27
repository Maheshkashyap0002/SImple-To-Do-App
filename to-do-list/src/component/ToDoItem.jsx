import React from "react";
import "./ToDoItem.css";

const TodoItem = ({ todo, onDelete, onComplete }) => {
  return (
    <div className="todo-item">

      <div className="todo-left">

        <input
          type="checkbox"
          checked={todo.completed || false}
          onChange={() => {
            console.log("Complete ID:", todo._id);
            onComplete(todo._id, todo.completed);
          }}
        />

        <span className={todo.completed ? "completed" : ""}>
          {todo.title}
        </span>

      </div>

      <button
        type="button"
        onClick={() => {
          console.log("Delete ID:", todo._id);
          onDelete(todo._id);
        }}
      >
        Delete
      </button>

    </div>
  );
};

export default TodoItem;






// import React from "react";
// import "./ToDoItem.css";

// const TodoItem = ({ todo, onDelete, onComplete }) => {

//   const todoId = todo?.id ?? todo?._id;

//   console.log("TODO OBJECT:", todo);
//   console.log("TODO ID:", todoId);

//   return (
//     <div className="todo-item">

//       <div className="todo-left">

//         <input
//           type="checkbox"
//           checked={todo.completed || false}
//           onChange={() => {
//             console.log("Complete ID:", todoId);
//             onComplete(todoId, todo.completed);
//           }}
//         />

//         <span className={todo.completed ? "completed" : ""}>
//           {todo.title}
//         </span>

//       </div>

//       <button
//         type="button"
//         onClick={() => {
//           console.log("Delete ID:", todoId);
//           onDelete(todoId);
//         }}
//       >
//         Delete
//       </button>

//     </div>
//   );
// };

// export default TodoItem;
import React from "react";
import { FaTrash } from "react-icons/fa";

function DoneTodo({ todo, handleDelete }) {
  const id = todo.id;
  return (
    <div className="flex lg:w-80 w-52 justify-between p-4 bg-gray-900 mb-4 rounded-md">
      <h2 className="line-through decoration-green-500">{todo.todoName}</h2>
      <FaTrash onClick={() => handleDelete(id)} />
    </div>
  );
}

export default DoneTodo;

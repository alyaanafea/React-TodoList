import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

const OneTodo = ({ todo, handleDelete, handleDone }) => {
  const id = todo.id;
  return (
    <div className="flex lg:w-80 w-52 justify-between p-4 bg-gray-900 mb-4 rounded-md">
      <h2>{todo.todoName}</h2>
      <div className="flex gap-5">
        {" "}
        <FaTrash className="" onClick={() => handleDelete(id)} />
        <FaCheck onClick={() => handleDone(id)} />
      </div>
    </div>
  );
};

export default OneTodo;

import React, { useState } from "react";
import OneTodo from "./OneTodo";

const Todos = ({ todos, handleDelete, handleDone }) => {
  return (
    <>
      <h2 className="text-lg">Tasks to do - {todos.length}</h2>
      <ul className="h-52 overflow-auto">
        {todos.map((todo) => (
          <li key={todo.id}>
            <OneTodo
              todo={todo}
              handleDelete={handleDelete}
              handleDone={handleDone}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;

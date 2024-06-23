import React from "react";

import DoneTodo from "./DoneTodo";

function DoneTodos({ handleDone, doneTodos, todos, handleDelete }) {
  return (
    <>
      <h2 className="text-lg">Done Todos {doneTodos.length}</h2>
      <ul className="h-52 overflow-auto">
        {doneTodos.map((todo) => (
          <li key={todo.id}>
            <DoneTodo todo={todo} handleDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default DoneTodos;

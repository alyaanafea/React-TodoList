import React, { useState } from "react";

const TodoForm = ({ handleAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(newTodo);
    setNewTodo("");
  };
  return (
    <div className=" ">
      <form>
        <input
          className="px-4 h-10 lg:w-80 w-52 mx-3 bg-inherit border border-violet-500 rounded-md outline-none"
          type="text"
          value={newTodo}
          onChange={handleChange}
        />
        <button
          className="bg-violet-500 px-3 rounded-sm text-lg h-9  text-white"
          type="submit"
          onClick={handleSubmit}
        >
          +
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

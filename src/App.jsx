import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import DoneTodos from "./components/DoneTodos";

function App() {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setdoneTodos] = useState([]);
  const handleAddTodo = (newTodo) => {
    if (newTodo.trim()) {
      const id = uuidv4();
      setTodos([...todos, { todoName: newTodo, id }]);
    }
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setdoneTodos(doneTodos.filter((todo) => todo.id !== id));
  };
  const handleDone = (id) => {
    const doneTodo = todos.find((todo) => todo.id == id);
    console.log(doneTodo);
    setdoneTodos([...doneTodos, doneTodo]);
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="bg-slate-950 w-full h-screen flex flex-col items-center pt-14 gap-5 text-violet-500">
      <TodoForm handleAddTodo={handleAddTodo} />
      <Todos
        todos={todos}
        handleDelete={handleDelete}
        handleDone={handleDone}
      />
      <DoneTodos
        todos={todos}
        doneTodos={doneTodos}
        handleDone={handleDone}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;

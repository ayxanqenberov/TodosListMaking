import React, { useState } from "react";
import { addTodos } from "../Redux/features/todoSlice";
import { Todo } from "../types/types";
import { useDispatch } from "react-redux";
import "../components/todo.css"
const TodoUpPart = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();

  const getAddedTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todo.trim()) {
      alert("todonu doldurun");
      return;
    }
    const payload: Todo = {
      id: Math.floor(Math.random() * 10),
      content: todo,
    };
    dispatch(addTodos(payload));
    setTodo("");
  };

  return (
    <form className="form" action="#">
      <h1>Todo Project</h1>
      <div className="homeTodo">
        <input
          value={todo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
          placeholder="Enter a todo"
          type="text"
        />
        <button onClick={getAddedTodo}>Add</button>
      </div>
    </form>
  );
};

export default TodoUpPart;

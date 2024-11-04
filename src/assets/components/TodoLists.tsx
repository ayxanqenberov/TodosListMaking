import React, { useState } from "react";
import { Todo } from "../types/types";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo, updateTodo } from "../Redux/features/todoSlice";
import { FaCheck, FaPen, FaTrash } from "react-icons/fa";
import "../components/todo.css";

export interface todoItem {
  todoItem: Todo;
}

const TodoLists = ({ todoItem }: todoItem) => {
  const { id, content, completed } = todoItem; 
  const [edit, setEdit] = useState<boolean>(true);
  const [newEdit, setNewEdit] = useState<string>(content);

  const dispatch = useDispatch();

  const getdeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const updateTodoList = () => {
    const payload: Todo = {
      id: id,
      content: newEdit,
      completed: false
    };
    dispatch(updateTodo(payload));
  };

  const getComplate = () => {
    dispatch(completeTodo(todoItem.id));
  };

  return (
    <li 
      className={`lists ${completed ? 'completed' : 'lists'}`} 
      onDoubleClick={getComplate}
    >
      {edit ? (
        <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {content}
        </p>
      ) : (
        <input
          className="newInput"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewEdit(e.target.value)
          }
          type="text"
          value={newEdit}
        />
      )}
      <div className="btns">
        <FaTrash onClick={() => getdeleteTodo(id)} />
        {edit ? (
          <FaPen onClick={() => setEdit(false)} />
        ) : (
          <FaCheck
            onClick={() => {
              setEdit(true);
              updateTodoList();
            }}
          />
        )}
      </div>
    </li>
  );
};

export default TodoLists;
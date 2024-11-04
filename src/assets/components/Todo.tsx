import React from "react";
import "./todo.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import TodoLists from "./TodoLists";
import TodoUpPart from "./TodoUpPart";
import "../components/todo.css";
import { completeTodo } from "../Redux/features/todoSlice";
import { Todo } from "../types/types";
export interface todoItem {
  todoItem: Todo;
}
const TodoList = ({todoItem}) => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const allComplated = ()=>{
    dispatch(completeTodo(todoItem.id));
  }
  return (
    <div className="todo">
      <TodoUpPart />
      <ul>
        <div className="bttnFeatures">
          <button>All</button>
          <button>Active</button>
          <button onClick={allComplated}>Completed</button>
        </div>
        {todos &&
          todos.map((item) => <TodoLists key={item.id} todoItem={item} />)}
      </ul>
    </div>
  );
};

export default TodoList;

import React, { useState } from "react";
import { Todo } from "../types/types";
export interface todoItem{
    todoItem: Todo;
}

const TodoLists = () => {
  const { id, content } = todoItem;
  const [edit, setEdit] = useState<boolean>(true);
  const [newEdit, setNewEdit] = useState<string>(content);
  return <li>{edit ? content : <input onChange={} />}</li>;
};

export default TodoLists;

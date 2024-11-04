import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, Todos } from "../../types/types";

const initialState: Todos = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index: number = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      const index = state.todos.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.todos[index].completed = !state.todos[index].completed;
        console.log(state.todos[index]);
        
      }
    },
  },
});

export const { addTodos, deleteTodo, updateTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
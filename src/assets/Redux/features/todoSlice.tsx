import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, Todos } from "../../types/types";

const initialState: Todos = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodos: (state: Todos,action: PayloadAction<Todo>) => {
            state.todos = [...state.todos , action.payload]
        },
        deleteTodo:(state: Todos,action:PayloadAction<Todo>)=>{
            state.todos =[...state.todos , action.payload]
        }
    }
})
export const {addTodos , deleteTodo} = todoSlice.actions

export default todoSlice.reducer
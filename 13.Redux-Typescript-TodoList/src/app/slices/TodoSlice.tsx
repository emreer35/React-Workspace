import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoInitalState, TodoType } from "../../types/Types";

const initialState: TodoInitalState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state: TodoInitalState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodoById: (state:TodoInitalState, action:PayloadAction<number>) => {
      state.todos = [...state.todos.filter((todo:TodoType)=>todo.id !== action.payload)]
    },
    updateTodo : (state:TodoInitalState, action:PayloadAction<TodoType>) => {
      state.todos = [...state.todos.map((todo:TodoType)=> todo.id !== action.payload.id ? todo : action.payload) ]
    }
  },
});

export const { createTodo, removeTodoById ,updateTodo } = todoSlice.actions;

export default todoSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
  name: "todolist",
  initialState: {
    ITodoItem: [],
    islogged: false,
  },
  reducers: {
    TodoListTypes(state, { payload }) {
      return { ...state, islogged: true, todoList: payload }
    },
      DeleteTask(state, { payload }) {
      return { ...state, islogged: true, todoList: payload };
    },
    
  },
  
});

export const {TodoListTypes, DeleteTask } = slice.actions

export const selectorUser = (state: { ITodoItem: any }) => state.ITodoItem;

export default slice.reducer

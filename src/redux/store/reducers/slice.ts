import { createSlice } from "@reduxjs/toolkit";
import { ITodoItem} from "../../types";



const initialState = { ITodoItem:[] as ITodoItem[], islogged: false };


export const slice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    TodoListTypes(state, { payload }) {
      state.ITodoItem.push(payload)


    },
      DeleteTask(state, { payload }) {
       return { ...state, islogged: true, ITodoItem: payload };

    },
  }
  
});



export const { TodoListTypes, DeleteTask} = slice.actions;

export const selectorUser = (state: { todolist: any }) => state.todolist;

export default slice.reducer

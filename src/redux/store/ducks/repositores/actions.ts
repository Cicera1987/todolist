import { action, Action } from "typesafe-actions";
import { TodoListTypes, Todolist } from "./types";

export const LOAD_REQUEST = () => action(TodoListTypes.LOAD_REQUEST);

export const LOAD_SUCCESS = (data: Todolist[]) => action(TodoListTypes.LOAD_SUCCESS, data);

export const LOAD_FAILURE = () => action(TodoListTypes.LOAD_FAILURE);

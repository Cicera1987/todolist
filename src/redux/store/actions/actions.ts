import { action } from "typesafe-actions";
import { TodoListTypes, ITodoItem } from "../../types";

export const LOAD_REQUEST = () => action(TodoListTypes.LOAD_REQUEST);

export const LOAD_SUCCESS = (data: ITodoItem[]) => action(TodoListTypes.LOAD_SUCCESS, data);

export const LOAD_FAILURE = () => action(TodoListTypes.LOAD_FAILURE);

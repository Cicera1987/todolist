import {  configureStore } from "@reduxjs/toolkit";
import  useReducer from "./reducers/slice";
import { persistStore} from 'redux-persist'

export const store = configureStore({
  reducer: {
    todolist: useReducer,
  },
});

export const persistor = persistStore(store)
export default store;
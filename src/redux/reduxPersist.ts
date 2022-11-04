import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { Reducer, Action } from 'redux';


// eslint-disable-next-line import/no-anonymous-default-export
export default (reducers: Reducer<unknown, Action<any>>) =>{
   const persistedReducers = persistReducer(
     {
       key: "ITodoItem",
       storage,
       whitelist: ["ITodoItem"],
     },
     reducers
   );
    
    return persistedReducers;
}
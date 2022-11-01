import { Reducer } from "redux";
import { TodoListState, TodoListTypes } from "./types";

const INITIAL_STATE: TodoListState = {
    data: [],
    error: false,
    loading: false,
};

const reducer: Reducer<TodoListState> = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case TodoListTypes.LOAD_REQUEST:
            return{...state, loading: true};
        case TodoListTypes.LOAD_SUCCESS:
            return{...state, loading: false, error: false, data: action.payload.data};
        case TodoListTypes.LOAD_FAILURE:
            return{...state, loading: false, error: true, data: []};
    
    default:
        return state;
            
    }
}

export default reducer;
import  {combineReducers} from 'redux'

import modelsReducer from './store/reducers/slice'

export default combineReducers({
  ITodoItem: modelsReducer,
});
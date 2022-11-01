import {createStore, Store} from 'redux'

import { TodoListState } from './ducks/repositores/types'

import rootreducer from './ducks/rootreducer'

export interface AplicationState {
    todolist: TodoListState
}

const store: Store <AplicationState> = createStore(rootreducer)
//store
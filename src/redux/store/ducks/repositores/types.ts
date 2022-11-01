// Action types
export enum TodoListTypes {
    LOAD_REQUEST = '@todolist/LOAD_REQUEST',
    LOAD_SUCCESS = '@todolist/LOAD_SUCCESS',
    LOAD_FAILURE = '@todolist/LOAD_FAILURE',
};


// Data types

export interface Todolist{
    id: number,
    title: string,
    description: string
}


//states types

export interface TodoListState{
    readonly data: Todolist[],
    readonly loading: boolean,
    readonly error: boolean
}
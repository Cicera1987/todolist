// Action types
export enum TodoListTypes {
    LOAD_REQUEST = '@todolist/LOAD_REQUEST',
    LOAD_SUCCESS = '@todolist/LOAD_SUCCESS',
    LOAD_FAILURE = '@todolist/LOAD_FAILURE',
};


// Data types

export interface todolist{
    id: number
    title: string
    description: string
};


//states types
// readonly nunca deixa estas informações serem alteradas
export interface TodoListState{
    readonly data: todolist[],
    readonly loading: boolean,
    readonly error: boolean
};
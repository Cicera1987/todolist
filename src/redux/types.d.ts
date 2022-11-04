// Action types
export enum TodoListTypes {
    LOAD_REQUEST = '@ITodoItem/LOAD_REQUEST',
    LOAD_SUCCESS = '@ITodoItem/LOAD_SUCCESS',
    LOAD_FAILURE = '@ITodoItem/LOAD_FAILURE',
};

//states types

export interface TodoListState{
    readonly data: ITodoItem[],
    readonly loading: boolean,
    readonly error: boolean
};

export interface ITodoItem{
    id: number,
    title:string,
    description: string,
    tags: ITagsItem[] | null
}

export interface User{
    id: number,
    user: string,
    password: string,
}
export interface ITagsItem{
    id: number,
    title: string

}
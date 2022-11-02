export interface ITodoItem{
    id: number,
    title:string,
    description: string,
    tags: ITagsItem[] | null
}

export interface ITagsItem{
    id: number,
    title: string

}
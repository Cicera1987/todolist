interface ITodoItem{
    id: number,
    title:string,
    description: string,
    tags: ITagsItem[] | null
}

interface ITagsItem{
    id: number,
    title: string

}
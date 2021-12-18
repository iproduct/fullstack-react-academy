export type IdType = string

export class Post{
    constructor(
        public title: string,
        public content: string,
        public authorId: IdType,
        public imageUrl?: string,
        public categories: string[] = [],
        public keywords: string[] = [],
        public id?: IdType,
    ){}
}
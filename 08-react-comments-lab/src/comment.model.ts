export type IdType = number | undefined;

export interface Identifiable{
    id: IdType;
}

export enum CommentStatus {
    ACTIVE = 1, SUSPENDED
}

export class CommentModel implements Identifiable{
    public id: IdType = undefined
    public created = Date.now();
    public modified = Date.now();
    constructor(public title: string, public content: string, public status = CommentStatus.ACTIVE) {
    }
}
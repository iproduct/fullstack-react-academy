export type IdType = number | undefined;

export enum CommentStatus {
    ACTIVE = 1, SUSPENDED
}

export class CommentModel {
    public id: IdType = undefined
    public created = Date.now();
    public modified = Date.now();
    constructor(public title: string, public content: string, public status = CommentStatus.ACTIVE) {
    }
}
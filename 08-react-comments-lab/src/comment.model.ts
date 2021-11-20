export type IdType = number | undefined;

enum CommentStatus {
    ACTIVE = 1, SUSPENDED
}

export class CommentModel {
    public id: IdType = undefined
    public created = Date.now();
    public modified = Date.now();
    constructor(public title: string, public content: string, status = CommentStatus.ACTIVE) {
    }
}